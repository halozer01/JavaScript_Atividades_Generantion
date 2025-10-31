const leia = require('readline-sync')

let produto, quantidade, preco, total

console.log("Digite 1 para Cachorro Quente");
console.log("Digite 2 para X-Salada"); 
console.log("Digite 3 para X-Bacon");
console.log("Digite 4 para Bauru");
console.log("Digite 5 para Refrigerante");
console.log("Digite 6 para Suco de Laranja");

produto = parseInt(leia.question("Código do produto: "));
quantidade = parseInt(leia.question("Qual a quantidade comprada? "));

switch (produto) {
  case 1:
    nomeProduto = "Cachorro Quente";
    preco = 10.00;
    break;
  case 2:
    nomeProduto = "X-Salada";
    preco = 15.00;
    break;
  case 3:
    nomeProduto = "X-Bacon";
    preco = 18.00;
    break;
  case 4:
    nomeProduto = "Bauru";
    preco = 12.00;
    break;
  case 5:
    nomeProduto = "Refrigerante";
    preco = 8.00;
    break;
  case 6:
    nomeProduto = "Suco de Laranja";
    preco = 13.00;
    break;
  default:
    console.log("Código inválido! Digite um número entre 1 e 6.");
   
}

// cálculo e exibição
total = preco * quantidade;
console.log(`Produto: ${nomeProduto}`);
console.log(`Valor total: R$ ${total}`);

