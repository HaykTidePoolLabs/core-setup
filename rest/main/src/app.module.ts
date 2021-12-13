import {CacheInterceptor, Module} from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_INTERCEPTOR } from "@nestjs/core";
import {SentryInterceptor} from '@ntegral/nestjs-sentry';
import { SentryProviderModule } from "./providers/sentry";
import { configValidationSchema } from './config/config.schema';
import { RedisCacheProviderModule } from "./providers/cache/redis";
import { PostgresDatabaseProviderModule } from './providers/database/Postgres';
import { MicroservicesProviderModule } from './providers/microservices';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [`.env.${process.env.NODE_ENV}`],
      validationSchema: configValidationSchema,
      isGlobal: true,
    }),
    SentryProviderModule,
    RedisCacheProviderModule,
    MicroservicesProviderModule,
    PostgresDatabaseProviderModule,
    UserModule,
  ],
  providers: [
    {
        provide: APP_INTERCEPTOR,
        useClass: CacheInterceptor
    },
    {
        provide: APP_INTERCEPTOR,
        useValue: new SentryInterceptor({})
    },
  ],
})
export class AppModule {}
