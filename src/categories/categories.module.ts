import { Module } from '@nestjs/common';
import { CategoriesService } from './service/categories.service';
import { CategoriesController } from './controller/categories.controller';
import { categoryProvider } from './provider/category.provider';
import { CategoryRepository } from './repository/categories.repository';


@Module({
  controllers: [CategoriesController],
  providers: [...categoryProvider, CategoriesService, CategoryRepository]
})
export class CategoriesModule {}
