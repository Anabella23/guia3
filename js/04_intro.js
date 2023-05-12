
let num1 = parseInt(prompt("Ingrese cuantos múltiplos de 3 pero no de 5 quiere mostrar"));
let numMultiplos = 0;

for (let index = 1; index <= num1 ; index++) {
    let num;
    if ((num % 3 === 0) && (num % 5 === 0 )) {
        
        console.log(`${numMultiplos}`);
    }

    // console.log(`${numMultiplos}`);
}


