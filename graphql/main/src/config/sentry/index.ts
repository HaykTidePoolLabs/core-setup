import { ConfigService } from "@nestjs/config";
import {SentryModuleOptions} from "@ntegral/nestjs-sentry";
import {LogLevel} from "@sentry/types";
import {Integrations} from "@sentry/tracing";

export const sentryConfig = (configService: ConfigService): SentryModuleOptions => {
    return {
        integrations: [
            new Integrations.Express()
        ],
        dsn: configService.get('SENTRY_DSN'),
        environment: configService.get('SENTRY_ENV'),
        release: configService.get('SENTRY_RELEASE'),
        debug: true,
        logLevel: LogLevel.Error //based on sentry.io loglevel //
    }
}