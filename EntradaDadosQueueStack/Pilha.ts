import { Stack } from "./Stack";
import leia = require("readline-sync");

const pilha = new Stack<string>()
let opcao: number;

do{
console.log("# ## ### #### #########   Menu   ########## #### ### ## #");
console.log("\n--Digite 1 para adicionar um novo livro na pilha");
console.log("\n--Digite 2 para listar todos os livros");
console.log("\n--Digite 3 para retirar um livro da pilha");
console.log("\n--Digite 0 para sair");

opcao = leia.questionInt("\nDigite a opção desejada: ");

switch (opcao) {

    case 1:
        const livro = leia.question("\nDigite o nome do livro: ");
            pilha.push(livro);
            console.log(`\nLivro "${livro}" adicionado à pilha.`);
            break;

    case 2:
        console.log("\nLista de livros na pilha:");
            pilha.printStack();
            break;

    case 3:
        const removido = pilha.pop();
        if (removido) {
            console.log(`Livro "${removido}" foi removido da pilha.`);
        } else {
            console.log("A pilha está vazia.");
        }
        break;

    case 0:
        console.log("Programa finalizado!");
        break;

    default:
        console.log("Opção inválida. Tente novamente.");
}
} while (opcao !== 0);  

