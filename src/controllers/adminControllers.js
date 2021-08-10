const path = require('path') 

const principalPage = (req,res) => {
  res.sendFile(path.join(__dirname, "../views/index.html"))
}

module.exports = {
  principalPage,
}