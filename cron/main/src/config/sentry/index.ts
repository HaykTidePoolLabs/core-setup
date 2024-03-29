import { ConfigService } from "@nestjs/config";
import {SentryModuleOptions} from "@ntegral/nestjs-sentry";
import {LogLevel} from "@sentry/types";

export const sentryConfig = (configService: ConfigService): SentryModuleOptions => {
    return {
        dsn: configService.get('SENTRY_DSN'),
        environment: configService.get('SENTRY_ENV'),
        release: configService.get('SENTRY_RELEASE'),
        debug: true,
        logLevel: LogLevel.Debug //based on sentry.io loglevel //
    }
}