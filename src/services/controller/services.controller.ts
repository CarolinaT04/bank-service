import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ServicesService } from '../service/services.service';
import { CreateServiceDto } from '../dto/create-service.dto';
import { UpdateServiceDto } from '../dto/update-service.dto';
import { PaginationQueryDto } from 'src/shared/common/dto/pagination-query';

@Controller()
export class ServicesController {
  constructor(private readonly servicesService: ServicesService) {}

  @MessagePattern('createService')
  create(@Payload() createServiceDto: CreateServiceDto) {
    return this.servicesService.create(createServiceDto);
  }

  @MessagePattern('findAllServices')
  findAll(paginationQueryDto:PaginationQueryDto) {
    return this.servicesService.findAll(paginationQueryDto);
  }

  @MessagePattern('findOneService')
  findOne(@Payload() id: string) {
    return this.servicesService.findOne(id);
  }

  @MessagePattern('updateService')
  update(@Payload() updateServiceDto: UpdateServiceDto) {
    return this.servicesService.update(updateServiceDto.id, updateServiceDto);
  }

  @MessagePattern('removeService')
  remove(@Payload() id: string) {
    return this.servicesService.delete(id);
  }
}
