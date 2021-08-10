const adminControllers = require('../controllers/adminControllers')
const express = require('express')
const router = express.Router()


router.get('/login', adminControllers.loginPage)
router.get("/dashboard", adminControllers.dashboard)


module.exports = router