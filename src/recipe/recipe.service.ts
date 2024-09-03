import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { RecipeGraphQL } from './model/recipe.model';
import { RecipeInputGraphQL } from './dto/recipe.input';
import axios from 'axios';
import * as openai from 'openai';

@Injectable()
export class RecipeService {
    private readonly apiKey = process.env.OPENAI_API_KEY;
    
    constructor(private prisma: PrismaService) {}
    
    async getAllRecipes() {
        return this.prisma.recipe.findMany();
    }
    async getRecipeById(id: number) {
        return this.prisma.recipe.findUnique({
            where: { id },
        });
    }
    async createRecipe(data: RecipeInputGraphQL) {
        const { userId, ...recipeData } = data;
        return this.prisma.recipe.create({
            data: {
                ...recipeData,
                createdAt: new Date(),
                user: {
                    connect: { id: userId }
                },
                ingredients: {
                    create: data.ingredients.map(ingredient => ({
                        name: ingredient.name,
                        quantity: ingredient.quantity,
                    }))
                }
            },
        });
    }

    async generateRecipeFromIngredients(ingredients: string[]): Promise<string> {
        const prompt = `Generate a recipe using these ingredients: ${ingredients.join(', ')}.`;
        console.log("apikey", this.apiKey);

        try {
            const response = await axios.post(
                'https://api.openai.com/v1/completions',
            // const response = await openai.complete(
                {
                    model: 'gpt-3.5-turbo-instruct',
                    prompt: prompt,
                    max_tokens: 200,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${this.apiKey}`,
                    },
                }
            );

            console.log(response.data);

            return response.data.choices[0].text.trim();
        } catch (error) {
            console.log(error);
            throw new Error(`Erreur lors de la génération de la recette : ${error.message}`);
        }
    }
    
    async updateRecipe(data: RecipeInputGraphQL, id: number) {
        const { userId, ...recipeData } = data;
        return this.prisma.recipe.update({
            where: { id },
            data: {
                ...recipeData,
                updatedAt: new Date(),
                user: {
                    connect: { id: userId }
                },
                ingredients: {
                    create: data.ingredients.map(ingredient => ({
                        name: ingredient.name,
                        quantity: ingredient.quantity,
                    }))
                }
            },
        });
    }
    
    async deleteRecipe(id: number) {
        return this.prisma.recipe.delete({
            where: { id }
        })
    }
}
