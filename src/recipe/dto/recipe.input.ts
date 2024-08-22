import { InputType, Field, Int } from "@nestjs/graphql";
import { DietType, Recipe as RecipeDB} from "@prisma/client";

@InputType()
export class RecipeInputGraphQL {
    @Field(()=> String)
    title: string;

    @Field(()=> String)
    description: string;

    @Field(()=> String)
    ingredients: string;

    @Field(()=> String)
    instructions: string;

    @Field(()=> String)
    diet: DietType;
}