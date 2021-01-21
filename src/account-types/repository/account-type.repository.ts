import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { CreateAccountTypeDto } from '.././dto/create-account-type.dto';
import { UpdateAccountTypeDto } from '.././dto/update-account-type.dto';
import { ACCOUNT_TYPE_MODEL } from 'src/shared/constants/constants';
import { Model } from 'mongoose';
import { AccountType } from '../interfaces/create-account-type.interface';
import { PaginationQueryDto } from 'src/shared/common/dto/pagination-query';


@Injectable()
export class AccountTypeRepository {
    constructor(@Inject(ACCOUNT_TYPE_MODEL) private readonly accountTypeModel: Model<AccountType>){}

   async findAll( paginationQuery: PaginationQueryDto): Promise<AccountType[]>{
    try {
        const { limit , offset} = paginationQuery;
        return this.accountTypeModel
        .find()
        .skip(offset)
        .limit(limit)
        .exec()
    } catch (error) {
        console.log(error);
        
    }    
    
    }

    async findOne ( id : string): Promise<AccountType>{
        try {
        const account = (await this.accountTypeModel.findOne({_id: id}).exec());
        return account;
        } catch (error) {
            throw new NotFoundException(error);
            
        }
        


    }

  async  create(createAccountTypeDto : CreateAccountTypeDto): Promise<AccountType>{
      try {
        const account = new this.accountTypeModel(createAccountTypeDto);
        const result = account.save();
        if(!result) {throw new NotFoundException('Account Type was not created');}
        return result;
      } catch (error) {
          throw new NotFoundException(error);
          
      }
       
    }

   async update( id: string , updateAccountTypeDto: UpdateAccountTypeDto): Promise<AccountType>{
    try {
        const account= await this.accountTypeModel
        .findByIdAndUpdate({_id: id}, { $set: updateAccountTypeDto}, {new: true})
        .exec();
        return account
    } catch (error) {
        console.log(error);
        
    }    
    
    }

    async delete( id: string): Promise<AccountType> {
        try {
            const account = (await this.accountTypeModel.findByIdAndDelete({_id: id}));
            return account;
        } catch (error) {
            console.log(error);
            
        }
       
        
    }

    //PRIVATE METHOD 

    async findAccountTypeName(name: string): Promise<AccountType>{
        try {
           const account = await this.accountTypeModel.findOne({
               name: {
                   $regex: name,
                   $options: 'i',
                 },
           });
           return account;
    
        } catch (error) {
           throw new NotFoundException(error);
            
        }
        
    }
    
}
