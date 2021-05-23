// Funciones que reciben como parametro un CallBack
//  map()
//  Retorna uno a uno los elementos y devuelve un array nuevo conlos mismos elementos
let numeros = [2,4,6];
let dobleDeLosNumeros = numeros.map(function(unNumero){
    return unNumero * 2;
})
console.log(dobleDeLosNumeros);

//  filter()
//  Filtra los elementos de un array en base a lalogica implementada
let edades = [10,18,19,21,13,4,6];
let mayores18 = edades.filter(function(unaEdad){
    return unaEdad >= 18;    
})
console.log(mayores18);

//  reduce()
//  Reduce a la más minima expresión el array. Retorna como un unico valor. Recibe dos parametros
let numeros2 = [5,7,16];
let resultado = numeros2.reduce(function(acumulador, numero){
    return acumulador + numero;    
})
console.log('acumulador: ' + resultado);

//  forEach()
//  Iterar sobre un array. Sin devolver nada.
let paises = ['Argentina', 'Colombia', 'Brasil'];
paises.forEach(function(unPais){
    console.log(unPais);
})

//  Ejemplos
let notas = [3,5,8,10,9,7,8,8];
let nuevasNotas = notas.map(function(unaNota){
    return unaNota * 10;
})
console.log(nuevasNotas);

let notasAprobadas = nuevasNotas.filter(function(unaNota){
    return unaNota >= 40;
})
console.log(notasAprobadas);


let notas2 = [3, 5];
let resultadoFinal = notas2.reduce(function(estado, numero){
    return estado + numero;
})
console.log('cantAprobadas: ' + resultadoFinal);

notas.forEach(function(valor, indice){
    console.log('El valor: ' + valor + '. Está en el índice : ' + indice);
})

