const leia = require('readline-sync')

let aumento, novoSalario

console.log("Informe seu nome?");
let nome = leia.question();

console.log("Digite 1 para Gerente");
console.log("Digite 2 para Vendedor");
console.log("Digite 3 para Supervisor");
console.log("Digite 4 motorista");
console.log("Digite 5 para Estoquista");
console.log("Digite 6 para Técnico de TI");
let cargo = parseInt(leia.question());

console.log("Digite o seu salário?");
let salario = parseFloat(leia.question());

switch (cargo) {
    case 1:
        reajuste = 0.10
        break;
    case 2:
        reajuste = 0.07
        break;
    case 3:
        reajuste = 0.09
        break;
    case 4:
        reajuste = 0.06
        break;
    case 5:
        reajuste = 0.05
        break;
    case 6:
        reajuste = 0.08
        break;
}

novoSalario = salario + (reajuste * salario);
console.log("Olá " + nome + ", seu novo salário é de R$" + novoSalario);


