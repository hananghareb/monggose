import { Router } from "express";
import * as authorcontroller from './author.controller.js'
 const authorrouter = Router()

authorrouter.post('/',authorcontroller.addauthor)
authorrouter.get('/getauthors',authorcontroller.getauthor)
authorrouter.get('/:id',authorcontroller.getauthorid)
authorrouter.patch('/:id',authorcontroller.updateauthorid)
authorrouter.delete('/:id',authorcontroller.deleteauthorid)



 export default authorrouter