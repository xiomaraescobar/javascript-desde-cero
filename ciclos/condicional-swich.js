//sintaxis del caso switch

/*switch(expresion) {
    case valor1:
        //codigo a ejecutar
        break;
    case valor2:
        //codigo a ejecutar
        break;
    case valor3:
         //codigo a ejecutar
        break
    case valor4:
        //codigo a ejecutar
        break     
}*/

let expr ="Papayas"

switch(expr) {
    case "Naranjas":
        console.log("Las naranjas cuestan $20 el kilo")
        break;
    case "Manzanas":
        console.log("Las naranjas cuestan $43 el kilo")
        break;
    case "Platanos":
        console.log("Las naranjas cuestan $30 el kilo")
        break;
    case "Mangos":
    case "Papayas":
        console.log("Los mangos y las Papayas cuestan a $25 el kilo")
        break;
        default:
            console.log(`Lo siento, no contamos con ${expr}`);
}
console.log("¿Hay algo más que desees?");