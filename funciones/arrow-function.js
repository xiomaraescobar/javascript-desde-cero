//function traditional

const greeting = function (name) { //It does not have the word function because it does not need it
    
    return `Hi, ${name}`
}
//arrow function - explicit return

const newGreeting = (name) => {  
    return `Hi, ${name}`
}

//arrow function - implicit return

const newGreetingImplicit = name => `Hi, ${name}` // You can remove the parentheses because it has only 1 parameter (name)

const newGreetingImplicitWithTwoParameters = (name, lastName) => `Hi, I'm ${name} ${lastName}`//It has parentheses because it has several parameters

// Lexical Binding

const finctionalCharacter = {
    name: 'Uncle Ben',
    messageWithTraditionalFunction: function (message) {
      console.log(`${this.name} says: ${message}`)
    },
    messageWithArrowFunction: (message) => {
      console.log(`${this.name} says: ${message}`)
    }
  }
  
  finctionalCharacter.messageWithTraditionalFunction('With great power comes great responsability.')
  finctionalCharacter.messageWithArrowFunction('Beware of Doctor Octopus.')