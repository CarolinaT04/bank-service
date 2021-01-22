import { Module } from '@nestjs/common';
import { AccountTypesController } from './controller/account-types.controller';
import { AccountTypesService } from './service/account-types.service';
import { AccountTypeRepository } from './repository/account-type.repository';
import { accountTypeProvider } from './provider/account-type.provider';

@Module({
  controllers: [AccountTypesController],
  providers: [...accountTypeProvider, AccountTypesService, AccountTypeRepository]
})
export class AccountTypesModule {}
