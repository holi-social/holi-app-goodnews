import { logger, LogSeverity } from './logging.ts'
import {
  DEFAULT_CACHE_ENABLED,
  DEFAULT_CACHE_TTL_MS,
  DEFAULT_CONTENTFUL_ENVIRONMENT,
  DEFAULT_PAGE_SIZE,
  DEFAULT_PORT,
  ServerConfig,
  startServer,
} from './server.ts'

const environment = Deno.env.get('ENVIRONMENT') || 'development'

logger.setUpLogger(
  environment,
  environment === 'development' ? LogSeverity.DEFAULT : LogSeverity.INFO,
)

const requiredEnv = <T>(
  name: string,
  typeFn: (s: string) => T,
  fallback?: T,
): T => {
  const env = Deno.env.get(name)
  if (env === undefined && fallback === undefined) {
    throw Error(`Environment variable "${name}" is required`)
  } else {
    return env !== undefined ? typeFn(env) : fallback!
  }
}

const asBoolean = (str: string) => /^true$/i.test(str)

const serverConfigFromEnv = (): ServerConfig => {
  const fake = requiredEnv('FAKE', asBoolean, false) // For local development. If set, the API returns dummy data
  return {
    port: requiredEnv('PORT', Number, DEFAULT_PORT),
    cacheEnabled: requiredEnv(
      'CACHE_ENABLED',
      asBoolean,
      DEFAULT_CACHE_ENABLED,
    ),
    cacheTtlMs: requiredEnv(
      'CACHE_TTL_MS',
      Number,
      DEFAULT_CACHE_TTL_MS,
    ),
    contentful: {
      baseUrl: requiredEnv(
        'CONTENTFUL_BASE_URL',
        String,
        fake ? 'dummy value' : undefined,
      ),
      spaceId: requiredEnv(
        'CONTENTFUL_SPACE_ID',
        String,
        fake ? 'dummy value' : undefined,
      ),
      deliveryApiAccessToken: requiredEnv(
        'CONTENTFUL_DELIVERY_API_ACCESS_TOKEN',
        String,
        fake ? 'dummy value' : undefined,
      ),
      environment: requiredEnv(
        'CONTENTFUL_ENVIRONMENT',
        String,
        DEFAULT_CONTENTFUL_ENVIRONMENT,
      ),
      pageSize: DEFAULT_PAGE_SIZE,
      fake,
    },
  }
}

const config = serverConfigFromEnv()
await startServer(config)
