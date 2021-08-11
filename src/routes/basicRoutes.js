const express = require("express")
const router = express.Router()
const basicControllers = require('../controllers/basicControllers')

//Config
  // app.use(express.json())
  // app.use(express.urlencoded({extended: false})) //pegar input do html

//Rotas

router.get('/', basicControllers.homePage)
router.get('/login', basicControllers.userLogin)

router.post('/cadastro/',(req,res) => {
  res.redirect("/login")
})

module.exports = router