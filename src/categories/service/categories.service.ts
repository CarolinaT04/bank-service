import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto } from '.././dto/create-category.dto';
import { UpdateCategoryDto } from '.././dto/update-category.dto';
import { CategoryRepository } from '../repository/categories.repository';
import { Category } from '../interfaces/create-category.interface';
import { PaginationQueryDto } from 'src/shared/common/dto/pagination-query';

@Injectable()
export class CategoriesService {
  constructor( private readonly categoryRepository: CategoryRepository){}

 async  create(createCategoryDto: CreateCategoryDto): Promise <Category> {
    return await this.categoryRepository.create(createCategoryDto);
  }

  async findAll(paginationQueryDto: PaginationQueryDto): Promise<Category[]> {
    return await this.categoryRepository.findAll(paginationQueryDto);
  }

 async findOne(id: string): Promise<Category> {
  const category =  await this.categoryRepository.findOne(id);
  if(!category) throw new NotFoundException(`Category ${id} not found`);
  return category;
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto): Promise<Category> {
   //await this.findName(updateServiceDto.name);
   const category = await this.categoryRepository.update(id, updateCategoryDto);
   if(!category) throw new NotFoundException(`Category ${id} not found`);
   return category;
  }

  async delete( id: string): Promise<Category> {
    const category = await this.categoryRepository.delete(id);
    if(!category) throw new NotFoundException(`Category ${id} not found`);
    return category;
 }
 
 //Private Methods

 async findName(name: string): Promise<Category>{
    const category = this.categoryRepository.findCategoryName(name);
    if (category) throw new NotFoundException(`The category ${name} already exists`);
    return category;
 }
}
