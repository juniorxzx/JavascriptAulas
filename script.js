const prompt = require("prompt-sync")()

// console.log("Hello World")
console.log("Bem vindo")

let nome = prompt("Qual seu nome? ")

let idade = Number(prompt("Digite sua idade: "))

let altura = Number(prompt("Digite sua altura: "))

console.log(`${nome}, você tem  ${idade} anos, e  ${altura} m!`)