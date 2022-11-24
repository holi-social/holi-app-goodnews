import { createSchema, createYoga, serve, useResponseCache } from "./deps.ts";

const typeDefs = `
    type Query {
        ping: String!
    }
`;

const createResolvers = (_config: ServerConfig) => ({
  Query: {
    ping: () => "pong!",
  },
});

export const DEFAULT_PORT = 8002;
export const DEFAULT_CACHE_ENABLED = true;
export const DEFAULT_CACHE_TTL_MS = 60_000;

export interface ServerConfig {
  port?: number; // default: 8002
  cacheEnabled?: boolean; // default: true
  cacheTtlMs?: number; // default: 60 seconds
  contentfulApiKey?: string; // must be given in order for places calls to work
}

export const createGraphQLServer = (
  config: ServerConfig,
): GraphQLServer => {
  const plugins = (config.cacheEnabled || DEFAULT_CACHE_ENABLED)
    ? [useResponseCache({
      session: () => null, // global cache, shared by all users
      ttlPerSchemaCoordinate: {
        "Query.ping": config.cacheTtlMs || DEFAULT_CACHE_TTL_MS,
      },
    })]
    : [];
  const resolvers = createResolvers(config);
  return createYoga({
    schema: createSchema({ resolvers, typeDefs }),
    graphiql: true,
    plugins,
  });
};

// deno-lint-ignore no-explicit-any
export type GraphQLServer = any;

export const startServer = (
  config: ServerConfig,
): Promise<void> => {
  const graphQLServer: GraphQLServer = createGraphQLServer(config);
  return serve(graphQLServer.handleRequest, {
    port: config.port || DEFAULT_PORT,
    onListen({ port, hostname }) {
      console.log(
        `Server started at http://${
          hostname === "0.0.0.0" ? "localhost" : hostname
        }:${port}/graphql`,
      );
    },
  });
};
