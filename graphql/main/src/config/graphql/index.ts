import createPostsLoader, { PostsModule, PostsService } from "../../modules/posts/posts.loader";

const graphQLConfig = {
    debug: false,
    playground: true,
    autoSchemaFile: 'src/schema.gql',
    installSubscriptionHandlers: true,
    sortSchema: true,
}

export default {
    useFactory: (postsService: PostsService) => ({
        ...graphQLConfig,
        context: () => {
            return ({
                loaders: {
                    postsLoader: createPostsLoader(postsService)
                }
            });
        }
    }),
    inject: [
        PostsService
    ],
    imports: [
        PostsModule
    ]
};