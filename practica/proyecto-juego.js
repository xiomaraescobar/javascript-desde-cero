/*
juguemos a adivinar la palabra  oculta.

el ususario tiene 3 intentos para adivinar la palabra oculta.

requerimientos:

-El juego debe tener una palabra oculta.
-El juego puede dar 1 pista de la palabra.
-El usuario debe ingresar una suposicion.
-El juego debe verificar si la suposicion del usuario es correcta.
-El juego debe tener un numero de intentos limitados.
-El juego debe terminar cuando el usuario adivine la palabra o se quede sin intentos.
*/

let palabraOculta = "php";
let intentos = 3;

function verificarSuposicion(suposicion, palabraOculta) {
    if (suposicion.toLowerCase() === palabraOculta) {
        return true;
    }
    return false;
}

function jugarAdivinaLaPalabra() {
    alert("Bienvenido a jugar adivina la palbra oculta");
    alert("Tienes 3 intentos para adivinar la palabra");
    alert("-pista- la palabra oculta es un lenguaje de programación");

    while (intentos > 0) {
        let suposicion = prompt("Adivina la palabra: ");

        if(verificarSuposicion(suposicion, palabraOculta)) {
            alert("¡Correcto! Has adivinado la palabra.")
            break;
        }   else {
            intentos--;
            if(intentos > 0) {
                alert(`Incorrecto, Aun tienes ${intentos} intento restantes`);
            } else {
              alert(`Agotaste tus intentos, la palabra oculta era ${palabraOculta}`);
            }
            
        }
    }
}

jugarAdivinaLaPalabra()