const path = require('path') 


const adminLogin = (req,res) => {
  res.sendFile(path.join(__dirname, "../views/login.html"))
}
const dashboard = (req,res) => {
  res.sendFile(path.join(__dirname, "../views/index.html"))
}
 
 
module.exports = {
  adminLogin,
  dashboard,
}