const express = require('express')
var cors = require('cors')
const mongoose = require('mongoose');
const bookRouter = require("./router/bookRouter")
const authorRouter = require("./router/authorRouter")
const app = express()
const port = 999
app.use(cors())
app.use(express.json())
app.use('/books', bookRouter)
app.use('/authors', authorRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})




main().then(response =>console.log('conected') ).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://jamsheerclt1:MljNhoq6pftYhlqj@cluster0.3eodnmv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

}