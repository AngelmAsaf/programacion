//Callbacks
function uno(dos){
    setTimeout(() => {
        console.log('Se ejecuto la función uno'); 
        dos();
    }, 5000);
}

function dos(){
    console.log('Se ejecuto la función dos');
}

uno(dos);

//El parametro podemos poner cualquier cosa

function uno(angel){
    setTimeout(() => {
        console.log('Se ejecuto la función uno'); 
        angel();
    }, 7000);
}

function dos(){
    console.log('Se ejecuto la función dos');
}

uno(dos);