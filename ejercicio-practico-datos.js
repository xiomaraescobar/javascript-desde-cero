// social media profile

// 1. user information
const username = 'La mujer maravilla';
const fullName = 'Marcela E';
const age = 40;
const isStudent = true;

// 2. address
const address = {
    street: '123 Main Street',
    city: 'Techville',
    state: 'Codingland',
    zipCode: 9876
}

// 3. hobbies
const hobbies = ['stady','walk', 'read'];

//4.generating personalized bio
const personalizedBio = `Hi, I'm ${fullName}.
I'm ${age} years old.
I live in ${address.city}.
I love ${hobbies.join(', ')}.
follow me for adventures!`

// 5. print the user profile and bio
console.log(personalizedBio);

