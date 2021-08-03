const mysql = require("mysql")

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "rootpass",
  database: "userCadastro"
})


con.connect((err)=>{
  if(!err){
    console.log('database connected..')
  }
  else{
    console.log('db not connected \n Error : '+ err);
  } 
});


module.exports = {
  con: con
}



// const Sequelize = require("sequelize")

// const sequelize = new Sequelize("userCadastro","root","rootpass",{
//   host: "localhost",
//   dialect: "mysql"
// })

// sequelize.authenticate().then(function(){
//   console.log("Banco de dados conectado")
// }).catch(function(erro){
//   console.log("Falha em conectar ao Banco de Dados: "+erro)
// })

// module.exports = {
//   Sequelize: Sequelize,
//   sequelize: sequelize
// }
