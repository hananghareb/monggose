import { Router } from "express";
import *as bookcontroller from './book.controller.js'

const bookrouter = Router()

bookrouter.post('/',bookcontroller.addbook)
bookrouter.get('/getbooks',bookcontroller.getbook)
bookrouter.patch('/:id',bookcontroller.updatebookid)
bookrouter.delete('/:id',bookcontroller.deletebookid)
bookrouter.get('/',bookcontroller.pagination)
bookrouter.get('/search',bookcontroller.search)
bookrouter.get('/:id',bookcontroller.getbookid)







export default bookrouter