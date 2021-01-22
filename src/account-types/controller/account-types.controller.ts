import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AccountTypesService } from '../service/account-types.service';
import { CreateAccountTypeDto } from '../dto/create-account-type.dto';
import { UpdateAccountTypeDto } from '../dto/update-account-type.dto';
import { PaginationQueryDto } from 'src/shared/common/dto/pagination-query';

@Controller()
export class AccountTypesController {
  constructor(private readonly accountTypesService: AccountTypesService) {}

  @MessagePattern('createAccountType')
  create(@Payload() createAccountTypeDto: CreateAccountTypeDto) {
    return this.accountTypesService.create(createAccountTypeDto);
  }

  @MessagePattern('findAllAccountTypes')
  findAll(paginationQueryDto: PaginationQueryDto) {
    return this.accountTypesService.findAll(paginationQueryDto);
  }

  @MessagePattern('findOneAccountType')
  findOne(@Payload() id: string) {
    return this.accountTypesService.findOne(id);
  }

  @MessagePattern('updateAccountType')
  update(@Payload() updateAccountTypeDto: UpdateAccountTypeDto) {
    return this.accountTypesService.update(updateAccountTypeDto.id, updateAccountTypeDto);
  }

  @MessagePattern('removeAccountType')
  remove(@Payload() id: string) {
    return this.accountTypesService.delete(id);
  }
}
