import { InputType, Field, Int } from "@nestjs/graphql";
import { Ingredients as IngredientsDB, Recipe as RecipeDB } from "@prisma/client";
import { RecipeGraphQL } from "src/recipe/model/recipe.model";

@InputType()
export class IngredientsInputGraphQL {

    @Field(()=> String)
    name: IngredientsDB['name'];

    @Field(()=> String)
    quantity: IngredientsDB['quantity'];

    // @Field(()=> [RecipeGraphQL],{nullable : true})
    // recipes?: RecipeDB[];
    
    
}