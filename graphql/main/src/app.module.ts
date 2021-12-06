import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { configValidationSchema } from './config/config.schema';
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
        MicroservicesProviderModule,
        PostgresDatabaseProviderModule,
        GraphGLProviderModule,
        UserModule,
        PostsModule,
    ],
    providers: [],
})
export class AppModule {}