import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { RecipeGraphQL } from './model/recipe.model';
import { RecipeInputGraphQL } from './dto/recipe.input';


@Injectable()
export class RecipeService {
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
        return this.prisma.recipe.create({
            data: {
                ...data, 
                createdAt: new Date(),
                user: {
                    connect: { id: data.userid }
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


    
    async updateRecipe(data: RecipeInputGraphQL, id: number) {
        return this.prisma.recipe.update({
            where: { id },
            data: {
                ...data,
                updatedAt: new Date(),
                user: {
                    connect: { id: data.userid }
                },
                ingredients: {
                    create: data.ingredients.map(ingredient => ({
                        name: ingredient.name,
                        quantity: ingredient.quantity,
                    }))
                }
            }
        })
    }
    
    async deleteRecipe(id: number) {
        return this.prisma.recipe.delete({
            where: { id }
        })
    }
}
