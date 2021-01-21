import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAccountTypeDto } from '.././dto/create-account-type.dto';
import { UpdateAccountTypeDto } from '.././dto/update-account-type.dto';
import { AccountTypeRepository } from '../repository/account-type.repository';
import { AccountType } from '../interfaces/create-account-type.interface';
import { PaginationQueryDto } from 'src/shared/common/dto/pagination-query';

@Injectable()
export class AccountTypesService {
  constructor( private readonly accountTypeRepository: AccountTypeRepository){}

  async create(createAccountTypeDto: CreateAccountTypeDto): Promise<AccountType> {
  return await this.accountTypeRepository.create(createAccountTypeDto);
    
  }

  async findAll(paginationQueryDto: PaginationQueryDto): Promise<AccountType[]> {
    return await this.accountTypeRepository.findAll(paginationQueryDto);
 
  }

  async findOne(id: string):Promise<AccountType> {
    const account =  await this.accountTypeRepository.findOne(id);
        if(!account) throw new NotFoundException(`Account Type ${id} not found`);
        return account;
  }

 async update(id: string, updateAccountTypeDto: UpdateAccountTypeDto): Promise<AccountType> {
        //await this.findName(updateAccountTypeDto.name);
        const account = await this.accountTypeRepository.update(id, updateAccountTypeDto);
        if(!account) throw new NotFoundException(`Account Type ${id} not found`);
        return account;
  }

  async delete( id: string): Promise<AccountType> {
    const account = await this.accountTypeRepository.delete(id);
    if(!account) throw new NotFoundException(`Account Type ${id} not found`);
    return account;
 }
 
 //Private Methods

 async findName(name: string): Promise<AccountType>{
    const account = this.accountTypeRepository.findAccountTypeName(name);
    if (account) throw new NotFoundException(`The account type ${name} already exists`);
    return account;
 }
}
