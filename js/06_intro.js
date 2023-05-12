
let venta;
let totalVentas=0;
let cantVentas = parseFloat(prompt("Cuantas ventas desea ingresar"));



for (let cont = 1; cont <= cantVentas; cont++) {
    venta = parseFloat(prompt(`Ingrese venta ${cont}`));
    totalVentas = totalVentas + venta;
    
} 


 console.log(`Total de ventas ${totalVentas}`);
