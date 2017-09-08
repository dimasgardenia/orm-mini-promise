const express = require('express')
const app = express()
const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('db/database.db')
const bodyParser = require('body-parser')

app.set('view engine','ejs')
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

const project = require('./router/project')

app.use('/list',project)

app.listen(3000,()=>{
  console.log('i am on port 3000');
})
