/*
for of arrays, string [algo]

for (variable of objeto) {
codigo
}
*/
let canasta = ["manzana", "pera", "naranja","uva"]; //Se declara variable (canasta) utilizando la palabra clave let.
//Se le asigna un array con cuatro elementos: "manzana", "pera", "naranja" y "uva".

for (fruta of canasta) { //Se inicia un bucle for...of, que se utiliza para recorrer elementos de una colección, en este caso, el array canasta.
    //La variable fruta se declara para representar cada elemento del array en cada iteración del bucle

    console.log(fruta);  //Dentro del bucle, se utiliza console.log para imprimir en la consola cada elemento del array representado por la variable fruta.

}
