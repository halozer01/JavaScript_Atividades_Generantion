const leia = require("readline-sync");

let vetor = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];

// Solicitar um número ao usuário
const numeroProcurado = leia.questionInt("Digite um número para procurar no vetor: ");


let encontrado = false; 
let posicao = 0;        

for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] === numeroProcurado) {
        encontrado = true; 
        posicao = i;      
        break;             
    }
}
if (encontrado) {
    console.log("Número encontrado na posição: " + posicao);
} else {
    console.log("Número não encontrado no vetor.");
}
