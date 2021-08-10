const express = require("express")
const router = express.Router()
const path = require("path") 
// const app = express()

//Config
  // app.use(express.json())
  // app.use(express.urlencoded({extended: false})) //pegar input do html

//Rotas
router.get('/',(req,res) => {
  res.sendFile(path.join(__dirname, "../views/index.html"))
})

router.get('/login', (req,res) => {
  res.render("login")
})

let name, email, password

router.post('/cadastro/',(req,res) => {
  name= req.body.name
  email= req.body.email
  password= req.body.password
  res.redirect("/login")
})

module.exports = router