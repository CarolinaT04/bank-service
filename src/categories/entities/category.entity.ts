import  *  as mongoose from 'mongoose';

export const categorySchema  = new mongoose.Schema(
    {

     name:{
     type: String,
     required: true,
     
    } ,

    

},
{timestamps: true});


categorySchema.index({ title: 1 }, { unique: true, dropDups: true });



