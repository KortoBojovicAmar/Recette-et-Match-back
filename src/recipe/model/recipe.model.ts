import { Field, ObjectType, Int, GraphQLISODateTime } from "@nestjs/graphql";
import { DietType, Recipe as RecipeDB, Ingredients as IngredientsDB, RecipeType } from "@prisma/client";
import { IngredientsGraphQL } from "src/ingredient/model/ingredient.model";

@ObjectType()
export class RecipeGraphQL {

    @Field(()=> Int)
    id: RecipeDB['id'];

    @Field(() => String)
    type : RecipeType;

    @Field(()=> String)
    title: RecipeDB['title'];

    @Field(()=> String)
    description: RecipeDB['description'];

    @Field(()=> [IngredientsGraphQL])
    ingredients: IngredientsDB[];


    @Field(()=> [DietType])
    diet: RecipeDB['diet'];

}