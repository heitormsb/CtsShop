const path = require('path')

const homePage = (req,res) => {
  res.sendFile(path.join(__dirname, "../views/index.html"))
}

const userLogin = (req,res) => {
  res.render("login")
}

module.exports = {
  homePage,
  userLogin,
}