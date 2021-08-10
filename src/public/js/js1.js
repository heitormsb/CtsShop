var sb1 = document.getElementsByClassName("searchCointainer")[0]
var sb = document.getElementsByClassName("sanduicheBar")[0]
var downButton = document.getElementsByClassName("downButton")[0]
var acordionContent = document.getElementsByClassName("acordionContent")[0]
var categoria = document.getElementsByClassName("categoria")[0]
var tamanho = document.getElementsByClassName("tamanho")[0]
var ordenar = document.getElementsByClassName("ordenar")[0]

document.getElementsByClassName("searchHeader")[0].onclick = function() {  
    openBar()
}
  function openBar(){
      sb.classList.remove("active")
      sb1.classList.toggle("active")
  }

document.getElementsByClassName("hamburgerHeader")[0].onclick = function() {  
  openBar1()
}
function openBar1(){
  sb1.classList.remove("active")
  sb.classList.toggle("active")
}

document.getElementsByClassName("middleHeader")[0].onclick = function() {  
  unClick1()
}
function unClick1(){
  sb1.classList.remove("active")
  sb.classList.remove("active")
}

downButton.onclick = function() {  
  downButton.classList.toggle("active")
  acordionContent.classList.toggle("active")
}

categoria.onclick = function(){
  categoria.classList.toggle("active")
}

tamanho.onclick = function(){
  tamanho.classList.toggle("active")
}

ordenar.onclick = function(){
  ordenar.classList.toggle("active")
}

window.onscroll = function(){
  sb1.classList.remove("active")
  sb.classList.remove("active")
  categoria.classList.remove("active")
  tamanho.classList.remove("active")
  console.log("A")
}



// function endereco(rua) {
//   this.rua = rua
// }

// endereco1 = new endereco('lagoo norte')

// console.log(endereco1.rua)



// function endereco (rua,cidade,a) {
//   this.rua = rua
//   this.cidade = cidade
//   this.a = a
//   }

//  var endereco1 = new endereco("lg", "BH", "55")
//  var endereco2 = new endereco("lg", "BH", "55")

//  console.log(comparaObj(endereco1,endereco2))
//  console.log(comparaObjEnderoco(endereco1,endereco2))

// function comparaObj(endereco1,endereco2){
//   for(i in endereco1 , endereco2){
//     if(endereco1[i] !== endereco2[i])
//       return false
//   }
//   return true
// }

// function comparaObjEnderoco(endereco1,endereco2){
//   return endereco1===endereco2
// }

//  console.log(endereco1,endereco2)

// let postagem = {
//   titulo : "A casa",
//   mensagem : "morreu",
//   autor : "Castro Lira",
//   visualizacoes : 281,
//   comentarios : [
//     {autor : "carlos", mensagem : "O cavalo subiu"},
//     {autor : "carlos", mensagem : "O cavalo subiu"}
//   ],
//   estaAoVivo : true
// }

// faixaPreco = [
//   {tooltip : "700", minimo : 0, maximo : 700},
//   {tooltip : "700 a 1500", minimo : 700, maximo : 1500},
//   {tooltip : "700", minimo : 0, maximo : 700}
// ]


// console.log(faixaPreco[1].minimo)

// const num = ["ola meu nom e joao"]
// const lio = [3,2,5]

// num.unshift(1)
// num.splice(0,num.length)
// num.push(5)

// let maximo = faixaPreco.find(function(maximo){
//   return maximo.tooltip === "700 a 1500"
// })

// let a = num.concat(lio)
// let a = [...num,"a",...lio]
// let b=a.slice(0,5)
// let a = num.split(' ')
// let b = a.join('-')

// let a = prompt("bom dia")
// if(a==="bom"){
//   alert("gay")
// }

// let aa = document.getElementsByClassName('inputSearch')[0].innerText = ("salve")
// console.log(aa)


// document.getElementsByClassName("bus")[0].onclick = function aa(){
//   value1 = document.getElementsByClassName('inputSearch')[0].value
//   // value2="mamo"
// }

// console.log(value1)

// bcrypt.genSalt()

login = ["joao"]
senha = ["lari"]


// document.getElementsByClassName("b2")[0].onclick = testa

// function testa(){
//   let aab = document.getElementsByClassName("a1")[0].value
//   let aab2 = document.getElementsByClassName("a2")[0].value
//   if(aab2==login[0] || aab2==senha[0])
//     document.getElementsByClassName("a3")[0].innerHTML = ("Pode entrar")
//   else
//     document.getElementsByClassName("a3")[0].innerHTML = ("NAO pode entrar")
//   // console.log(listaCarlos)
//   // document.getElementsByClassName("a3")[0].
// }
