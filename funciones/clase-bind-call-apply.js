const address = 'calle 8';
const owner = 'Camila';

function dogGreeting (owner, address) {
    console.log(`Hi, I'm ${this.dogName} and I live with ${owner} on ${address}`)
}

const newHouse = {
    dogName: 'sayi'
};


// Usando call para establecer el contexto de 'this' a 'newHouse'
dogGreeting.call(newHouse, owner, address);


// Usando apply para establecer el contexto de 'this' a 'newHouse' con una lista de argumentos
const necessaryValues = [owner, address]
dogGreeting.apply(newHouse, necessaryValues);



const bindinWithBind = dogGreeting.bind(newHouse, owner, address);
bindinWithBind();