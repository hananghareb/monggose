import mongoose from "mongoose";

export const dbconnection = (()=>{
    mongoose.connect('mongodb://127.0.0.1:27017/mongoose').then(()=>{
        console.log('connected database successfully');
        
    }).catch(()=>{
        console.log('unconnected database');
        
    })

}) 