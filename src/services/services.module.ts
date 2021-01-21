import { Module } from '@nestjs/common';
import { ServicesService } from './service/services.service';
import { ServicesController } from './controller/services.controller';

@Module({
  controllers: [ServicesController],
  providers: [ServicesService]
})
export class ServicesModule {}
