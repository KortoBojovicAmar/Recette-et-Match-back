import { Field, ObjectType, Int, GraphQLISODateTime } from "@nestjs/graphql";
import { User as UserDB } from "@prisma/client";

@ObjectType()
export class UserGraphQL {
    // @Field(() => Int)
    // id: UserDB['id'];

    @Field(()=> String)
    name: UserDB['name'];

    @Field(()=> String, { nullable: true })
    username: UserDB['username'];

    @Field(()=> String)
    email: UserDB['email'];

    @Field(()=> String)
    password: UserDB['password'];
}