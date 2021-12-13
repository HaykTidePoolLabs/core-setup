import { Global, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SentryModule, SentryModuleOptions } from '@ntegral/nestjs-sentry';
import { sentryConfig } from '../../config/sentry';

const SentryService = SentryModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: async (configService: ConfigService): Promise<SentryModuleOptions> => {
        return {
            ...sentryConfig(configService)
        }
    },
});


@Global()
@Module({
    imports: [
        SentryService,
    ],
    exports: [
        SentryService,
    ],
})
export class SentryProviderModule {}