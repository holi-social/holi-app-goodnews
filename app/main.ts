import setupLogging from "./logging.ts";
import { ServerConfig, startServer } from "./server.ts";

setupLogging(Deno.env.get("ENVIRONMENT") || "development");

const serverConfigFromEnv = (): ServerConfig => {
  const asNumber = (str?: string) => str ? Number(str) : undefined;
  const asBoolean = (str?: string) => str ? Boolean(str) : undefined;
  return {
    port: asNumber(Deno.env.get("PORT")),
    cacheEnabled: asBoolean(Deno.env.get("CACHE_ENABLED")),
    cacheTtlMs: asNumber(Deno.env.get("CACHE_TTL_MS")),
    contentful: {
      spaceId: Deno.env.get("CONTENTFUL_SPACE_ID"),
      deliveryApiAccessToken: Deno.env.get(
        "CONTENTFUL_DELIVERY_API_ACCESS_TOKEN",
      ),
      environment: Deno.env.get("CONTENTFUL_ENVIRONMENT"),
    },
  };
};

await startServer(serverConfigFromEnv());
