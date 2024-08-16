import express from 'express'
import { dbconnection } from './Database/connection.js'
import bookrouter from './src/modules/book/book.routes.js'
import authorrouter from './src/modules/author/author.routes.js'
const app = express()
const port = 3000
app.use(express.json())
app.use('/book',bookrouter)
app.use('/author',authorrouter)

dbconnection()



app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))