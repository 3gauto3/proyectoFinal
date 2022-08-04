let libro1 = {
    titulo: "el laberinto del fauno",
    autor: "guillermo del toro",
    genero: "terror",
}

let libro2 = {
    titulo: "la mala mujer",
    autor: "marc pastor",
    genero: "terror",
}

let libro3 = {
    titulo: "la pareja de a lado",
    autor: "shari lapena",
    genero: "policiaco",
}

let libro4 = {
    titulo: "carbono modificado",
    autor: "richard morgan",
    genero: "ficcion",
}

let libros = [libro1, libro2, libro3, libro4]

let librosTerror = libros.filter((el) => el.genero.includes('terror')) 
console.log(librosTerror)

let eliminarLibro = prompt("Ingresa el libro que deseas eliminar").toLowerCase();

let indice = libros.indexOf(eliminarLibro)

if(indice != -1){
libros.splice(indice,1);
alert(`El libro ${eliminarLibro} fue eliminado`)
} else {
alert("INCORRECTO")
}

console.log(libros) 
