import { Book } from "../../../Database/models/book.model.js"

export const addbook = async (req,res)=>{
    const {title,content,author} = req.body
    const add = await Book.insertMany(req.body)
    res.json({message:'success',add})

}

export const getbook = async (req,res)=>{
    const get = await Book.find()
    res.json({message:'success',get})

}

export const getbookid = async (req,res)=>{
    const id = req.params.id
    const getbyid = await Book.findById(id)
    if(!getbyid){
        return res.json('book not found')
    }
    res.json({message:'success',getbyid})
}

export const deletebookid = async (req,res)=>{
    const id = req.params.id
    const deletebyid = await Book.findByIdAndDelete(id)
    if(!deletebyid){
        return res.json('book not found')
    }
    res.json({message:'success deleted'})
}

export const updatebookid = async (req,res)=>{
    const id = req.params.id
    const updatebyid = await Book.findByIdAndUpdate(id,req.body,{new:true})
    if(!updatebyid){
        return res.json('book not found')
    }
    res.json({message:'success updated',updatebyid})
}
