// condicionales

//condicion simple  
let perfil = 'admin'
if (perfil === 'admin') {
    console.log('Bienvenido administrador');

}

//condicion compuesto
let valor1 = 10
let valor2 = 20
if (valor1 >= valor2) {
    console.log(valor1 * valor2);
}
else { console.log(valor1 + valor2); }

//Anidamiento de condiciones
console.log('===Trabajando con el if anidado===');

let fruta = 'cambur';
if (fruta == 'cambur') {
    console.log('veo que te gustan los cambures');

} else if (fruta = 'fresa') {
    console.log('veo que te gustan los fresas');

} else if (fruta = 'pera') {
    console.log('veo que te gustan los peras');

} else {
    console.log('Veo que no te gustan las frutas');
}

// If ternario
/*
if (valor1 >= valor2) {
    console.log(valor1 * valor2);
} 
else {console.log(valor1 + valor2);} */


//Condicion         Entonces    Salida positiva   De lo contrario   Salida negativa
valor1 >= valor2 ? console.log(valor1 * valor2) : console.log(valor1 + valor2);

//Trabajando con el switch
console.log('=== Trabajando con el switch ===');
switch (fruta) {
    case 'cambur':
        console.log('Veo que te gustan los cambures');
        break;
    case 'fresa':
        console.log('Veo que te gustan las fresas');
        break;
    case 'pera':
        console.log('Veo que te gustan las peras');
        break;
    default:
        console.log('Veo que no te gustan las frutas');
        break; }