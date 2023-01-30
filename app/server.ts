import {
  createSchema,
  createYoga,
  gql,
  serve,
  useResponseCache,
} from "./deps.ts";
import { executeArticlesQuery } from "./goodnews.ts";
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

const createResolvers = (config: ContentfulConfig) => ({
  Query: {
    articles: executeArticlesQuery(config),
  },
});

export const DEFAULT_PORT = 8002;
export const DEFAULT_CACHE_ENABLED = true;
export const DEFAULT_CACHE_TTL_MS = 60_000;
export const DEFAULT_PAGE_SIZE = 100;

export const DEFAULT_CONTENTFUL_ENVIRONMENT = "master";

export interface ContentfulConfig {
  spaceId: string;
  environment: string; // default: master
  deliveryApiAccessToken: string;
  pageSize: number;
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
        session: () => null, // global cache, shared by all users
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
    context: (context: GraphQLContext) => {
      const language = (context.params?.extensions?.headers || {})[
        "accept-language"
      ];
      return {
        ...context,
        language,
      };
    },
  });
};

// deno-lint-ignore no-explicit-any
export type GraphQLServer = any;

export type GraphQLContext = {
  params?: {
    extensions?: {
      headers?: {
        [key: string]: string;
      };
    };
  };
  language?: string;
};

export const startServer = (config: ServerConfig): Promise<void> => {
  const graphQLServer: GraphQLServer = createGraphQLServer(config);
  return serve(graphQLServer.handleRequest, {
    port: config.port || DEFAULT_PORT,
    onListen({ port, hostname }) {
      logger.info(
        `Server started at http://${
          hostname === "0.0.0.0" ? "localhost" : hostname
        }:${port}/graphql`,
      );
    },
  });
};
