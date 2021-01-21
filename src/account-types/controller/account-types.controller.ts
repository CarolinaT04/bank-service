import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AccountTypesService } from './account-types.service';
import { CreateAccountTypeDto } from './dto/create-account-type.dto';
import { UpdateAccountTypeDto } from './dto/update-account-type.dto';

@Controller()
export class AccountTypesController {
  constructor(private readonly accountTypesService: AccountTypesService) {}

  @MessagePattern('createAccountType')
  create(@Payload() createAccountTypeDto: CreateAccountTypeDto) {
    return this.accountTypesService.create(createAccountTypeDto);
  }

  @MessagePattern('findAllAccountTypes')
  findAll() {
    return this.accountTypesService.findAll();
  }

  @MessagePattern('findOneAccountType')
  findOne(@Payload() id: number) {
    return this.accountTypesService.findOne(id);
  }

  @MessagePattern('updateAccountType')
  update(@Payload() updateAccountTypeDto: UpdateAccountTypeDto) {
    return this.accountTypesService.update(updateAccountTypeDto.id, updateAccountTypeDto);
  }

  @MessagePattern('removeAccountType')
  remove(@Payload() id: number) {
    return this.accountTypesService.remove(id);
  }
}
