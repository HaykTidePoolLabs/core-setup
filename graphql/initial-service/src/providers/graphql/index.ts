import {Module} from "@nestjs/common";
import {GraphQLModule} from "@nestjs/graphql";
import graphQLConfig from "../../config/graphql";


@Module({
    imports: [
        GraphQLModule.forRoot(graphQLConfig)
    ]
})
export class GraphGLProviderModule {}
