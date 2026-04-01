Array.prototype.meuMap = function(callback) {
    const novoArray = [];
    for (let i = 0; i < this.length; i++) {
        novoArray.push(callback(this[i], i, this));
    }
    return novoArray;
};

Array.prototype.meuFilter = function(callback) {
    const novoArray = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            novoArray.push(this[i]); 
        }
    }
    return novoArray;
};

Array.prototype.meuReduce = function(callback, valorInicial) {
    let acumulador = valorInicial !== undefined ? valorInicial : this[0];
    let indiceInicial = valorInicial !== undefined ? 0 : 1;

    for (let i = indiceInicial; i < this.length; i++) {
        acumulador = callback(acumulador, this[i], i, this);
    }
    return acumulador;
};

Array.prototype.meuForEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
};

const numeros = [1, 2, 3, 4, 5];

console.log("--- RESULTADOS DO DESAFIO 2 ---");
const dobrados = numeros.meuMap(n => n * 2);

console.log("Map (Dobro):", dobrados); 

const maioresQueDois = numeros.meuFilter(n => n > 2);
console.log("Filter (> 2):", maioresQueDois); 

const somaTotal = numeros.meuReduce((acc, atual) => acc + atual, 0);
console.log("Reduce (Soma):", somaTotal); 

console.log("ForEach (Execução):");
numeros.meuForEach((n, i) => console.log(` - Posição ${i}: Valor ${n}`));