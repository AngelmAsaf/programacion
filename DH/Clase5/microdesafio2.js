//Microdesafio 2 Clase 5
// Primera función - Callback
function calcularTotalHamburguesa(tipoHamburguesa, jamon, queso, salsaTomate, mayonesa, mostaza, tomate, lechuga, cebolla) {
    // Precios base de las hamburguesas
    let precioBase = 0;
    switch (tipoHamburguesa) {
        case "Carne a la parrilla":
            precioBase += 1800;
            break;
        case "Pollo":
            precioBase += 1500;
            break;
        case "Vegetariana":
            precioBase += 1200;
            break;
        default:
            console.log("Tipo de hamburguesa no válido");
            return 0;
    }

    // Calcular el total de los adicionales seleccionados
    let totalAdicionales = 0;
    if (jamon) totalAdicionales += 30;
    if (queso) totalAdicionales += 25;
    if (salsaTomate) totalAdicionales += 5;
    if (mayonesa) totalAdicionales += 5;
    if (mostaza) totalAdicionales += 5;
    if (tomate) totalAdicionales += 15;
    if (lechuga) totalAdicionales += 10;
    if (cebolla) totalAdicionales += 10;

    // Calcular el total a pagar
    let totalPagar = precioBase + totalAdicionales;
    return totalPagar;
}

// Segunda función
function generarMensaje(nombre, apellido, tipoHamburguesa, jamon, queso, salsaTomate, mayonesa, mostaza, tomate, lechuga, cebolla) {
    let totalPagar = calcularTotalHamburguesa(tipoHamburguesa, jamon, queso, salsaTomate, mayonesa, mostaza, tomate, lechuga, cebolla);
    let mensaje = "Estimado " + nombre + " " + apellido + ", el monto total a pagar es de: $" + totalPagar;
    return mensaje;
}

console.log(generarMensaje("Joaquin", "Cantos", "Carne a la parrilla", false, true, true, true, true, true, true, true));