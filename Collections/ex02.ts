import leia = require("readline-sync");

const setNumeros: Set<number> = new Set<number>();

for (let i = 0; i < 10; i++) {
    const numero = leia.questionInt(`Digite o ${i + 1}º número: `);
    setNumeros.add(numero);
}
console.log("\nListar todos os números :");
for (let num of setNumeros) {
    console.log(num);
}

const numerosOrdenados = [...setNumeros].sort((a, b) => a - b);
console.log("\nListar todos os números em ordem crescente:");
for (let num of numerosOrdenados) {
    console.log(num);
}
