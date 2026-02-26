const prompt = require("prompt-sync")();
let  listaDeCompras = [];

function adicionarItem(item) {
    listaDeCompras.push(item);
    console.log(`Item "${item}" adicionado.`);
}

function exibirLista() {
    if (listaDeCompras.length === 0) {
        console.log("A lista de compras está vazia.");
    } else {
        console.log("\nLista de Compras:");
        for (let i = 0; i < listaDeCompras.length; i++) {
            console.log(`${i + 1}. ${listaDeCompras[i]}`);
        }
    }
}

function removerItem(item) {
    let indice = listaDeCompras.indexOf(item);
    
    if (indice !== -1) {
        listaDeCompras.splice(indice, 1);
        console.log(`Item "${item}" removido.`);
    } else {
        console.log(`Item "${item}" não encontrado na lista.`);
    }
}

let opcao;

while (opcao !=="4") {
    console.log("\n1 - Adicionar...");

    opcao = prompt("Escolha uma opção: ");

    switch (opcao) {
        case "1":
            let nomeDoItem = prompt("Digite o nome do item: ");
            adicionarItem(nomeDoItem); 
            break;
case "2":
let itemParaRemover = prompt("Digite o nome do item para remover: ");
removerItem(itemParaRemover);
break;
case "3":   
exibirLista();
break;
case "4":
    console.log("Encerrando o programa. Até mais!"); 
    break;
    
    default:
        console.log("Opção inválida!");
        break;
}
}

