import mongoose, { Schema, model } from "mongoose";

const authorschema = new Schema({
    name:{
        type:String,
        required:true,
    },
    bio:{
        type:String
    },
 
    birthDate:{
        type:Date
    },

    books:[
        {
            type:mongoose.Types.ObjectId,
            ref:'Book'
        }
    ]
})

 export const Author = model('Author',authorschema)
                                                        