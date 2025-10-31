const leia = require('readline-sync')

let A, B, C, somaAB

console.log("Digite o valor de A?");
A = parseFloat(leia.question());

console.log("Digite o valor de B?");
B = parseFloat(leia.question());

console.log("Digite o valor de C?");
C = parseFloat(leia.question());

somaAB = A + B

if (somaAB > C) {
    console.log("A soma de A + B é maior que C");
} 
else if (somaAB < C) {
    console.log("A soma de A + B é menor que C");
} 
else{
    console.log("A soma de A + B é igual a C");}

    