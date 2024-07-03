//capacidades que tienen las funciones al igual que otros objetos.

// 1. pasar funciones como argumentos -> callback
/*
function a ()  {}
function b (a) {}
b(a)

// Retornar funciones

function a () {
  function b () {}
  return b
}

//asignar funciones a variables -> expresion de funcion

const a = function() {}

//tener propiedades y métodos

function a () {}
const obj = {}
a.call(obj)

//anidar funciones -> nested functions

function a () {
    function b () {
        function c () {

        }
        c()
    }
    b()
}
a()

//es posible almacenar funciones en objetos?
*/
const rocket = {
    name: 'Falcon 9',
    launchMessage: function  launchMessage () {
        console.log('🔥')
    }
}

rocket.launchMessage()