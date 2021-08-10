const express = require('express')
const router = express.Router()
const adminControllers = require('../controllers/adminControllers')

router.get('/',(req,res) => {
  res.send("admin router")
})

router.get('/1', adminControllers.principalPage)

module.exports = router