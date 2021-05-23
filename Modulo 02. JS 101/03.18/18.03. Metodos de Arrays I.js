//  indexOf()       - Comienza a buscar desde primera posición del array
//  Retorna el índice del dato buscado en un array, si no está retorna -1
let colores = ['verde','azul','rojo','negro', 'rojo'];
console.log(colores.indexOf('rojo'));
console.log(colores.indexOf('blanco'));

//  lastIndexOf()   - Comienza a buscar desde última posición del array
//  Retorna el índice del dato buscado en un array, si no está retorna -1
console.log(colores.lastIndexOf('rojo'));

//  join()      - unifica los valores de un array, separados por coma o cualquier caracter
let diasSemana = ['Lunes','Martes','Miércoles','Jueves','Viernes'];
console.log(diasSemana);
console.log(diasSemana.join());
console.log(diasSemana.join(' - '));

// Ejemplo
let notas = [3, 5, 8, 10, 9, 7, 8, 8];
let posiciónDelOcho = notas.indexOf(8);
console.log(posiciónDelOcho);
posiciónDelOcho = notas.lastIndexOf(8);
console.log(posiciónDelOcho);

console.log(notas.join(', '));