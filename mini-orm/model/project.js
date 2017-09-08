const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('db/database.db')

class  Project{
  static findAll(callback){
    let query = `SELECT * FROM project`
    db.all(query,(err,data)=>{
      callback(data)
    })
  }

  static postAll(data,callback){
    let query = `INSERT INTO project(nama,status)VALUES("${data.nama}","${data.status}")`
    db.run(query,()=>{
      callback()
    })
  }
  static findById(data,cb){
    let query = `SELECT * FROM project WHERE id = ${data.id}`
      db.all(query,(err,data)=>{
        cb(data)
      })
  }
  static update(data,id,cb){
    let query = `UPDATE project SET nama = "${data.nama}", status = "${data.status}" WHERE id = ${id}`
    db.run(query,()=>{
      cb()
    })
  }
  static delete(id,cb){
    let query = `DELETE FROM project WHERE id = ${id}`
    db.run(query,()=>{
      cb()
    })
  }
}

module.exports = Project
