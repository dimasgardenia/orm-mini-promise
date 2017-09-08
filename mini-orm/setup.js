const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('db/database.db')

db.serialize(()=>{
  // let query = `CREATE TABLE IF NOT EXISTS project(id INTEGER PRIMARY KEY AUTOINCREMENT, nama VARCHAR (255),status VARCHAR (255))`
  // db.run(query,()=>{
  //   console.log('berhasil create project')
  // })
  let query = `CREATE TABLE IF NOT EXISTS supervisior(id INTEGER PRIMARY KEY AUTOINCREMENT, nama VARCHAR (255), email VARCHAR(255),project_id INTEGER, FOREIGN KEY (project_id) REFERENCES project(id))`
  db.run(query,()=>{
    console.log('berhasil create supervisior')
  })
})
//let query = `CREATE TABLE IF NOT EXISTS project(id INTEGER PRIMARY KEY AUTOINCREMENT, nama VARCHAR (255),status VARCHAR (255), project_id INTEGER, FOREIGN KEY (project_id) REFERENCES supervisior(id))`
