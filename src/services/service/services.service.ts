import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateServiceDto } from '../dto/create-service.dto';
import { UpdateServiceDto } from '../dto/update-service.dto';
import { ServiceRepository } from '../repository/service.repository';
import { Service } from '../interfaces/create-service.interface';
import { PaginationQueryDto } from 'src/shared/common/dto/pagination-query';

@Injectable()
export class ServicesService {
  constructor( private readonly serviceRepository: ServiceRepository){}

 async  create(createServiceDto: CreateServiceDto): Promise <Service> {
    return await this.serviceRepository.create(createServiceDto);
  }

 async  findAll(paginationQueryDto: PaginationQueryDto): Promise <Service[]> {
    return await this.serviceRepository.findAll(paginationQueryDto);
  }

 async findOne(id: string): Promise<Service> {
  const service =  await this.serviceRepository.findOne(id);
  if(!service) throw new NotFoundException(`Service ${id} not found`);
  return service;
  }

  async update(id: string, updateServiceDto: UpdateServiceDto) {
    //await this.findName(updateServiceDto.name);
   const service= await this.serviceRepository.update(id, updateServiceDto);
   if(!service) throw new NotFoundException(`Service ${id} not found`);
   return service;
  }

  async delete( id: string): Promise<Service> {
    const service = await this.serviceRepository.delete(id);
    if(!service) throw new NotFoundException(`Service ${id} not found`);
    return service;
 }
 
 //Private Methods

 async findName(name: string): Promise<Service>{
    const account = this.serviceRepository.findServiceName(name);
    if (account) throw new NotFoundException(`The editorial ${name} already exists`);
    return account;
 }
}
