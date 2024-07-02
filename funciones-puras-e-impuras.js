//funciones puras

//side effects ->efectos secundarios
//1. modificar variables globales
//2. modificar parametros
//3. solicitudes http
//4. imprimir mensajes en pantalla o consola
//5. manipulacion del DOM
//6. obtener la hora actual

// funcion pura

function sum (a,b) {
    return a + b
}

//funciones impuras
//el siguiente ejemplo  tiene un efecto secundario

function sum (a,b) {
    console.log('a: ', a) //4. imprimir mensajes en pantalla o consola
    return a + b
}

//otro ejemplo de funciones impuras es modificar variables globales

let total = 0

function sumWithSideEffect () {
    total += a
    return total
}
// funcion pura
function square(x) {
    return x * x
}

function addTen (y) {
    return y + 10
}
//aqui tenemos dos funciones puras
const number = 5
const finalResult = addTen(square(number))
console.log(finalResult)