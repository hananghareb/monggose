import { query } from "express"
import { Author } from "../../../Database/models/author.model.js"

export const addauthor = async(req,res)=>{
    const author = await Author.insertMany(req.body)
    res.json({message:'add successfully' , author})
}

export const getauthor = async(req,res)=>{
    const author = await Author.find().populate('books','author title -_id')
    if(!author){
        return res.json('author not found')
    }
    res.json({message:'get successfully' , author})
}

export const getauthorid = async(req,res)=>{
    const{id} = req.params
    const author = await Author.findById(id).populate('books')
    if(!author){
        return res.json('author not found')
    }
    res.json({message:'get successfully' , author})
}

export const updateauthorid = async(req,res)=>{
    const{id} = req.params
    const author = await Author.findByIdAndUpdate(id,req.body , {new:true} ) .populate('books','author title -_id')
    if(!author){
        return res.json('author not found')
    }
    res.json({message:'update successfully' , author})
}

export const deleteauthorid = async(req,res)=>{
    const{id} = req.params
    const author = await Author.findByIdAndDelete(id,req.body , {new:true} ) .populate('books','author title -_id')
    if(!author){
        return res.json('author not found')
    }
   
    res.json({message:'delete successfully' , author})
}


// pagination

export const pagination = async(req,res)=>{
    const { page = 1 , limit=2 } = req.query
    const totalauthors = await Author.countDocuments()
    const author = await Author.find().skip((page -1) * limit).limit(((limit)))
    
    res.json({totalauthors,totalpages:Math.ceil(totalauthors / limit) ,
        currentpage:(page),author
    })
}



// search functionality

export const search =async (req,res)=>{
    const { page = 1 , limit=2 , name , bio } = req.query   
    const query = {}
    if(name){
    query.name = { $regex: name, $options:"i"} 
    }
if(bio){
    query.bio = { $regex:bio , $options:"i"}
}

const totalaauthors = await Author.countDocuments(query)
const authors = await Author.find(query).skip((page -1) * limit).limit( parseInt((limit)))

res.json({totalaauthors,totalpages:Math.ceil(totalaauthors / limit) ,
    currentpage: parseInt(page),authors
})
}

