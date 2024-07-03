function calculateDiscountedPrice (price, discountPercentage) { //en est linea tenemos palabra clave(function) nombre (calculateDiscountedPrice) los parametros (price,discountedPercentage) se abren llaves para el cuerpo
    const discount = (price * discountPercentage) / 100 //aqui se crea el descuento se multiplica el precio por el descuento del porcentaje dividido 100
    const priceWithDiscount = price - discount //aqui se crea una constante  precio con descuento que seria el precio - el descuento

    return priceWithDiscount // aqui seria el valor a retornar que en esta ocasion será el precio con el descuento. todo esto va dentro de las llaves o sea el cuerpo
}

const originalPrice = 100 //aqui se le esta dando un precio
const discountPercentage = 20 // aqui se le esta dando el descuento que en este caso es del 20
const finalPrice = calculateDiscountedPrice(originalPrice, discountPercentage) //aqui se le dice el valor final sera igual a la funcion(calculateDiscountedPrice) y se llaman a los argumentos que en este caso son los valores reales(originalPrice, discountedPercentaage)

console.log('Original price: $' + originalPrice)//aqui se imprime el precio original y se le concatena con el valor original(original price: $ + originalPrice)
console.log('Discount: ' +discountPercentage + '%')//aqui va el descuento y se le concatena el descuento porcentaje y se le concatena el valor del porcentaje
console.log('price with discount: $' + finalPrice)// se verifica el precio final