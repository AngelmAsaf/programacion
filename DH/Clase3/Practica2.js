let nombre = 'Angel';
let apellido = 'Asaf';
let sueldoActual = 25000  ;
let porcentajeAumento = 15 ;
let calculoAumento = (sueldoActual * porcentajeAumento) / 100 ;
let nuevosueldo = calculoAumento + sueldoActual;
console.log('hola estimado ' + apellido +' ' + nombre + '\n' + 'En base a tu sueldo actual: '+ sueldoActual + '\n' + 'a recibido un aumento del 15%' + '\n' + '$' + calculoAumento + '\n' + 'y su nuevo sueldo es de: ' + '$' + nuevosueldo);
