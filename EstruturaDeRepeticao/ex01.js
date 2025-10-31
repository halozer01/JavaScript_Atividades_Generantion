const leia = require("readline-sync");

let vetorInteiros = [];
let pares = 0;
let impares = 0;


for (let indice = 0; indice < 10; indice++) {
    const numero = leia.questionInt(`Digite o ${indice + 1}º número: `);
    vetorInteiros.push(numero);

    if (numero % 2 === 0) {
        pares++;
    } else {
        impares++;
    }
}

// Saída: totais de pares e ímpares
console.log("\nTotal de números pares: " + pares);
console.log("Total de números ímpares: " + impares);
