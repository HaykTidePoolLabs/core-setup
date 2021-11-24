import {Args, Mutation, Query, Resolver} from '@nestjs/graphql';
import { User } from './user.type';
import {UserService} from './user.service';
import {CreateUserInput} from "./user.input";

@Resolver(of => User)
export class UserResolver {
    constructor(
        private userService: UserService
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
}