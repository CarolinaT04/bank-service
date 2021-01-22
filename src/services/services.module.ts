import { Module } from '@nestjs/common';
import { ServicesService } from './service/services.service';
import { ServicesController } from './controller/services.controller';
import { serviceProvider } from './provider/services.provider';
import { ServiceRepository } from './repository/service.repository';

@Module({
  controllers: [ServicesController],
  providers: [...serviceProvider, ServicesService, ServiceRepository]
}) 
export class ServicesModule {}
