let nota =-1;
 
while(nota ===1 || nota === 3 || nota < 0 || nota > 10 ) {
   
nota = parseInt(prompt("Ingresa nota entre 0 y 10"));

if (nota ===1 || nota === 3 || nota < 0 || nota > 10){
    console.log("error : nota fuera de rango");
}

}
