let a = 1; 
let b = -5;
let c = 6;


if (a === 0) {
    console.log("Erro: O valor de 'a' não pode ser zero em uma equação do 2º grau.");
} else {
   
    let delta = (b ** 2) - (4 * a * c);

    
    if (delta < 0) {
        console.log(`Delta = ${delta}. Não existem raízes reais para esta equação.`);
    } 
    
    else if (delta === 0) {
        let x = -b / (2 * a);
        console.log(`Existe apenas uma raiz real: x = ${x}`);
    } 
    
    else {
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);
        console.log(`Existem duas raízes reais: x1 = ${x1} e x2 = ${x2}`);
    }
}