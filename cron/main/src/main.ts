import { NestFactory } from '@nestjs/core';
import {MicroserviceOptions, Transport} from '@nestjs/microservices';
import { AppModule } from './app.module';
import { options } from './config/rabitmq'

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
      AppModule,
      {
        transport: Transport.RMQ,
        options,
      },
  );
  app.listen();
}
bootstrap();