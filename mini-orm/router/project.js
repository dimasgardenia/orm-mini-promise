const express = require('express')
const router = express.Router()
const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('db/database.db')
const modelProject = require('../model/project.js')

router.get('/',(req,res)=>{
  modelProject.findAll((data)=>{
    res.render('project',{data:data})
  })
})

router.post()

module.exports = router