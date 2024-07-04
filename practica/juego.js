const numeroSecreto = Math.floor(Math.random() *10 + 1); //Math.floor contruye un numero aleatorio Math.random entre cierto rango

const numeroJugador = parseInt (
    prompt("Adivina el número secreto entre el 1 al 10")
);

console.log(`Este es el numero con el que estas jugando ${numeroJugador}`);

if (numeroJugador === numeroSecreto) {
    console.log("Felicidades, adivinaste el numero secreto!")
} else if (numeroJugador < numeroSecreto) {
    console.log("Eel numero es demaciado bajo, intenta de nuevo")
} else {
     console.log("El numero es muy alto intenta de nuevo")
};