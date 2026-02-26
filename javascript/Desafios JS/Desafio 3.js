const numeroSecreto = Math.round(Math.random() * 100);
let palpite;
let tentativas = 0;

while (palpite !== numeroSecreto) {
palpite = Number(prompt("Qual seu palpite entre 1 e 100?"));
tentativas++;

if (palpite < numeroSecreto) {
    alert("O número é MAIOR!");
} else if (palpite > numeroSecreto) {
        alert("O número é MENOR!"); 
}
alert("Parabéns! Você acertou o número " + numeroSecreto + " em " + tentativas + " tentativas!");
}
