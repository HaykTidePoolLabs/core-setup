import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { configValidationSchema } from "./config/config.schema";
import { PostgresDatabaseProviderModule } from "./providers/database/Postgres";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [`.env.${process.env.NODE_ENV}`],
      validationSchema: configValidationSchema,
      isGlobal: true,
    }),
    PostgresDatabaseProviderModule,
  ],
})
export class AppModule {}
