import { ConfigService } from "@nestjs/config";
import * as dotenv from 'dotenv';
import * as path from 'path';
if (!(process.env.NODE_ENV === 'production')) {
    dotenv.config({ path: path.join(__dirname, '../../../', '.env.development') });
}

const getConfig = ({
                       IS_PRODUCTION,
                       DB_HOST,
                       DB_PORT,
                       DB_USERNAME,
                       DB_PASSWORD,
                       DB_DATABASE
                   }): {} => {
    return {
        ssl: IS_PRODUCTION,
        extra: {
            ssl: IS_PRODUCTION ? { rejectUnauthorized: false } : null,
        },
        type: 'postgres',
        autoLoadEntities: true,
        synchronize: true,
        host: DB_HOST,
        port: DB_PORT,
        username: DB_USERNAME,
        password: DB_PASSWORD,
        database: DB_DATABASE,
        logging: IS_PRODUCTION,
    };
}

const config = (configService: ConfigService): {} => {
    return getConfig({
        IS_PRODUCTION: (configService.get('NODE_ENV')) === 'production',
        DB_HOST: configService.get('DB_HOST'),
        DB_PORT: configService.get('DB_PORT'),
        DB_USERNAME: configService.get('DB_USERNAME'),
        DB_PASSWORD: configService.get('DB_PASSWORD'),
        DB_DATABASE: configService.get('DB_DATABASE'),
    })
};

export default {...getConfig({
    IS_PRODUCTION: process.env.NODE_ENV === 'production',
    DB_HOST: process.env.DB_HOST,
    DB_PORT: parseInt(process.env.DB_PORT),
    DB_USERNAME: process.env.DB_USERNAME,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_DATABASE: process.env.DB_DATABASE,
}),
    migrationsRun: false,
    migrationsTableName: '_migrations',
    migrations: [path.join(__dirname,'../../database/migrations/*{.ts,.js}')],
    cli: {
        migrationsDir: 'src/database/migrations',
    },
};

export const postgresConfig = config;