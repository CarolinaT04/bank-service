import { Document } from 'mongoose';

export interface AccountType  extends Document{
    name: string;
    createdAt: Date;
    updatedAt: Date;
    
}