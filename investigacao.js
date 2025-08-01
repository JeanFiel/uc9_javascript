let prompt = require("prompt-sync")();

let nomeinterrogado = prompt("Boa noite. Somos do departamento de policia de Nova York. Poderia informar seu nome? \n")

let suspeitometro = 0

console.log("Olá "+nomeinterrogado+". Como você já deve saber, você foi chamado para este interrogatório pois existem suspeitas de que você tinha algum tipo de envolvimento com a vítima do assassinato brutal que ocorreu na noite passada. eu irei te fazer algumas perguntas. Responda com Sim ou Não ok?\n")

let telefonou = prompt("Primeiro. Você telefonou para a vítima? \n")
if(telefonou = "sim"|| "Sim"|| "SIM"){
    suspeitometro += 1
}

let estevelocal = prompt("Você esteve no local do crime? \n")
if(estevelocal = "sim"|| "Sim"|| "SIM"){
    suspeitometro += 1
}

let moraperto = prompt("Por acaso você mora perto da vítima? \n")
if(moraperto = "sim"|| "Sim"|| "SIM"){
    suspeitometro += 1
}

let divida = prompt("Você tinha contas em aberto com a vítima? \n")
if(divida = "sim"|| "Sim"|| "SIM"){
    suspeitometro += 1
}

let trabalhou = prompt("Você trabalhava com a vítima, certo? \n")
if(trabalhou = "sim"|| "Sim"|| "SIM"){
    suspeitometro += 1
}

if(suspeitometro == 0 | 1){
    console.log("Você aparenta ser inocente... por hora.")
}
else if (suspeitometro == 5){
    console.log("Prendam e executem-no! ele é o assassino!")
}
else if (suspeitometro == 3 | 4){
    console.log("Você está preso por ser cumplice no assassinato")
}
else{
    console.log("Iremos te manter sob vigilãncia até encontrarmos o assassino. ")
}





