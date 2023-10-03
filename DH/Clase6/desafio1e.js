/*
1. Crea una carpeta de trabajo y dentro de ella crea un archivo JavaScript (.js).
Vamos a afianzar nuestros conocimientos sobre arrays y strings realizando diferentes
acciones sobre ellos. Verificaremos si se comportan como esperamos u ocurren resultados
diferentes a los esperados.
2. Define un array que contenga un conjunto de seis (6) productos de
electrodomésticos.
3. Ejecutar sobre el array creado las siguientes acciones:
● Acceder de manera arbitraria a diferentes elementos del array. Recuerda mostrar por
la consola los resultados.
● Extraer el primer elemento del array y agregarlo al final del mismo.
● Agregar al final del array dos (2) nuevos productos.
● Mostrar por la consola la cantidad de elementos que contiene el array.
● Buscar un elemento del array y crear una condición responsable de establecer si
existe o no el producto dentro del array. De existir, se le debe mostrar el mensaje:
“Producto encontrado”. En el caso contrario mostrar el mensaje “El producto buscado
no existe”.
● Unificar todos los elementos del array en una cadena de texto (string), separando los
elementos por espacios en blanco.
● Determinar la cantidad de elementos que posee la cadena de texto obtenida.
● Cambiar el nombre de algún producto de la cadena de texto por otro, valiéndose de la
función adecuada para ello.

● Con la cadena de texto obtenida generar un nuevo array con cada una de las palabras
de la cadena de texto. Tener en cuenta que los elementos deben estar separados por
una coma.

*/
//Enviado por Mariano y Rodrigo
//                            0           1               2            3           4
let electrodomesticos = ['Heladera', 'Microhondas', 'Lavarropa', 'Televisor', 'Licuadora', 'Freezer'];

console.log(electrodomesticos[1]);
console.log(electrodomesticos[4]);
//Enviado por Maximiliano - Marcos
console.log("En mi casa tengo una " + electrodomesticos[4] + " para hacer jugos");
//Interpolación de código
//Enviado por Mariano
let nombre = 'Daniel';
console.log(`En la casa de ${nombre} exiete una ${electrodomesticos[4]} para hacer jugos`);

//Enviado por: Juan Alejandro
electrodomesticos.push(electrodomesticos.shift());
console.log(electrodomesticos);

//Enviado por Sofia Olmedo
/*
let elPrimero=electrodomesticos.shift();
console.log(elPrimero);
electrodomesticos.push(elPrimero);
console.log(electrodomesticos);
*/
//Enviado por Nelson y Juan Pablo
electrodomesticos.push("Teclado", "Monitor");
console.log(electrodomesticos);
//Enviado por Daniel - Rodrigo
console.log('Cantidad de elementos del array');
console.log(electrodomesticos.length);

//Ojo con este dato proporcionado por Cristian: 
//Gallina Tiene Huevos -> GTH -> Length
/*
//Las siete capas del modelo OSI
A aplicación
P resentación
S esión
T ransporte
R ed
E nlace
F ísica
*/

//Enviado por Lucas - Juan Pablo
let productoBuscado = 'Heladera'
//Devuelve un booleano  - true - false
//indexof() - posición del elemento - ( -1 )
if (electrodomesticos.includes(productoBuscado)) {
    console.log(`${productoBuscado} esta disponible`);
}else {
    console.log("No se encuentra");
};
//Enviado por Maximiliano - Otra forma de hacer lo mismo
console.log('Otra forma de hacer lo mismo');
mostrarElemento = electrodomesticos.indexOf("Televisor");
if (mostrarElemento === -1) {
    console.log("El producto buscado no existe");
} else (console.log("Producto encontrado"));

//El método .join() lo que hace es unifica los elementos del array en una cadena texto.
let cadenaTexto = electrodomesticos.join(' ');
console.log(cadenaTexto);
console.log('Cantidad de caracteres de la cadema de texto');
console.log(cadenaTexto.length);

//Replace 
//Enviado por: Maximiliano -MJuan Pablo
//                           Buscar    Reemplazar
console.log('Utilizando el método .replace');
let nuevaCadenaTexto = cadenaTexto.replace('Heladera','Horno');
//console.log(cadenaTexto.replace('Heladera','Horno'));
console.log(cadenaTexto);
console.log(nuevaCadenaTexto);

//Trabajando con el .split()
//Enviado por: Mariano - Juan Pablo - Emir - Rodrigo
console.log('Trabajado con el .split()');
let arrayPalabras = cadenaTexto.split(" ");
//let cadenaComas = arrayPalabras.join(",");
console.log(`Nuevo array con palabras separadas por comas:  ${arrayPalabras}`);
console.log(arrayPalabras);
console.log(typeof(arrayPalabras[1]));
