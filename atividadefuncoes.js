let prompt = require("prompt-sync")();

function IdadeHoje(){
    let anonascimento = parseInt(prompt("Digite seu ano de nascimento: "))
    let anoatual = parseInt(prompt("Digite o ano atual: "))
    let idadehoje = anoatual - anonascimento
    console.log("Você tem "+idadehoje+" anos.")
}

function SomaDois(){
    let primeironumero = parseInt(prompt("Digite o primeiro número: "))
    let segundonumero = parseInt(prompt("Digite o segundo número: "))
    let somadois = primeironumero + segundonumero
    console.log("A soma dos dois números é "+somadois)
}

function ConverteKM(){
    let numeroemM = parseInt(prompt("Digite a distãncia em metros: "))
    let metrosemkm = numeroemM / 1000
    console.log("A distância em kilômetros é: "+metrosemkm.toFixed(2)+"Km")
}

function Medianotas(){
    let primeiranota = parseInt(prompt("Digite a nota do primeiro semestre: "))
    let segundanota = parseInt(prompt("Digite a nota do segundo semestre:"))
    let medianotas = (primeiranota + segundanota) / 2
    console.log("a média dos dois semestres é: "+medianotas.toFixed(2))
}

function tabuadanum(){
    let numero = parseInt(prompt("Digite um número para ver sua tabuada: "))
    let nx1 = numero
    let nx2 = numero * 2
    let nx3 = numero * 3
    let nx4 = numero * 4
    let nx5 = numero * 5
    let nx6 = numero * 6
    let nx7 = numero * 7
    let nx8 = numero * 8
    let nx9 = numero * 9
    let nx10 = numero * 10

    console.log(
        numero+" X 1 "+" = "+nx1+"\n"+
        numero+" X 2 "+" = "+nx2+"\n"+
        numero+" X 3 "+" = "+nx3+"\n"+
        numero+" X 4 "+" = "+nx4+"\n"+
        numero+" X 5 "+" = "+nx5+"\n"+
        numero+" X 6 "+" = "+nx6+"\n"+
        numero+" X 7 "+" = "+nx7+"\n"+
        numero+" X 8 "+" = "+nx8+"\n"+
        numero+" X 9 "+" = "+nx9+"\n"+
        numero+" X 10 "+" = "+nx10+"\n"

    )

}