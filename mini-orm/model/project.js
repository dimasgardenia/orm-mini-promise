const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('db/database.db')

class  Project{
  static findAll(callback){
    let query = `SELECT * FROM project`
    db.all(query,(err,data)=>{
      callback(data)
    })
  }

}

module.exports = Project
