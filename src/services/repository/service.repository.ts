import { SERVICE_MODEL } from "src/shared/constants/constants";
import { Injectable, Inject, NotFoundException } from "@nestjs/common";
import { Model } from "mongoose";
import { PaginationQueryDto } from "src/shared/common/dto/pagination-query";
import { Service } from "../interfaces/create-service.interface";
import { CreateServiceDto } from "../dto/create-service.dto";
import { UpdateServiceDto } from "../dto/update-service.dto";

@Injectable()
export class ServiceRepository {
    constructor(@Inject(SERVICE_MODEL) private readonly serviceModel: Model<Service>){}

   async findAll( paginationQuery: PaginationQueryDto): Promise<Service[]>{
    try {
        const { limit , offset} = paginationQuery;
        return this.serviceModel
        .find()
        .skip(offset)
        .limit(limit)
        .exec()
    } catch (error) {
        console.log(error);
        
    }    
    
    }

    async findOne ( id : string): Promise<Service>{
        try {
        const service = (await this.serviceModel.findOne({_id: id}).exec());
        return service;
        } catch (error) {
            throw new NotFoundException(error);
            
        }
        


    }

  async  create(createServiceDto : CreateServiceDto): Promise<Service>{
      try {
        const service = new this.serviceModel(createServiceDto);
        const result = service.save();
        if(!result) {throw new NotFoundException('Service was not created');}
        return result;
      } catch (error) {
          throw new NotFoundException(error);
          
      }
       
    }

   async update( id: string , updateServiceDto: UpdateServiceDto): Promise<Service>{
    try {
        const service = await this.serviceModel
        .findByIdAndUpdate({_id: id}, { $set: updateServiceDto}, {new: true})
        .exec();
        return service
    } catch (error) {
        console.log(error);
        
    }    
    
    }

    async delete( id: string): Promise<Service> {
        try {
            const service = (await this.serviceModel.findByIdAndDelete({_id: id}));
            return service;
        } catch (error) {
            console.log(error);
            
        }
       
        
    }

    //PRIVATE METHOD 

    async findServiceName(name: string): Promise<Service>{
        try {
           const service = await this.serviceModel.findOne({
               name: {
                   $regex: name,
                   $options: 'i',
                 },
           });
           return service;
    
        } catch (error) {
           throw new NotFoundException(error);
            
        }
        
    }
    
}