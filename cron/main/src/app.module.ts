import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule'
import {SentryInterceptor} from "@ntegral/nestjs-sentry";
import {APP_INTERCEPTOR} from "@nestjs/core";
import { configValidationSchema } from './config/config.schema';
import { MicroservicesProviderModule } from './providers/microservices';
import {SentryProviderModule} from "./providers/sentry";
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [`.env.${process.env.NODE_ENV}`],
      validationSchema: configValidationSchema,
      isGlobal: true,
    }),
    SentryProviderModule,
    ScheduleModule.forRoot(),
    MicroservicesProviderModule,
    UserModule,
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useValue: new SentryInterceptor({})
    },
  ],
})
export class AppModule {}
