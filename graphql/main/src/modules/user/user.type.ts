import { Field, Int, ObjectType } from '@nestjs/graphql';
import {Posts} from "../posts/posts.type";


@ObjectType()
export class User {
    @Field(type => Int)
    id: number;

    @Field({ nullable: true })
    name?: string;

    @Field(type => [Posts])
    posts: Posts[]
}