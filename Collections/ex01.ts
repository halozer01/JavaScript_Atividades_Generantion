import leia = require("readline-sync");

const cores: Array<string> = new Array<string>();

for (let i = 0; i < 5; i++) {
    cores.push(leia.question("Digite 5 cores: "));
}

console.log("\nListar todas as cores:");
for (let cor of cores) {
    console.log(cor);
}

// .sort() ordena alfabeticamente as cores
const coresOrdenadas = [...cores].sort();

console.log("\nOrdenar as cores:");
for (let cor of coresOrdenadas) {
    console.log(cor);
}
