import { Book } from "../../../Database/models/book.model.js"

export const addbook = async (req,res)=>{
    const books  = await Book.insertMany(req.body)
    res.json({message:'success',books})

}

export const getbook = async (req,res)=>{
    const books = await Book.find()
    res.json({message:'success',books})

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



// pagination

export const getbook11 = async(req,res)=>{
    const { page , limit } = req.query
    const totalbooks = await Book.countDocuments()
    const book = await Book.find().skip((page -1) * limit).limit((parseInt(limit)))
    
    res.json({totalbooks,totalpages:Math.ceil(totalbooks / limit) ,
        currentpage:parseInt(page),book
    })
}




// search functionality

export const search =async (req,res)=>{

    const { page = 1 , limit=2 , title , author } = req.query
    
    const query = {}
    if(title){

    query.title = { $regex: title, $options:"i"} 
    }
if(author){
    query.author = { $regex:author , $options:"i"}
}

const totalabooks = await Book.countDocuments(query)
const books = await Book.find(query).skip((page -1) * limit).limit( parseInt((limit)))

res.json({totalabooks,totalpages:Math.ceil(totalabooks / limit) ,
    currentpage: parseInt(page),books
})
}