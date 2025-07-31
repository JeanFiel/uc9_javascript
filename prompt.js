// Permitir o input do usuário em JS
let prompt = require("prompt-sync")();

atividadeIdade()

function atividadeNome(){
    
    let nome = prompt("Digite o seu nome: ")
    let sobrenome  = prompt("Digite o seu nome: ")
    console.log("Seja bem vindo(a) "+nome+" "+sobrenome+"!")
}

function atividadeIdade(){
    let idade = parseInt ( prompt("Digite sua idade: ") )
    let idade_futura = idade + 5
    console.log("Sua idade daqui a 5 anos será: "+idade_futura)
}
