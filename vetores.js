let prompt = require("prompt-sync")()


let nomes = []

main()
function main(){
 let opcao = prompt("Digite 1 para cadastrar ou 2 para listar, 3 para buscar ")
 if(opcao == "1"){
    let nome = prompt("Digite seu nome: ")
    nomes.push(nome)
    main()
 }
 else if(opcao == "2"){

    for(let i  = 0; i < nomes.length; i++){
        console.log((i+1)+" --- "+nomes[i])
    }
 }
 else if(opcao == 3){
    let posicao = prompt("Digite a posição do usuário que quer buscar: ")

    if(nomes.length >= posicao){

        console.log(nomes[posicao-1])
    }
    else{
        console.log("O usuário não existe.")
    }
 }
}


function arrays(){
    //Vetores (ou Arrays): guardar vários dados em uma só variável
    
    let nomes = [ "Jaílson", "Mendes", "Laranja",]
    
    console.log(`O usuário ${nomes[0]} ${nomes[1]} toma suco de ${[nomes[2]]}`)
    
    nomes[0] = "Ricardo"
    nomes[1] = "Milos"
    
    console.log(`O usuário ${nomes[0]} ${nomes[1]} toma suco de ${[nomes[2]]}`)
    
    // o comando push adiciona um item no final da array
    nomes.push("Doce")
    console.log(`O usuário ${nomes[0]} ${nomes[1]} toma suco de ${[nomes[2]]} ${nomes[3]}`)

}


