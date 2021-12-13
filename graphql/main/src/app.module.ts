import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import {APP_INTERCEPTOR} from "@nestjs/core";
import {GraphqlInterceptor} from "@ntegral/nestjs-sentry";
import { configValidationSchema } from './config/config.schema';
import {SentryProviderModule} from "./providers/sentry";
import { RedisCacheProviderModule } from "./providers/cache/redis";
import { PostgresDatabaseProviderModule } from './providers/database/Postgres';
import { GraphGLProviderModule } from './providers/graphql';
import { MicroservicesProviderModule } from './providers/microservices';
import { UserModule } from './modules/user/user.module';
import { PostsModule } from './modules/posts/posts.module';


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
        GraphGLProviderModule,
        UserModule,
        PostsModule,
    ],
    providers: [
        {
            provide: APP_INTERCEPTOR,
            useFactory: () => new GraphqlInterceptor(),
        },
    ],
})
export class AppModule {}