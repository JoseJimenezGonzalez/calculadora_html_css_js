//Para uso estricto, implementa funcionalidades
//Se hace para que se programe con buenas practicas
"use strict"
/*
Este código utiliza addEventListener para agregar el evento mouseover al elemento con id 'miH1' cuando el DOM se ha cargado completamente. 
La función cambiarEstilo se ejecutará cuando el ratón pase por encima del elemento h1, cambiando el color y el texto del mismo. 
Este enfoque ofrece mayor flexibilidad y es más consistente con las prácticas modernas de JavaScript.
*/
//Parametros que nos encontramos mas abajo en el codigo:
/*
'DOMContentLoaded' es el nombre del evento que estamos escuchando. Este evento se dispara cuando el documento HTML ha sido completamente 
cargado y parseado, lo que significa que todos los elementos del DOM están disponibles para ser manipulados.
*/
/*
function() { ... } es la función que se ejecutará cuando el evento 'DOMContentLoaded' ocurra. En este caso, la función se utiliza
para contener el resto del código que quieres ejecutar cuando el DOM esté completamente cargado.
*/
document.addEventListener('DOMContentLoaded', function() {
    // Obtener el elemento h1 por su id
    const miH1 = document.getElementById('miH1');

    // Asignar la función cambiarEstilo al evento mouseover
    miH1.addEventListener('mouseover', cambiarEstilo);

    function cambiarEstilo() {
        // Cambiar el color del h1 cuando el ratón pasa por encima
        miH1.style.color = 'red';

        // Cambiar el texto del h1 cuando el ratón pasa por encima
        miH1.innerText = 'Nuevo texto cuando pasas el ratón';
    }
});
