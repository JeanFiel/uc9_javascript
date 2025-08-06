let prompt = require("prompt-sync")()

let usuarios = [
    { id: 1,
    nome: "Chaves",
    idade: 8 },

    { id: 2,
    nome: "Quico", 
    idade: 10 },

    { id: 3, 
    nome: "Seu Madruga",
    idade:44 },

    { id: 4,
    nome: "Chiquinha",
    idade:8 },

    { id: 5,
    nome: "Nhonho",
    idade:9 },

    { id: 6,
    nome: "Bruxa do 71",
    idade:300 }
]

main()
function main(){

    console.clear()

    console.log("Opções disponíveis:")
    console.log("1 - listar todos")
    console.log("2 - Buscar por nome")
    let opcao = prompt("Digite uma opção: ")

    if(opcao == "1"){
        cresdecres()
    }
    else if (opcao == "2"){
        buscanome()
    }else{
        console.log("Opção inválida.")
    }
}
function cresdecres(){
    console.log("Selecione: ")
    console.log("1 - Listar em ordem crescente")
    console.log("2 - Listar em ordem decrescente")
    let escolha = prompt("Selecione 1 ou 2 ")
    
    if(escolha == "1"){
    
        crescente()
    }else if (escolha == "2"){
        decrescente()
    } else{
        console.log("Opção Inválida")
        cresdecres()
    }

} 

function crescente(){
    console.clear()
    for(let i = 0; i < usuarios.length; i++){
        console.log(`ID: ${usuarios[i].id} - Nome: ${usuarios[i].nome} - Idade: ${usuarios[i].idade}`)
    }
}
    
function decrescente(){
    console.clear()
    for(let i = usuarios.length - 1; i >= 0; i--){
    console.log(`ID: ${usuarios[i].id} - Nome: ${usuarios[i].nome} - Idade: ${usuarios[i].idade}`)
}
}

function buscanome(){
    console.clear()
    nomeprocurado = prompt("Digite o nome que quer buscar: ")
    
    for (let i = 0; i < usuarios.length; i++){
        if (usuarios[i].nome == nomeprocurado){
            console.log(`ID: ${usuarios[i].id} - Nome: ${usuarios[i].nome} - Idade: ${usuarios[i].idade}`)
        }
        
        if( i > usuarios.length && usuarios[i].nome != nomeprocurado){
            
            console.log("Usuário não encontrado. tente novamente.")

        }

        }
    }

function buscapartenome(){
    
}
