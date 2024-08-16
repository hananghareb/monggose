import { Author } from "../../../Database/models/author.model.js"

export const addauthor = async(req,res)=>{
    const author = await Author.insertMany(req.body)
    res.json({message:'add successfully' , author})
}

export const getauthor = async(req,res)=>{
    const totalAuthors = await Author.countDocuments()
    const author = await Author.find().populate('books','author title -_id')
    if(!author){
        return res.json('author not found')
    }
    res.json({message:'get successfully' , author,totalAuthors})
}

export const getauthorid = async(req,res)=>{
    const{id} = req.params
    const author = await Author.findById(id).populate('books','author title -_id')
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

