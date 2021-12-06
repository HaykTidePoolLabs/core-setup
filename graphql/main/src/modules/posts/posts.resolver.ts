import {Args, Mutation, Query, Resolver} from '@nestjs/graphql';
import {Posts} from "./posts.type";
import {PostsService} from "./posts.service";
import { CreatePostInput } from './posts.input';

@Resolver(of => Posts)
export class PostsResolver {
    constructor(
        private postService: PostsService
    ) {
    }

    @Query(returns => Posts)
    async post(
        @Args('id') id: number
    ) {
        return this.postService.getPost(id);
    }

    @Query(returns => [Posts])
    async posts() {
        return this.postService.getPosts({})
    }

    @Mutation(returns => Posts)
    async createPost(
        @Args('createPostInput') createPostInput: CreatePostInput
    ) {
        return this.postService.createPost(createPostInput);
    }
}
