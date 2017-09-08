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

router.post('/',(req,res)=>{
  modelProject.postAll(req.body,()=>{
    res.redirect('/list')
    ///res.send(data)
  })
})

router.get('/edit/:id', (req,res)=>{
  modelProject.findById(req.params.id,(data)=>{
    //console.log(data);
    res.render('updateproject',{data:data})
    //res.send(data)
  })
})

router.post('/edit/:id',(req,res)=>{
  modelProject.update(req.body.id,req.params.id,()=>{
    res.redirect('/list')
  })
})

router.get('/delete/:id',(req,res)=>{
  modelProject.delete(req.params.id,()=>{
    res.redirect('/list')
  })
})
module.exports = router
