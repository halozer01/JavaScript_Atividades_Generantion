//IOmportantando biblioteca
const leia = require('readline-sync')

let salario, abono, novoSalario;

console.log("Digite o seu salario em R$: ");
salario = leia.questionFloat();

console.log("Digite o valor do abono em R$: ");
abono = leia.questionFloat();

novoSalario = salario + abono;

console.log(`Seu novo salario com o abono é de R$ ${novoSalario}`);