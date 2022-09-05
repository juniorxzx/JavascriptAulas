/*
Faça um programa que receba a idade de uma pessoa e mostre na saída em qual
categoria ela se encontra:
 10-14 infantil
 15-17 juvenil
 18-25 adulto
*/ 

const prompt = require("prompt-sync")()

let idade = Number(prompt("Digite sua idade: "))

if(idade >= 10 && idade <= 14){
    console.log(`${idade} - [infantil]`)
}
else if(idade >= 15 && idade <= 17){
    console.log(`${idade} - [juvenil]`)
}
else if(idade >= 18 && idade <= 25){
    console.log(`${idade} - [adulto]`)
}
else{
    console.log("Esperamos idades de 10 até 25 anos. Se você tem mais que 25, se considere adulto!")
}