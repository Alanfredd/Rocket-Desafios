let a = 1; 
let b = -5;
let c = 6;

let delta = (b ** 2) - (4 * a * c);
 
if (delta <0) {
    console.log("A equação não possui raízes reais (Delta negativo).");
} else if (delta === 0) {
    
    let x = -b / (2 * a);
    console.log("A equação possui uma raiz real: x = " + x);
} else {
    
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);

    console.log(`As raízes da equação são: x1 = ${x1} e x2 = ${x2}`);
}