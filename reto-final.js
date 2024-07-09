/*requerimiento del reto
 1.el usuario debe poderingresar su usuario y contraseña.
 2.el sistema debe ser capaz de validar si el usuario y contraseña ingresados
 existen en la base de datos.
 3. si el usuario y contraseña son correctos, el sistema debe mostrrar un mensaje de bienvenida y mostrar
 el timeline del usuario
 4. si el usuario y contraseña son incorrectos, el sistema debe mostrar
 un mensaje de error y no mostrar ningun timeline.*/


const usersDatabase = [
    {
        username:"andres",password:"123",
    },
    {
        username:"carolina",
        password:"456",
    },
    {
        username:"mariana",
        password:"789",
    },
];

const usersTimeline = [
    {
      username: "Estefany",
      timeline: "Me encata Javascript!",
    },
    {
      username: "Oscar",
      timeline: "Bebeloper es lo mejor!",
    },
    {
      username: "Mariana",
      timeline: "A mi me gusta mÃ¡s el cafÃ© que el tÃ©",
    },
    {
      username: "Andres",
      timeline: "Yo hoy no quiero trabajar",
    },
  ];
  


const username = prompt("Cuál es tu usuario?");
const password = prompt("Cuál es tu contrasena?");

function usuarioExistente(username, password) {
    for (let i = 0; i < usersDatabase.length; i) {
        if(
            usersDatabase[i].username === username &&
            usersDatabase[i].password === password
        ) {
          return true;
        }
    }
    return false;
}
function signIn(username, password) {
    if(usuarioExistente(username, password)) {
        alert(`Bienvenido a tu cuenta ${username}`);
        console.log(usersTimeline);
    } else {
        alert("Ups, usuario o contraseña incorrecto")
    }
}

signIn(username,password);
