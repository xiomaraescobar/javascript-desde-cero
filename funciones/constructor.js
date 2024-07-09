/*let persona = {
    nombre: "Xiomara",
    apellido: "Escobar",
    edad: 44
}
    */
    //funcion constructora

    function Persona(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    const persona1 = new Persona("juan", "perez", 20);

    console.log(persona1);

    persona1.nacionalidad = "Colombiano"; // asi podemos agregar nuevas propiedades a nuestro objeto

    const persona2 = new Persona("Camila", "Garcia", 19);

    console.log(persona2);

    Persona.prototype.saludar = function () { //asi es como se puede crear una nueva propiedad en la funcion constructora que comparta en los objetos
      console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
    };
    persona1.saludar();
    persona2.saludar();
