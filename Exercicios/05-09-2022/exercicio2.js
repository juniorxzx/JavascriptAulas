// Faça um programa em que permita a entrada de um número qualquer e exiba se este
// número é par ou ímpar. Se for par exiba também a raiz quadrada do mesmo; se for
// ímpar exiba o número elevado ao quadrado.

const prompt = require("prompt-sync")()

let vezes = Number(prompt("Quantas vezes quer repetir o programa? "))
let i = 1

while (i <= vezes) {
    i++
    let numero = Number(prompt("Digite um número: "))
    if (numero % 2 == 0) {
        console.log(`${numero} é par, e sua raiz quadrada é ${Math.sqrt(numero)}`)
    }
    else {
        console.log(`${numero} é ímpar, e seu número elevado ao quadrado é: ${Math.pow(numero, 2)}`)
    }
}
