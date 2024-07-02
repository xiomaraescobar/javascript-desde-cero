//una forma de escribir booleanos anteponiendo la palabra (is) antes de la variable  como si fuera pregunta y otro es el (has) significa tener.
const isActive = true;
const hasPermisson = false;

//conversion implicita(esto lo hace js no nosotros)
const result = 5 > 3;
console.log(result);

const name = 'platzi';
console.log(!!name);

//conversion explicita (nosotros la podemos hacer)
const value = 0;
const explicitBoolean = Boolean(value);
console.log(explicitBoolean);
