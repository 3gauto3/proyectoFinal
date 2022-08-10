class libro {
    constructor(titulo, autor, precio) {
        this.titulo = titulo;
        this.autor = autor;
    }
}

const libro1 = new libro ("el laberinto del faunio", "guillermo del toro",);
const libro2 = new libro ("los altisimos", "hugo correa",);
const libro3 = new libro ("la novia gitana", "caarmen corre",);

let biblioteca = [libro1, libro2, libro3]


function mostrarLibros() {
    let mensaje = ""

    for (let i=0; i<biblioteca.length; i=i+1) { //i=0, 1 y 2
        mensaje += `título: ${i+1} ${biblioteca[i].titulo}, autor: ${biblioteca[i].autor}.\n\n`
    }
    
    alert(mensaje)
}

mostrarLibros()

let respuestaBorrar = prompt("¿Quieres borrar un libro?").toLocaleLowerCase()

if (respuestaBorrar == "si") {
    let respuestaLibroBorrar = prompt("Seleccioná el libro a eliminar")
    let libroElegido = biblioteca.find( (elemento) => elemento.titulo == respuestaLibroBorrar) // Obtiene el objeto libro que se quiere borrar
    let indexLibroElegido = biblioteca.indexOf(libroElegido) // Obtiene el índice del libro en el array biblioteca
    biblioteca.splice(indexLibroElegido, 1)

    mostrarLibros()
    
} else {
    alert("Incorrecto")
 }