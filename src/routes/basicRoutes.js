const express = require("express")
const router = express.Router()
const basicControllers = require('../controllers/basicControllers')

//Rotas

router.get('/', basicControllers.homePage)
router.get('/login', basicControllers.userLogin)

router.post('/cadastro/',(req,res) => {
  res.redirect("/login")
})

module.exports = router