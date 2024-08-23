import { InputType, Field, Int } from "@nestjs/graphql";
import { DietType, Recipe as RecipeDB, Ingredients as IngredientsDB, RecipeType} from "@prisma/client";
import { IngredientsGraphQL } from "src/ingredient/model/ingredient.model";

@InputType()
export class RecipeInputGraphQL {
    
    @Field(() => String)
    type : RecipeType;
    
    @Field(()=> String)
    title: RecipeDB['title'];

    @Field(()=> String)
    description: RecipeDB['description'];

    @Field(()=> [IngredientsGraphQL])
    ingredients: IngredientsDB[];

    @Field(()=> String)
    steps: RecipeDB['steps'];

    @Field(()=> [String])
    diet: DietType[];

    @Field(()=> Int)
    userid: number;
}