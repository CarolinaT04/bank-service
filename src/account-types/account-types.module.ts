import { Module } from '@nestjs/common';
import { AccountTypesController } from './controller/account-types.controller';
import { AccountTypesService } from './service/account-types.service';

@Module({
  controllers: [AccountTypesController],
  providers: [AccountTypesService]
})
export class AccountTypesModule {}
