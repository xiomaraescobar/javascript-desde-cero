const address = 'calle 8'
const owner = 'camila'
function dogGreeting (owner, address) {
    console.log(`Hi, I'm ${this.dogName} and I live with ${owner} on ${address}`)
}

const newHouse = {
    dogName: 'sayi'
}

dogGreeting.call(newHouse, owner, address)

const necessaryValues = [owner, address]
dogGreeting.apply(newHouse, necessaryValues)

const bindinWithBind = dogGreeting.bind(newHouse, owner, address)
bindinWithBind()