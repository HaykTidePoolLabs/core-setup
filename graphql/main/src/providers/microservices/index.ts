import {Global, Module} from '@nestjs/common';
import {ClientsModule, Transport} from '@nestjs/microservices';
import { microservicesList } from '../../config/rabitmq'

const Microservices = ClientsModule.register(
    microservicesList.map(i => ({
        transport: Transport.RMQ,
        ...i,
    })));

@Global()
@Module({
    imports: [
        Microservices
    ],
    exports: [
        Microservices
    ]
})
export class MicroservicesProviderModule {}