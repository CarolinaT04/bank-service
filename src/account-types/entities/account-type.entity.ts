import  *  as mongoose from 'mongoose';

export const accountTypeSchema  = new mongoose.Schema(
    {

     name:{
     type: String,
     required: true,
     
    } ,

    

},
{timestamps: true});


accountTypeSchema.index({ title: 1 }, { unique: true, dropDups: true });

