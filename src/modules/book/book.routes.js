import { Router } from "express";
import *as bookcontroller from './book.controller.js'

const bookrouter = Router()

bookrouter.post('/',bookcontroller.addbook)
bookrouter.get('/getbooks',bookcontroller.getbook)
bookrouter.get('/:id',bookcontroller.getbookid)
bookrouter.patch('/:id',bookcontroller.updatebookid)
bookrouter.delete('/:id',bookcontroller.deletebookid)
bookrouter.get('/',bookcontroller.getbook11)
bookrouter.get('/search',bookcontroller.search)






export default bookrouter