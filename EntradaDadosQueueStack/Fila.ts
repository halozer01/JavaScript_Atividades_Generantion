import { Queue } from "./Queue";
import leia = require("readline-sync");

const fila = new Queue<string>()
let opcao: number;

do{
console.log("# ## ### #### #########   Menu   ########## #### ### ## #");
console.log("\n--Digite 1 para adicionar cliente na fila");
console.log("\n--Digite 2 para listar todos os clientes");
console.log("\n--Digite 3 para retirar cliente da fila");
console.log("\n--Digite 0 para sair");

opcao = leia.questionInt("\nDigite a opção desejada: ");


switch (opcao) {

    case 1:
        const cliente = leia.question("\nDigite o nome do cliente: ");
            fila.enqueue(cliente);
            console.log(`\nCliente "${cliente}" adicionado à fila.`);
            break;

    case 2:
        console.log("\nLista de clientes na fila:");
            fila.printQueue();
            break;

    case 3:
            const removido = fila.dequeue();
            if (removido) {
                console.log(`Cliente "${removido}" foi removido da fila.`);
            } else {
                console.log("A fila está vazia.");
            }
            break;

           
    case 0:
            console.log("Programa finalizado!");
            break;

        default:
            console.log("Opção inválida. Tente novamente.");
    }
} while (opcao !== 0);
 






        
        