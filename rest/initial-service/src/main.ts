import { NestFactory } from '@nestjs/core';
import { ValidationPipe, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';

async function bootstrap() {
  const logger = new Logger();
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());

  // @ts-ignore
  const port = configService.get('PORT');
  await app.listen(port);
  // @ts-ignore
  logger.log(`${configService.get('NODE_ENV')} Environment Application is running on: ${await app.getUrl()}`);
}
bootstrap();
