import { CATEGORY_MODEL, DATABASE_CONNECTION } from "src/shared/constants/constants";
import { connection, Connection } from "mongoose";
import { categorySchema } from "../entities/category.entity";

export const categoryProvider = [
    {
        provide: CATEGORY_MODEL,
        useFactory: ( connection: Connection)=> connection.model('Category', categorySchema),
        inject: [DATABASE_CONNECTION],
    }
];