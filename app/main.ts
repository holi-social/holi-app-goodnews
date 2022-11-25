import setupLogging from "./logging.ts";
import {
  DEFAULT_CACHE_ENABLED,
  DEFAULT_CACHE_TTL_MS,
  DEFAULT_CONTENTFUL_ENVIRONMENT,
  DEFAULT_PORT,
  ServerConfig,
  startServer,
} from "./server.ts";

setupLogging(Deno.env.get("ENVIRONMENT") || "development");

const serverConfigFromEnv = (): ServerConfig => {
  const required = <T>(name: string, t?: T): T => {
    if (!t) {
      throw Error(`Environment variable "${name}" is required`);
    } else {
      return t!;
    }
  };
  const asNumber = (str?: string) => str ? Number(str) : undefined;
  const asBoolean = (str?: string) => str ? Boolean(str) : undefined;
  return {
    port: required("PORT", asNumber(Deno.env.get("PORT")) || DEFAULT_PORT),
    cacheEnabled: required(
      "CACHE_ENABLED",
      asBoolean(Deno.env.get("CACHE_ENABLED")) || DEFAULT_CACHE_ENABLED,
    ),
    cacheTtlMs: required(
      "CACHE_TTL_MS",
      asNumber(Deno.env.get("CACHE_TTL_MS")) || DEFAULT_CACHE_TTL_MS,
    ),
    contentful: {
      spaceId: required(
        "CONTENTFUL_SPACE_ID",
        Deno.env.get("CONTENTFUL_SPACE_ID"),
      ),
      deliveryApiAccessToken: required(
        "CONTENTFUL_DELIVERY_API_ACCESS_TOKEN",
        Deno.env.get(
          "CONTENTFUL_DELIVERY_API_ACCESS_TOKEN",
        ),
      ),
      environment: required(
        "CONTENTFUL_ENVIRONMENT",
        Deno.env.get("CONTENTFUL_ENVIRONMENT") ||
          DEFAULT_CONTENTFUL_ENVIRONMENT,
      ),
    },
  };
};

const config = serverConfigFromEnv();
await startServer(config);
