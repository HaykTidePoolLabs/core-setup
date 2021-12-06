import * as dotenv from 'dotenv';
import * as path from 'path';
import { TEST_REST_SERVICE } from '../../common/constants/microservices'
if (!(process.env.NODE_ENV === 'production')) {
    dotenv.config({ path: path.join(__dirname, '../../../', '.env.development') });
}

const RABBIT_MQ_URL = process.env.RABBIT_MQ_URL;

export const options = {
    urls: [RABBIT_MQ_URL],
    queue: 'test_graphql_queue',
    queueOptions: {
        durable: false
    },
}

export const microservicesList = [
    {
        name: TEST_REST_SERVICE,
        options: {
            urls: [RABBIT_MQ_URL],
            queue: 'test_rest_queue',
            queueOptions: {
                durable: false
            },
        },
    },
];
