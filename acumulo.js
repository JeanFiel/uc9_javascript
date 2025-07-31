// Acumular valores em uma variável
let personagem = "Sonica"
let moedas = 0

console.log("Bem-vindo ao jogo")
console.log(personagem+": "+moedas+" moedas")

moedas = 1
console.log(personagem+": "+moedas+" moedas")

// moedas +=1
// moedas++
moedas = moedas + 1
console.log(personagem+": "+moedas+" moedas")

moedas++
moedas++
moedas = moedas +5
moedas = moedas -2
moedas = moedas +3
console.log(personagem+": "+moedas+" moedas")

moedas = moedas +10
moedas = moedas /2
moedas++ //Checkpoint
let moedascheckpoint = moedas
moedas = moedas *2
console.log(personagem+": "+moedas+" moedas")

// Morreu
moedas = 0
console.log(personagem+": "+moedas+" moedas")

// Reviveu
moedas = moedascheckpoint
console.log(personagem+": "+moedas+" moedas")