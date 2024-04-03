import { GoodNewsArticleQueryResponse, GoodNewsLanguage } from "./api_types.ts";
import {
  createSchema,
  createYoga,
  gql,
  serve,
  useResponseCache,
} from "./deps.ts";
import {
  DEFAULT_LANGUAGE,
  executeArticlesQuery,
  SUPPORTED_LANGUAGES,
} from "./goodnews.ts";
import { logger } from "./logging.ts";

const typeDefs = gql`
  enum Category {
    ANIMAL_RIGHTS
    CLIMATE
    DIGITIZATION
    EDUCATION
    GLOBAL_HEALTH
    HUMAN_RIGHTS
    SUSTAINABILITY
  }

  type GoodNewsArticle {
    id: String!
    # ISO 8601 date (YYYY-MM-DD)
    date: String!
    headline: String!
    teaserText: String!
    pictureUrl: String!
    pictureCredit: String
    articleUrl: String!
    source: String
    sortKey: Int!
    category: Category
    language: String
  }

  type GoodNewsArticlesQueryResponse {
    articles: [GoodNewsArticle]!
    previousDateTeaser: GoodNewsArticle
  }

  type Query {
    # returns the articles of the day, starting *after* lastDate (if given) or today (if not given)
    articles(lastDate: String): GoodNewsArticlesQueryResponse
  }
`;

const createResolvers = (config: ContentfulConfig) => {
  return ({
    Query: {
      articles: (
        // deno-lint-ignore no-explicit-any
        _parent: any,
        parameters: { lastDate?: string },
        context: GraphQLContext,
      ): Promise<GoodNewsArticleQueryResponse> => {
        return config.fake
          ? Promise.resolve({ articles: [], previousDateTeaser: undefined })
          : executeArticlesQuery(config)(
            parameters,
            getLanguage(context?.request?.headers),
          );
      },
    },
  });
};

const getLanguage = (headers?: Headers) => {
  const languages: string = headers?.get("accept-language") || DEFAULT_LANGUAGE;
  return (languages
    .split(",") // languages are comma separated
    .map((language) => language.split("-")[0]) // languages may include country code 'de-DE' e.g.
    .map((language) => language.split(";")[0]) // languages may include a 'de;q=0.6' e.g.
    .find((language) => SUPPORTED_LANGUAGES.includes(language)) ||
    DEFAULT_LANGUAGE) as GoodNewsLanguage;
};

export const DEFAULT_PORT = 8002;
export const DEFAULT_CACHE_ENABLED = true;
export const DEFAULT_CACHE_TTL_MS = 60_000;
export const DEFAULT_PAGE_SIZE = 100;

export const DEFAULT_CONTENTFUL_ENVIRONMENT = "master";

export interface ContentfulConfig {
  baseUrl: string;
  spaceId: string;
  environment: string; // default: master
  deliveryApiAccessToken: string;
  pageSize: number;
  fake: boolean; // For local development. If set, the API returns dummy data
}

export interface ServerConfig {
  port: number; // default: 8002
  cacheEnabled: boolean; // default: true
  cacheTtlMs: number; // default: 60 seconds
  contentful: ContentfulConfig;
}

export const createGraphQLServer = (config: ServerConfig): GraphQLServer => {
  const plugins = config.cacheEnabled || DEFAULT_CACHE_ENABLED
    ? [
      useResponseCache({
        // global cache per language, shared by all users
        session: (request: Request) => getLanguage(request.headers),
        ttlPerSchemaCoordinate: {
          "Query.articles": config.cacheTtlMs || DEFAULT_CACHE_TTL_MS,
        },
      }),
    ]
    : [];
  const resolvers = createResolvers(config.contentful);
  return createYoga({
    schema: createSchema({ resolvers, typeDefs }),
    graphiql: true,
    plugins,
  });
};

// deno-lint-ignore no-explicit-any
export type GraphQLServer = any;

export type GraphQLContext = {
  request?: { headers: Headers };
  params?: {
    extensions?: {
      headers?: {
        [key: string]: string;
      };
    };
  };
};

export const startServer = (config: ServerConfig): Promise<void> => {
  const graphQLServer: GraphQLServer = createGraphQLServer(config);
  return serve(graphQLServer, {
    port: config.port || DEFAULT_PORT,
    onListen({ port, hostname }) {
      logger.info(
        `Server started at http://${
          hostname === "0.0.0.0" ? "localhost" : hostname
        }:${port}/graphql`,
      );
      if (config.contentful.fake) {
        logger.info(
          `Server is serving fake data due to FAKE env var set to true`,
        );
      }
    },
  });
};
