import {ConfigService} from "@nestjs/config";
import * as redisStore from 'cache-manager-redis-store';

export const redisConfig = (configService: ConfigService) => {
    return {
        store: redisStore,
        host: configService.get('REDIS_HOST'),
        port: configService.get('REDIS_PORT'),
        ttl: configService.get('REDIS_TTL'),
    }
}