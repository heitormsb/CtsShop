const mysql = require("mysql")

let createUsers = `CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT, 
  user_name VARCHAR(255), user_email VARCHAR(255), 
  user_password VARCHAR(255), 
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY(id))`

con.query(createUsers, (err) => {
if(err){
console.log("Error to create TABLE users: " + err)
}
})

module.exports = {
  con:con
}