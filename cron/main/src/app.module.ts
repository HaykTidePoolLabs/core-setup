import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule'
import { configValidationSchema } from './config/config.schema';
import { MicroservicesProviderModule } from './providers/microservices';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [`.env.${process.env.NODE_ENV}`],
      validationSchema: configValidationSchema,
      isGlobal: true,
    }),
    ScheduleModule.forRoot(),
    MicroservicesProviderModule,
    UserModule,
  ],
})
export class AppModule {}
