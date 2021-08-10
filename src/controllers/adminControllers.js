const path = require('path') 

const loginPage = (req,res) => {
  res.render("login")
}

const dashboard = (req,res) => {
  res.sendFile(path.join(__dirname, "../views/index.html"))
}

module.exports = {
  loginPage,
  dashboard,
}