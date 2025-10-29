const leia = require('readline-sync')

let salarioBruto, adicionalNoturno, horasExtras, descontos, salarioLiquido;

console.log("Digite o valor do salário bruto: ");
salarioBruto = leia.questionFloat();

console.log("Digite o valor do adicional noturno: ");
adicionalNoturno = leia.questionFloat();

console.log("Digite o valor das horas extras: ");
horasExtras = leia.questionFloat();

console.log("Digite o valor dos descontos: ");
descontos = leia.questionFloat();

salarioLiquido = salarioBruto + adicionalNoturno + (horasExtras * 5) - descontos;

console.log("O salário líquido é: " + salarioLiquido);
