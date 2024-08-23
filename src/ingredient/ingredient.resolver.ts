import { Resolver, Args, Query, Mutation, Int } from '@nestjs/graphql';
import { IngredientsGraphQL } from './model/ingredient.model';
import { IngredientService } from './ingredient.service';
import { IngredientsInputGraphQL } from './dto/ingredient.input';

@Resolver()
export class IngredientResolver {
    constructor(private readonly ingredientService: IngredientService) {}
    
    @Query(() => [IngredientsGraphQL])
    async getAllIngredients(): Promise<IngredientsGraphQL[]> {
        const ingredients = await this.ingredientService.getAllIngredients();
        return ingredients;
    }

    @Query(() => IngredientsGraphQL)
    async getIngredientById ( @Args('id', { type: ()=> Int, nullable: false })
    id: number)
    : Promise<IngredientsGraphQL> {
        const ingredient = await this.ingredientService.getIngredientById(id);
        return ingredient;
    }
    
    @Mutation(() => IngredientsGraphQL)
    async createIngredient (
        @Args('data', { type: ()=> IngredientsInputGraphQL, nullable: false })
        data: IngredientsInputGraphQL): Promise<IngredientsGraphQL> {
            const ingredient = await this.ingredientService.createIngredient(data);
            return ingredient;
        }

    // @Mutation(() => IngredientsGraphQL)
    // async updateIngredient (
    //     @Args('data', { type: ()=> IngredientsInputGraphQL, nullable: false })
    //     data: IngredientsInputGraphQL,
    //     @Args('id', {type: ()=> Int})
    //     id: number): Promise<IngredientsGraphQL> {
    //         const ingredient = await this.ingredientService.updateIngredient(data, id);
    //         return ingredient;
    //     }
    
    @Mutation(() => IngredientsGraphQL)
    async deleteIngredient (
        @Args('id', {type: ()=> Int})
        id: number): Promise<IngredientsGraphQL> {
            const ingredient = await this.ingredientService.deleteIngredient(id);
            return ingredient;
        }
}
