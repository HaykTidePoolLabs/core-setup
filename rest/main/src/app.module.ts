import {CacheInterceptor, Module} from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { configValidationSchema } from './config/config.schema';
import { RedisCacheProviderModule } from "./providers/cache/redis";
import { PostgresDatabaseProviderModule } from './providers/database/Postgres';
import { MicroservicesProviderModule } from './providers/microservices';
import { UserModule } from './modules/user/user.module';
import {APP_INTERCEPTOR} from "@nestjs/core";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [`.env.${process.env.NODE_ENV}`],
      validationSchema: configValidationSchema,
      isGlobal: true,
    }),
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
  ],
})
export class AppModule {}
