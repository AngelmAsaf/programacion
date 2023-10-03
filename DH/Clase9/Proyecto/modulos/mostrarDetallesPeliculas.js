//Enviado por Mariano
function mostrarDetallePeliculas(peliculas) {
    console.log("Detalle de películas favoritas:\n");

    // Itera a través del array de películas y muestra la información de cada una
    for (let pelicula of peliculas) {
        console.log(`ID: ${pelicula.id}`);
        console.log(`Título: ${pelicula.title}`);
        console.log(`Rating: ${pelicula.rating}`);
        console.log(`Premios: ${pelicula.awards}`);
        console.log(`Duración: ${pelicula.length} minutos`);
        console.log(`Precio: $${pelicula.price}`);
        console.log(`Género: ${pelicula.genre}`);
        console.log("\n-----------------------\n");
    }
}

module.exports = mostrarDetallePeliculas;