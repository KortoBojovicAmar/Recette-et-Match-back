import { Resolver, Args, Query, Mutation, Int } from '@nestjs/graphql';
import { RecipeGraphQL } from './model/recipe.model';
import { RecipeService } from './recipe.service';
import { RecipeInputGraphQL } from './dto/recipe.input';

@Resolver()
export class RecipeResolver {
    constructor(private readonly recipeService: RecipeService) {}

@Query(() => [RecipeGraphQL])
    async getAllRecipes(): Promise<RecipeGraphQL[]> {
        const recipes = await this.recipeService.getAllRecipes();
        return recipes;
    }

    @Query(() => RecipeGraphQL)
    async getRecipeById ( @Args('id', { type: ()=> Int, nullable: false })
    id: number)
    : Promise<RecipeGraphQL> {
        const recipe = await this.recipeService.getRecipeById(id);
        return recipe;
    }
    
    @Mutation(() => RecipeGraphQL)
    async createRecipe (
        @Args('data', { type: ()=> RecipeInputGraphQL, nullable: false })
        data: RecipeInputGraphQL): Promise<RecipeGraphQL> {
            const recipe = await this.recipeService.createRecipe(data);
            return recipe;
        }

    @Mutation(() => RecipeGraphQL)
    async updateRecipe (
        @Args('data', { type: ()=> RecipeInputGraphQL, nullable: false })
        data: RecipeInputGraphQL,
        @Args('id', {type: ()=> Int})
        id: number): Promise<RecipeGraphQL> {
            const recipe = await this.recipeService.updateRecipe(data, id);
            return recipe;
        }
    
    @Mutation(() => RecipeGraphQL)
    async deleteRecipe (
        @Args('id', {type: ()=> Int})
        id: number): Promise<RecipeGraphQL> {
            const recipe = await this.recipeService.deleteRecipe(id);
            return recipe;
        }
}
