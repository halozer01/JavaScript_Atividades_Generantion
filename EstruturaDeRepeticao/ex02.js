const leia = require("readline-sync");


let vetoresIdades = [];

while (true) {
    let idade = leia.questionInt("Digite uma idade (ou um número negativo para sair): ");
    if (idade < 0) {
        break;
    }
    vetoresIdades.push(idade);
}   
// Saidda Pessoas menores de 21 anos e Maiores que 50 anos


let menores21 = 0;
let maiores50 = 0;

for (let i = 0; i < vetoresIdades.length; i++) {
    if (vetoresIdades[i] < 21) {
        menores21++;
    } else if (vetoresIdades[i] >= 50) {
        maiores50++;
    }
}
console.log("\nTotal de pessoas com menos de 21 anos: " + menores21);
console.log("Total de pessoas com 50 anos ou mais: " + maiores50);

