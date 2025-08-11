let prompt = require("prompt-sync")()

nomeidade()
function nomeidade(){

    
    let nome = prompt("Digite seu nome: ")
    let idade = prompt("Digite sua idade: ")
    console.log(`Olá ${nome}! Você tem ${idade} anos!`)
}

parouimpar()
function parouimpar(){
    let numero = parseInt(prompt("Digite um numero: "))
    let resto = numero % 2

    if(resto == 0){
        console.log(`O numero ${numero} é Par`)

    } else{
        console.log(`O numero ${numero} é Impar`)
    }
}

umadez()
function umadez(){
    for (let i = 1; i <= 10 ; i++) {
        console.log(i)
        
    }
}

somanumeros()
function somanumeros(){
    let numeros = [5,8,12]
    let somanumero = numeros[0] + numeros[1] + numeros[2]
    console.log(`A soma dos numeros é: ${somanumero}`)
}

aluno()
function aluno(){
    
    let alunos = [
        {
            nome: "Cristiano Ronaldo",
            idade: 40,
            curso: "Mestrado e Doutorado em futebol profissional"
        }
    ]
    for(let i  = 0; i < alunos.length; i++){
        console.log(`O aluno ${alunos[i].nome} está fazendo o curso: ${alunos[i].curso}`)
    }
}