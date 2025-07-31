let salsicha = 3.50
let purê = 2.15
let salada = 1.9
let pão = 0.9
let batata = 0.5
let fixos = pão + batata

let Dsimples = fixos + salsicha + purê
let Dduplo = fixos + (salsicha * 2) + purê + salada
let Despecial = fixos + (salsicha * 3) + (purê * 2) + salada

console.log("Cardápio:\n"+
    "Dog Simples: R$"+Dsimples.toFixed(2)+"\n"+
    "Dog Duplo: R$"+Dduplo.toFixed(2)+"\n"+
    "Dog Especial: R$"+Despecial.toFixed(2)+"\n")