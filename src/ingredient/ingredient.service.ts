import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { IngredientsGraphQL } from './model/ingredient.model';
import { IngredientsInputGraphQL } from './dto/ingredient.input';


@Injectable()
export class IngredientService {
    constructor(private prisma: PrismaService) {}

    async getAllIngredients() {
        return this.prisma.ingredients.findMany();
    }

    async getIngredientById(id: number) {
        return this.prisma.ingredients.findUnique({
            where: { id },
        });
    }

    async createIngredient(data: IngredientsInputGraphQL) {
        return this.prisma.ingredients.create({
            data: {...data, createdAt: new Date()},
        });
    }

    async updateIngredient(data: IngredientsInputGraphQL, id: number) {
        return this.prisma.ingredients.update({
            where: { id },
            data
        })
    }

    async deleteIngredient(id: number) {
        return this.prisma.ingredients.delete({
            where: { id }
        })
    }
}
