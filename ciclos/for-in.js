/*

for in ---> objetos
propiedades = valor

array, string

item

for (variable in objeto) {
codigo

}*/

const listaDeCompras = {
    manzana: 5,
    pera: 3,
    naranja: 2,
    uva: 1,
};

for (fruta in listaDeCompras) { //aqui se imprime la lista
    console.log(fruta);
}

for (fruta in listaDeCompras) {
    console.log(`${fruta} : ${listaDeCompras[fruta]}`); //aqui se imprime la propiedad y su valor
}

for (fruta of listaDeCompras) { //sale un error porque  la lista de compras no es iterable
    console.log(fruta);
}
