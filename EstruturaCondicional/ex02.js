const leia = require("readline-sync");

let verificador,sinal


let numero = parseInt(leia.question("Digite um número inteiro: "));

// Verifica se o número é par ou ímpar
if (numero % 2 === 0) {
    verificador = "par";
} 
else {
    verificador = "ímpar";
}

//Verificar se o número é positivo, negativo
if (numero > 0) {
    sinal = "positivo";
} 
else if (numero < 0) {
    sinal = "negativo";
} 
else {
    sinal = "neutro";

console.log("O número ${numero} é ${verificador} e ${sinal}.");}