import { ACCOUNT_TYPE_MODEL, DATABASE_CONNECTION } from "src/shared/constants/constants";
import { connection, Connection } from "mongoose";
import { accountTypeSchema } from "../entities/account-type.entity";


export const accountTypeProvider = [
    {
        provide: ACCOUNT_TYPE_MODEL,
        useFactory: ( connection: Connection)=> connection.model('AccountType', accountTypeSchema),
        inject: [DATABASE_CONNECTION],
    }
];