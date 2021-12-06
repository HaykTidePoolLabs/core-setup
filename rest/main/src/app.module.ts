import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { configValidationSchema } from "./config/config.schema";
import { PostgresDatabaseProviderModule } from "./providers/database/Postgres";
import { MicroservicesProviderModule } from './providers/microservices';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [`.env.${process.env.NODE_ENV}`],
      validationSchema: configValidationSchema,
      isGlobal: true,
    }),
    MicroservicesProviderModule,
    PostgresDatabaseProviderModule,
    UserModule,
  ],
})
export class AppModule {}