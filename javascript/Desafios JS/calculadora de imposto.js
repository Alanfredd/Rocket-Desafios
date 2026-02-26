let precoOriginal = 150.50; // Preço em decimal
let temDireitoDesconto = true; //Booleano para o desconto
let icmsPercentual = Math.floor(Math.random() * (25 - 12 + 1)) + 12; // Gera entre 12 e 25

let valorComDesconto = precoOriginal;
let aplicouDesconto = "Não";

if (temDireitoDesconto) 
    valorComDesconto = precoOriginal * 0.90; // Aplica 10% de desconto
    aplicouDesconto = "Sim";

let valorImposto = valorComDesconto * (icmsPercentual / 100);
let valorFinal = valorComDesconto + valorImposto;

console.log("---- Calculadora de Imposto ---");
console.log(`Valor Original: R$ ${precoOriginal.toFixed(2)}`);
console.log(`Teve Desconto? ${aplicouDesconto}`);
console.log(`Valor após Desconto: R$ ${valorComDesconto.toFixed(2)}`);
console.log(`ICMS Aplicado: ("${icmsPercentual}%") (R$ ${valorImposto.toFixed(2)})`);
console.log("--------------------");
console.log(`Valor Final: R$ ${valorFinal.toFixed(2)}`);
       