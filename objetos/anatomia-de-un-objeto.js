/*

estructura de datos

key / value 

objeto {
  propiedad: valor, 
  propiedad: valor, 
  propiedad: valor 
  Metodos
}

*/

const persona = {
    nombre: "Maria",
    edad: 20,
    direccion: {
      calle: "calle 8",
      ciudad: "Medellin",
    },
    saludar() {
      console.log(`hola, mi nombre es ${persona.nombre}`);
    },
  };
  
  console.log(persona);
  
  console.log(persona.nombre);
  
  persona.saludar();
  
  persona.telefono = "33315012652";
  
  console.log(persona.telefono);
  
  persona.despedir = () => {
    console.log("Adios");
  };
  
  persona.despedir();
  
  console.log(persona.direccion.calle);
  
  delete persona.telefono;
  
  delete persona.despedir();