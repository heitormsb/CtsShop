const path = require('path') 


const dashboard = (req,res) => {
  res.sendFile(path.join(__dirname, "../views/index.html"))
}

const adminLogin = (req,res) => {
  res.sendFile(path.join(__dirname, "../views/login.html"))
}
 
module.exports = {
  dashboard,
  adminLogin,
}