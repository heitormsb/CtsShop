const express = require("express")
const basicRoutes = require("./src/routes/basicRoutes.js")
const adminRoutes = require("./src/routes/adminRoutes")
const app = express()

const path = require("path") // ter pasta public
app.use(express.static(path.join(__dirname, 'public')))

const PORT = 8081

app.use('/',basicRoutes)
app.use('/admin', adminRoutes)

app.listen(PORT, () => {
  console.log("Servidor Ligado")
})