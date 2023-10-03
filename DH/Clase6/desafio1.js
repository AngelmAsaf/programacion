/*Instrucciones
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
una coma.*/

let electrodomesticos = ['Heladera', 'Microhondas', 'Lavarropa', 'Televisor', 'Licuadora', 'Freezer'];

console.log(electrodomesticos[1]);
console.log(electrodomesticos[4]);

console.log("En mi casa tengo una " + electrodomesticos[4] + " para hacer jugos");

let nombre = 'angel';
//interpolacion                    $ {}           comnillas francesas ``
console.log(`En mi casa tengo una ${electrodomesticos[4]} para hacer jugos`);

//una forma
electrodomesticos.push(electrodomesticos.shift());
console.log(electrodomesticos);

//otra forma mas larga

let elPrimero=electrodomesticos.shift();
console.log(elPrimero);
electrodomesticos.push(elPrimero);
console.log(electrodomesticos)


electrodomesticos.push("Teclado", "Monitor")

console.log(electrodomesticos.length);

//Gallina Tiene Huevos -> GTH -> Length
//                       
let productoBuscado = 'Heladera'
//Devuelve un booleano
if (electrodomesticos.includes(productoBuscado)) {
    console.log(`${productoBuscado} esta disponible`);
}else {
    console.log("No se encuentra");
}

//Otra forma

console.log (electrodomesticos.indexOf('Pava') ? "Producto encontrado" : "El producto buscado no existe.")

//Otra forma

mostrarElemento = electrodomesticos.indexOf("Televisor");
if (mostrarElemento == -1) {
    console.log("El producto buscado no existe");
} else (console.log("Producto encontrado"));
// el metodo .join()   unifica los elementos de un array   en un string 
let cadenaDeTexto = electrodomesticos.join(' ');
console.log (cadenaDeTexto);

//cantidad de caracteres enn al cadena de texcto, incluytendo los espacios
console.log (cadenaDeTexto.length);

//Replace                         A buscar  reemplazar    

console.log(cadenaDeTexto.replace('Heladera','Horno'))


//otra forma guardada en una variable y mostramso en consola la variable

let nuevaCadena = (cadenaDeTexto.replace ('Licuadora', 'Aspiradora'))

console.log (nuevaCadena)


//split
//                              no hay que poner nada para que separe en comas

//Trabajando con el .split()
//Enviado por: Mariano - Juan Pablo - Emir - Rodrigo
console.log('Trabajado con el .split()');
let arrayPalabras = cadenaDeTexto.split(" ");
//let cadenaComas = arrayPalabras.join(",");
console.log(`Nuevo array con palabras separadas por comas:  ${arrayPalabras}`);
console.log(arrayPalabras);
console.log(typeof(arrayPalabras[1]));