let cantJugadores= parseInt(prompt("Cuantas estaturas va a ingresar"));
let estaturaTotal;
let promedio;

for (let cont = 1; cont <= cantJugadores; cont++) {
  estatura = parseFloat(prompt(`ingresa estatura ${cont}`));
    estaturaTotal = estaturaTotal + estatura;
    promedio = estaturaTotal / cantJugadores;

    console.log(`La estatura promedio es de ${estaturaTotal} cm`);

}

// console.log(`La estatura promedio es de ${promedio} cm`);
