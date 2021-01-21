import  *  as mongoose from 'mongoose';

export const serviceSchema  = new mongoose.Schema(
    {

     name:{
     type: String,
     required: true,
     
    } ,

    

},
{timestamps: true});


serviceSchema.index({ title: 1 }, { unique: true, dropDups: true });

