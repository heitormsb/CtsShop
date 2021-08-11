const express = require("express")
const basicRoutes = require("./routes/basicRoutes.js")
const adminRoutes = require("./routes/adminRoutes")
const app = express()

const path = require("path") // ter pasta public
app.use(express.static(__dirname + '/public'))
app.set("view engine","pug") // passar variavel para html

const PORT = 8081

app.use('/',basicRoutes)
app.use('/admin', adminRoutes)

app.listen(PORT, () => {
  console.log("Servidor Ligado")
})