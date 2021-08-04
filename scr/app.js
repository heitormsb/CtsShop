const express = require("express")
const path = require("path") // ter pasta public
const bcrypt = require('bcrypt');

const Post = require("./models/db");
const { con } = require("./models/db");
const app = express()
const saltRounds = 10;

//Config
  app.use(express.json())
  app.use(express.urlencoded({extended: false})) //pegar input do html
  app.set("view engine","pug") // passar variavel para html

app.use(express.static(path.join(__dirname, "public"))) // pasta public, p/ linkar todos arquivos

//Rotas
app.get('/',(req,res) => {
  res.sendFile(__dirname + "/views/index.html")
  // res.render("index")
})

p=1

app.get('/login', (req,res) => {
  con.query("SELECT id FROM users WHERE user_name=? && user_password=?",["a",p],(err,result)=>{
    console.log(result,"asdasdsad")
  })

  res.render("login")
})

let name, email, password

app.post('/cadastro/',(req,res) => {
  name= req.body.name
  email= req.body.email
  password= req.body.password
  res.redirect("/login")
})
