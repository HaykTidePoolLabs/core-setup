import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import { ConnectionOptions } from 'typeorm';
import {ConfigModule, ConfigService} from '@nestjs/config';
import { postgresConfig } from '../../config/database/postgres';


@Module({
  imports: [
      TypeOrmModule.forRootAsync({
          imports: [ConfigModule],
          inject: [ConfigService],
          useFactory: async (configService: ConfigService) => {
              return postgresConfig(configService);
          },
      })
  ]
})
export class PostgresDatabaseProviderModule {}