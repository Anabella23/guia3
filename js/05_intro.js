
const EDAD_MINIMA = 18;
let cantEdades = 5;
let contEdadesCumplen = 0;
let edad ;

for (let cont = 1; cont <= cantEdades; cont++) {
    edad = parseInt(prompt(`Ingrese edad ${cont}`));
    
    if ((edad > EDAD_MINIMA) && (edad %2 !=0)) {
        contEdadesCumplen++;
    } 
}

console.log(`Hubo ${contEdadesCumplen} edades impares mayores que ${EDAD_MINIMA}`);






