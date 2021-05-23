//  push
//  Agrega uno al final
let notas = [3, 5, 10, 9, 7, 8, 8, 8];
notas.push(1);
notas.push(2);
notas.push(4);
console.log(notas);


//  pop
//  Quita el elemento del final
let elUltimo = notas.pop();
console.log(notas);
console.log('elUltimo: ' + elUltimo);


//  shift
//  //  Quita el elemento del comienzo
let notas2 = [3, 5, 10, 9, 7, 8, 8, 8];
notas2.shift();
notas2.shift();
console.log(notas2);


//  unshift
//  Quita el elemento del comienzo
notas2 = [3, 5, 10, 9, 7, 8, 8, 8];
notas2.unshift(1);
notas2.unshift(2);
console.log(notas2);
