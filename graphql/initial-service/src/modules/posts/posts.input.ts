import {Field, InputType} from "@nestjs/graphql";
import { MinLength } from 'class-validator';

@InputType()
class CreateUserRelationInput {
    @Field({ nullable: true })
    id: number
}

@InputType()
export class CreatePostInput {
    @MinLength(1)
    @Field()
    name: string

    @Field(type => CreateUserRelationInput)
    user: CreateUserRelationInput
}