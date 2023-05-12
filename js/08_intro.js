let num = parseInt(prompt("¿Cuantos números vas a ingresar?"));
let mayor=0;
let posicion;


for (let cont = 1; cont <= num; cont++) {
    let numero = parseInt(prompt(`Ingrese el ${cont} numero`));
    

 if (numero > mayor) {
    
    mayor = numero;
    posicion = cont;
   
 }

}
console.log(`El número mayor fué el ${mayor} en la posición ${posicion}`);



