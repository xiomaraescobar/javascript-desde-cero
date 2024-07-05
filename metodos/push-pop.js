//methods that modify the original array (mutabilidad) metodos que modifican el array original

//push //añade elementos al array

const countries = ['Usa', 'Canada', 'UK']
const newCountries = countries.push('Germany', 'Australia')

console.log(countries)
console.log(newCountries)

//pop // elimina el ultimo elemento del array y tambien devuelve el valor

const removedCountry =countries.pop()

console.log(countries)
console.log(removedCountry)


//exercise: Managing a stack // ejercicio stack de libros

let bookCart = []

const ADD_TO_CART_ACTION ='addCart'
const REMOVE_FROM_CART_ACTION = 'removeFromCart'
const VIEW_CART_ACTION = 'viewCart'

function viewCart () {
  console.log('Current Cart of Books: ', bookCart)
}
function performCartActions (action, newBook) {
    switch (action) {
        case ADD_TO_CART_ACTION:
          bookCart.push(newBook)
         break;
       case REMOVE_FROM_CART_ACTION:
        if (bookCart.length === 0) {
          console.log('Cart is empty. No books to remove.')
        } else {
          const removedBook = bookCart.pop()
          console.log(`Removed book from the cart: ${removedBook}`)
        }
       break;
      case VIEW_CART_ACTION:
        viewCart()
       break;
      default:
        console.log('Invalid action. Please choose a vaid option.')
    }
}

performCartActions(ADD_TO_CART_ACTION, 'Harry potter y la piedra filosofal')
performCartActions(VIEW_CART_ACTION)
performCartActions(ADD_TO_CART_ACTION, 'Cien años de soledad')
performCartActions(VIEW_CART_ACTION)
performCartActions(REMOVE_FROM_CART_ACTION)