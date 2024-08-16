import { Schema, model } from "mongoose";

const bookschema = new Schema({
    title:{
        type:String,
        required:true,
    },
    content:{
        type:String,
        required:true,
    },
    author:{
        type:String,
        required:true,
    },
    publishedDate:{
        type:Date,
        default:new Date()
    }
})

 export const Book = model('Book',bookschema)
