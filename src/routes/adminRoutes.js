const express = require('express')
const router = express.Router()
const adminControllers = require('../controllers/adminControllers')


router.get('/login', adminControllers.adminLogin)
router.get("/dashboard", adminControllers.dashboard)


module.exports = router