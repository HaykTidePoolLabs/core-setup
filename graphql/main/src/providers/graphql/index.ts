import {Module} from '@nestjs/common';
import {GraphQLModule} from '@nestjs/graphql';
import graphQLConfig from '../../config/graphql';

@Module({
    imports: [
        GraphQLModule.forRootAsync(graphQLConfig)
    ]
})
export class GraphGLProviderModule {}
