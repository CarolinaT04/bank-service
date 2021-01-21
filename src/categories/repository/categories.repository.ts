import { CATEGORY_MODEL } from "src/shared/constants/constants";
import { Injectable, Inject, NotFoundException } from "@nestjs/common";
import { Model } from "mongoose";
import { Category } from "../interfaces/create-category.interface";
import { PaginationQueryDto } from "src/shared/common/dto/pagination-query";
import { CreateCategoryDto } from "../dto/create-category.dto";
import { UpdateCategoryDto } from "../dto/update-category.dto";

@Injectable()
export class CategoryRepository {
    constructor(@Inject(CATEGORY_MODEL) private readonly categoryModel: Model<Category>){}

   async findAll( paginationQuery: PaginationQueryDto): Promise<Category[]>{
    try {
        const { limit , offset} = paginationQuery;
        return this.categoryModel
        .find()
        .skip(offset)
        .limit(limit)
        .exec()
    } catch (error) {
        console.log(error);
        
    }    
    
    }

    async findOne ( id : string): Promise<Category>{
        try {
        const category = (await this.categoryModel.findOne({_id: id}).exec());
        return category;
        } catch (error) {
            throw new NotFoundException(error);
            
        }
        


    }

  async  create(createCategoryDto : CreateCategoryDto): Promise<Category>{
      try {
        const category = new this.categoryModel(createCategoryDto);
        const result = category.save();
        if(!result) {throw new NotFoundException('Category was not created');}
        return result;
      } catch (error) {
          throw new NotFoundException(error);
          
      }
       
    }

   async update( id: string , updateCategoryDto: UpdateCategoryDto): Promise<Category>{
    try {
        const category = await this.categoryModel
        .findByIdAndUpdate({_id: id}, { $set: updateCategoryDto}, {new: true})
        .exec();
        return category
    } catch (error) {
        console.log(error);
        
    }    
    
    }

    async delete( id: string): Promise<Category> {
        try {
            const category = (await this.categoryModel.findByIdAndDelete({_id: id}));
            return category;
        } catch (error) {
            console.log(error);
            
        }
       
        
    }

    //PRIVATE METHOD 

    async findCategoryName(name: string): Promise<Category>{
        try {
           const category = await this.categoryModel.findOne({
               name: {
                   $regex: name,
                   $options: 'i',
                 },
           });
           return category;
    
        } catch (error) {
           throw new NotFoundException(error);
            
        }
        
    }
    
}