//enlace implicito -> implicit binding
const house = {// aqui tenemos un objeto que es house
    dogName:'sayi', // ese objeto tiene unas caracteristicas que son el nombre del perro y un saludo
    dogGreeting: function () {//aqui queremos acceder a propiedades que sean de este mismo objeto el this es fundamental precisamente porque el this es alucibo al objeto al cual esta vinculado esta funcion
        console.log(`Hi, I'm ${this.dogName}`)
    }
}
house.dogGreeting()

//Enlace explícito . explicit bindig

function dogGreeting () {
    console.log(`Hi, I'm ${this.dogName}`)
}

const newHouse = {
    dogName: 'maxy',
    
}

dogGreeting.call(newHouse)


function newDogGreeting (owner, address) {
    console.log(`Hi, I'm ${this.dogName} and I live whith ${owner} on ${address}`)
}
const owner = 'Cami'
const address = 'calle 8'
newDogGreeting.call(newHouse, owner, address) //aqui lo que hicimos fue utilizar el metodo call para vincular una funcion con un objeto y enviarle diferentes parametros si asi lo queremos