import { Injectable } from '@nestjs/common';
import { CreateAccountTypeDto } from '.././dto/create-account-type.dto';
import { UpdateAccountTypeDto } from '.././dto/update-account-type.dto';

@Injectable()
export class AccountTypesService {
  create(createAccountTypeDto: CreateAccountTypeDto) {
    return 'This action adds a new accountType';
  }

  findAll() {
    return `This action returns all accountTypes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} accountType`;
  }

  update(id: number, updateAccountTypeDto: UpdateAccountTypeDto) {
    return `This action updates a #${id} accountType`;
  }

  remove(id: number) {
    return `This action removes a #${id} accountType`;
  }
}
