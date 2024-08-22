import { Field, ObjectType, Int, GraphQLISODateTime } from "@nestjs/graphql";
import { Ingredients as IngredientsDB, Recipe as RecipeDB } from "@prisma/client";
import { RecipeGraphQL } from "src/recipe/model/recipe.model";

@ObjectType()
export class IngredientsGraphQL {
    @Field(()=> Int)
    id: IngredientsDB['id'];

    @Field(()=> String)
    name: IngredientsDB['name'];

    @Field(()=> String)
    quantity: IngredientsDB['quantity'];

    @Field(()=> [RecipeGraphQL], {nullable: true})
    recipes?: RecipeDB[];

}