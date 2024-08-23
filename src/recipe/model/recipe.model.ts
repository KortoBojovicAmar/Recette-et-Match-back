import { Field, ObjectType, Int, GraphQLISODateTime } from "@nestjs/graphql";
import { DietType, Recipe as RecipeDB, Ingredients as IngredientsDB, RecipeType } from "@prisma/client";
import { IngredientsGraphQL } from "src/ingredient/model/ingredient.model";
import { UserGraphQL } from "src/user/model/user.model";

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

    // @Field(()=> [IngredientsGraphQL])
    // ingredients: IngredientsDB[];

    @Field(()=> String)
    steps: RecipeDB['steps'];

    @Field(()=> [String])
    diet: DietType[];

    @Field(()=> UserGraphQL, { nullable: true })
    user: UserGraphQL;

    @Field(()=> Int)
    userid: number;


}