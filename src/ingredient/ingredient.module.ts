import { Module } from '@nestjs/common';
import { IngredientResolver } from './ingredient.resolver';
import { IngredientService } from './ingredient.service';
import { CommonModule } from '../common/common.module';

@Module({
  imports: [CommonModule],
  providers: [IngredientResolver, IngredientService]
})
export class IngredientModule {}
