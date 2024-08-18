import { InputType, Field, Int } from "@nestjs/graphql";
import { User as UserDB } from "@prisma/client";

@InputType()
export class UserInputGraphQL {
    // @Field(() => Int)
    // id: number;

    @Field(()=> String)
    name: string;

    @Field(()=> String)
    username: string;

    @Field(()=> String)
    email: string;

    @Field(()=> String)
    password: string;
}