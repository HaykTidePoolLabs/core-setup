import {CACHE_MANAGER, CacheModule, Global, Module} from '@nestjs/common';
import {ConfigModule, ConfigService} from '@nestjs/config';
import { redisConfig } from '../../config/chache/redis';

const CacheService = CacheModule.registerAsync({
        imports: [ConfigModule],
        inject: [ConfigService],
        useFactory: async (configService: ConfigService) => {
            return {
                ...redisConfig(configService),
            };
        },
    });

@Global()
@Module({
    imports: [
        CacheService,
    ],
    exports: [
        CacheService,
    ]
})
export class RedisCacheProviderModule {}