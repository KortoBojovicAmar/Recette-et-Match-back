import { InputType, Field, Int } from "@nestjs/graphql";
import { Ingredients as IngredientsDB, Recipe as RecipeDB } from "@prisma/client";
import { RecipeInputGraphQL } from "src/recipe/dto/recipe.input";
import { RecipeGraphQL } from "src/recipe/model/recipe.model";

@InputType()
export class IngredientsInputGraphQL {

    @Field(()=> String)
    name: IngredientsDB['name'];

    @Field(()=> String)
    quantity: IngredientsDB['quantity'];

    @Field(()=> [RecipeInputGraphQL],{nullable : true})
    recipes?: RecipeDB[];
    
    
}