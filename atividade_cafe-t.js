let NomeUser1 = "Conrado"
let NomeUser2 = "Pedrita"

let IdadeUser1 = 15
let IdadeUser2 = 19

let User1Cliente = "False"
let User2Cliente = "True"

let CafesU1 = 187
let CafesU2 = 5

let Somacafes = CafesU1 + CafesU2

let valorcafe = 3.50
let valordesconto = 1.75

let Qtdparasub = 200

console.log("\nOlá\n"+"Bem-vindo ao sistema de usuário do Conradito\n"+"Abaixo estão as informações dos usuários cadastrados no sistema:\n")
console.log("----Lista de usuários:")
console.log("1 - Nome: "+NomeUser1+", idade: "+IdadeUser1+". É cliente: "+User1Cliente)
console.log("2 - Nome: "+NomeUser2+", idade: "+IdadeUser2+". É cliente: "+User2Cliente+"\n")

console.log("----Quantidade de cafés:")
console.log("O Cliente "+NomeUser1+" ja tomou "+CafesU1+" cafés!")
console.log("O Cliente "+NomeUser2+" ja tomou "+CafesU2+" cafés!\n")

console.log("----Soma de cafés tomados:")
console.log("Juntos, os clientes "+NomeUser1+ " e "+NomeUser2+ " tomaram "+(CafesU1+CafesU2)+" Cafés!")

console.log("Quantos Cafés faltam pra chegar em "+Qtdparasub+"?")
console.log("Faltam "+(Qtdparasub - CafesU1)+" para "+NomeUser1)
console.log("Faltam "+(Qtdparasub - CafesU2)+" para "+NomeUser2+"\n")

console.log("------------Fim do sistema de consultas\n")

// Atividade Extra
CafesU1 += 15
CafesU2 += 3

console.log("Após comprar mais 15 cafés, "+NomeUser1+" tomou "+CafesU1+" cafés!")
console.log("Após comprar mais 3 cafés, "+NomeUser2+" tomou "+CafesU2+" cafés!\n")

console.log(NomeUser1+" Já gastou R$"+(CafesU1*valorcafe)+"!")
console.log(NomeUser2+" Já gastou R$"+(CafesU2*valorcafe)+"!\n")

console.log("Com 50% de desconto, "+NomeUser1+" teria gasto R$"+(CafesU1*valordesconto))
console.log("Com 50% de desconto, "+NomeUser2+" teria gasto R$"+(CafesU2*valordesconto)+"\n")