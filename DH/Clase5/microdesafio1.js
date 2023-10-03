/*
1. Crea una carpeta de trabajo y dentro de ella crea un archivo JavaScript (.js).
2. Crea una función que permita calcular el monto a pagar por el alquiler de un
vehículo, que reciba como parámetros: “tipo de vehículo”, “Días de alquiler” y “silla
para bebe”.
3. Define y realiza los cálculos para obtener el total a pagar, teniendo en cuenta las
siguientes consideraciones:
● De acuerdo al tipo de vehículo, se le cobra al cliente un monto por día:
○ Compacto: $14000
○ Mediano: $17000
○ Camioneta: $28000
● Si adicionalmente el cliente requiere la silla para niños, se le cobra un adicional por día
de $1200
4. Una vez creado el programa, ejecutalo. ¿Recuerdas cómo?
5. Para probar las diferentes respuestas invoca a la función, asigna diferentes valores o
argumentos. Usando el console.log(), muestra los resultados al usuario:

“Estimado cliente: en base al tipo de vehículo compacto alquilado, considerando los 3 días
utilizados, el monto total a pagar es de $42000 ” .

Recuerda que si el cliente pidió la silla para niños debe también indicarlo en el mensaje final. */
// UNA FORMA 
let tipo = 'Mediano';
let sillaBebe = true;
let dias = 5;

function alquilerVehiculo(tipo, sillaBebe, dias) {
    let resultado;

    switch (tipo) {
        case 'Compacto': resultado = sillaBebe == true ? (dias * 14000) + (1200 * dias) : dias * 14000;
            break;
        case 'Mediano': resultado = sillaBebe == true ? (dias * 17000) + (1200 * dias) : dias * 17000;
            break;
        case 'Camioneta': resultado = sillaBebe == true ? (dias * 28000) + (1200 * dias) : dias * 28000;
            break;
    }

    return resultado;
}
let precioFinal = alquilerVehiculo(tipo, sillaBebe, dias);
console.log('Estimado cliente: en base al tipo de vehículo ' + tipo + ' alquilado, considerando los ' + dias + ' días  utilizados, el monto total a pagar es de $' + precioFinal);


// Otra forma //    

function alquilerVehiculo (tipo, dias, sillaBebe) {
    switch(tipo){
        case 'compacto' : precio = 14000; 
         break;
        case 'mediano' : precio = 17000; 
         break;
        case 'camioneta': precio =  28000;
         break;
    }
        total = sillaBebe== true ? precio + 1200 * dias : precio * dias;


 return 'Estimado cliente: en base al tipo de vehículo '+tipo+' alquilado, considerando los '+dias+' días utilizados, el monto a pagar es de $'+ total}


console.log (alquilerVehiculo('compacto', 5,true))