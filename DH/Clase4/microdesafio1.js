// Microdesafio 1

let perfil = "Administrador";

switch (perfil) {
    case " ":
        console.log("Debe especificar el perfil del usuario")
        break;

    case "Administrador" || "ADMINISTRADOR" || "administrador":
        console.log("Usted tiene todos los privilegios de uso del sistema");
        break;

    case "Asistente" || "ASISTENTE" || "asistente":
        console.log("Usted sólo tiene permisos de registrar, modificar y consultar datos");
        break;

    case "Invitado" || "INVITADO" || "invitado":
        console.log("Usted sólo tiene permisos de consultar datos.")
        break;

    default:
        console.log("Debe especificar un perfil válido");
        break;
}

//Uppercase 

let upperPerfil = perfil.toUpperCase();  //Esta linea me convierte el contenido de la variable perfil en MAYUSCULA.
  
if (upperPerfil === " ") {   //Punto A
    console.log("Debe especificar el perfil del usuario.")
}
else if (upperPerfil === "ADMINISTRADOR") {  //Punto B
    console.log("Usted tiene todos los privilegios de uso del sistema");
}
else if (upperPerfil === "ASISTENTE") { //Punto C
    console.log("Usted sólo tiene permisos de registrar, modificar y consultar datos.")
}
else if (upperPerfil === "INVITADO") { //Punto D
    console.log("Usted sólo tiene permisos de consultar datos.")
}
else { //punto E
    console.log("Debe especificar un perfil válido.")
}