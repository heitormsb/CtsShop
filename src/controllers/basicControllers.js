const path = require('path')

const homePage = (req,res) => {
  res.sendFile(path.join(__dirname, "../views/index.html"))
}

const userLogin = (req,res) => {
  res.sendFile(path.join(__dirname, "../views/login.html"))
}

module.exports = {
  homePage,
  userLogin,
}