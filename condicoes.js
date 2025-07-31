// Condições simples
let prompt = require("prompt-sync")();
let idade = 18
if(idade > 18){
    console.log("Você pode tirar carteira de motorista!")
}

// > Maior
// < Menor
// == Igual (comparação)
// >= Maior ou Igual
// <= Menor ou igual
// != Diferente

function senhaadm(){
let senha = prompt("Digite a senha do sistema: ")
if(senha == "admin" ){
    console.log("Acesso Concedido")
}
else{
    console.log("Acesso Negado")
}
}

function atividadepeixes(){
let quilopeixe = parseInt(prompt("Insira o peso do peixe: "))
let valorquilo = 50
if (quilopeixe > 100){
    valorquilo = 55.9
}
let valorpeixe = quilopeixe * valorquilo
console.log("O valor do preço por Kilo é: R$"+valorquilo)
console.log("O valor do seu peixe é: R$"+valorpeixe)
}

// atividadenp()
function atividadenp(){
    let numeropergunta = parseInt(prompt("Digite um número para ver se ele é positivo ou negativo: "))
    if(numeropergunta == 0){
        console.log("O número "+numeropergunta+" é neutro.")
    }
    else if (numeropergunta > 0){
        console.log("O número "+numeropergunta+" é positivo.")
    }
    else{
        console.log("O número "+numeropergunta+" é negativo.")
    }

}

// valorcompra()
function valorcompra(){
    let valorcomprausuario = parseInt(prompt("Digite o valor da sua compra: "))
    let creditooudebito = prompt("O pagamento será em Crédito ou Débito? ")
    let acrescimocred = parseFloat (5 / 100)
    let descontodeb = parseFloat (10 / 100)
    let compracred = valorcomprausuario + (valorcomprausuario * acrescimocred)
    let compradeb = valorcomprausuario - (valorcomprausuario * descontodeb)
    
    if(creditooudebito == "Credito"){
        console.log("O valor da sua compra terá um adicional de 5% e seu valor será de R$:"+compracred)
    }
    if (creditooudebito == "Debito")
    {
        console.log("O valor da sua compra terá um desconto de 10% e seu valor será de R$:"+compradeb)
    }
    
}

// validocpf()
function validocpf(){
    let cpf = parseInt(prompt("Digite seu CPF sem pontuações: "))
    let tamanhocpf = 11
    if (cpf.length > tamanhocpf){
        console.log("CPF Inválido.")
    }
    if (cpf.length < tamanhocpf){
            console.log("CPF Inválido.")
    }
    else{
        console.log("CPF Validado com sucesso.")
    }
}

// numerosmaismenos()
function numerosmaismenos(){
    let primeironumero = parseInt(prompt("Insira o primeiro número: "))
    let segundonumero = parseInt(prompt("Insira o segundo número: "))
    let somanum = primeironumero + segundonumero
    let somaisdez = somanum + 10
    let subvinte = somanum - 20
    if(somanum > 50){
        somanum = somaisdez
        console.log("O número final é: "+somaisdez)
    }
    if(somanum){}
}