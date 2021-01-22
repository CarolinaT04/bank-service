import { SERVICE_MODEL, DATABASE_CONNECTION } from "src/shared/constants/constants";
import { connection, Connection } from "mongoose";
import { serviceSchema } from "../entities/service.entity";





export const serviceProvider = [
    {
        provide: SERVICE_MODEL,
        useFactory: ( connection: Connection)=> connection.model('Service', serviceSchema),
        inject: [DATABASE_CONNECTION],
    }
];