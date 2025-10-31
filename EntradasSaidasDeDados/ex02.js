const leia = require('readline-sync')

let nota1, nota2, nota3, nota4, media;

console.log("Digite a primeira nota: ");
nota1 = leia.questionFloat();

console.log("Digite a segunda nota: ");
nota2 = leia.questionFloat();

console.log("Digite a terceira nota: ");
nota3 = leia.questionFloat();

console.log("Digite a quarta nota: ");
nota4 = leia.questionFloat();

media = (nota1 + nota2 + nota3 + nota4) / 4;

console.log(`A média das notas é: ${media}`);   

