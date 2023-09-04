import { logger, LogSeverity } from "./logging.ts";
import {
  DEFAULT_CACHE_ENABLED,
  DEFAULT_CACHE_TTL_MS,
  DEFAULT_CONTENTFUL_ENVIRONMENT,
  DEFAULT_PAGE_SIZE,
  DEFAULT_PORT,
  ServerConfig,
  startServer,
} from "./server.ts";

const environment = Deno.env.get("ENVIRONMENT") || "development";

logger.setUpLogger(
  environment,
  environment === "development" ? LogSeverity.DEFAULT : LogSeverity.INFO,
);

const serverConfigFromEnv = (): ServerConfig => {
  const required = <T>(name: string, t?: T, fallback?: T): T => {
    if (t === undefined && fallback === undefined) {
      throw Error(`Environment variable "${name}" is required`);
    } else {
      return t !== undefined ? t : fallback!;
    }
  };
  const asNumber = (str?: string) => (str ? Number(str) : undefined);
  const asBoolean = (str?: string) => (str ? /^true$/i.test(str) : undefined);
  const fake =  asBoolean(Deno.env.get("FAKE")) || false // For local development. If set, the API returns dummy data
  return {
    port: required("PORT", asNumber(Deno.env.get("PORT")) || DEFAULT_PORT),
    cacheEnabled: required(
      "CACHE_ENABLED",
      asBoolean(Deno.env.get("CACHE_ENABLED")),
      DEFAULT_CACHE_ENABLED,
    ),
    cacheTtlMs: required(
      "CACHE_TTL_MS",
      asNumber(Deno.env.get("CACHE_TTL_MS")),
      DEFAULT_CACHE_TTL_MS
    ),
    contentful: {
      baseUrl: required(
        "CONTENTFUL_BASE_URL",
        Deno.env.get("CONTENTFUL_BASE_URL"),
        fake ? 'dummy value' : undefined
      ),
      spaceId: required(
        "CONTENTFUL_SPACE_ID",
        Deno.env.get("CONTENTFUL_SPACE_ID"),
        fake ? 'dummy value' : undefined
      ),
      deliveryApiAccessToken: required(
        "CONTENTFUL_DELIVERY_API_ACCESS_TOKEN",
        Deno.env.get("CONTENTFUL_DELIVERY_API_ACCESS_TOKEN"),
        fake ? 'dummy value' : undefined
      ),
      environment: required(
        "CONTENTFUL_ENVIRONMENT",
        Deno.env.get("CONTENTFUL_ENVIRONMENT"),
        DEFAULT_CONTENTFUL_ENVIRONMENT,
      ),
      pageSize: DEFAULT_PAGE_SIZE,
      fake
    },
  };
};

const config = serverConfigFromEnv();
await startServer(config);
