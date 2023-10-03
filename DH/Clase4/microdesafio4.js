let numeroA = 4;
let numeroB = 5;
let operacion = '/';
let resultado = null;

switch (operacion) {
    case '+':
        resultado = numeroA + numeroB
        console.log('Resultado: \n' + numeroA + ' ' + operacion + ' ' + numeroB + ' = ' + resultado);
        break;
    case '-':
        resultado = numeroA - numeroB
        console.log('Resultado: \n' + numeroA + ' ' + operacion + ' ' + numeroB + ' = ' + resultado);
        break;
    case '*':
        resultado = numeroA * numeroB
        console.log('Resultado: \n' + numeroA + ' ' + operacion + ' ' + numeroB + ' = ' + resultado);
        break;
    case '/':
        if (numeroB == 0) {
            console.log('Math Error');
        } else {
            resultado = numeroA / numeroB
            console.log('Resultado: \n' + numeroA + ' ' + operacion + ' ' + numeroB + ' = ' + resultado);
        }
        break;
    default:
        console.log('Las operaciones aceptadas son: sumar - restar - multiplicar - dividir');
}

//otra forma
/*let operacion = "sumar";
let valor1 = 5;
let valor2 = 10;

let resultado;
switch (operacion) {
    case "sumar":
        resultado = valor1 + valor2;
        break;
    case "restar":
        resultado = valor1 - valor2;
        break;
    case "multiplicar":
        resultado = valor1 * valor2;
        break;
    case "dividir":
        if (valor2 !== 0) {
            resultado = valor1 / valor2;
        } else {
            console.log("No se puede dividir entre cero.");
            resultado = undefined;
        }
        break;
    default:
        console.log("Las operaciones aceptadas son: sumar - restar - multiplicar - dividir");
        resultado = undefined;
        break;
}

if (resultado !== undefined) {
    console.log('El resultado de ' + operacion + valor1 + ' y ' + valor2 +' es ' + resultado);
}*/