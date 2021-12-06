import { Field, Int, ObjectType } from '@nestjs/graphql';
import {User} from "../user/user.type";


@ObjectType()
export class Posts {
    @Field(type => Int)
    id: number;

    @Field({ nullable: true })
    name?: string;

    // @Field(type => User)
    // user: User
}