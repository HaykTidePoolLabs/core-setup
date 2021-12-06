import {Args, Context, Mutation, Parent, Query, ResolveField, Resolver} from '@nestjs/graphql';
import { User } from './user.type';
import {UserService} from './user.service';
import {CreateUserInput} from './user.input';
import {Posts} from '../posts/posts.type';

@Resolver(of => User)
export class UserResolver {
    constructor(
        private userService: UserService,
    ) {
    }

    @Query(returns => User)
    async user(
        @Args('id') id: number
    ) {
        return this.userService.getUser(id);
    }

    @Query(returns => [User])
    async users() {
        return this.userService.getUsers();
    }

    @Mutation(returns => User)
    createUser(
        @Args('createUserInput') createUserInput: CreateUserInput
    ){
        return this.userService.createUser(createUserInput);
    }

    @ResolveField('posts', returns => [Posts])
    async posts(
        @Parent() user: User,
        @Context('loaders') loaders
    ) {
        const { id } = user;
        return loaders.postsLoader.load(id);
    }
}