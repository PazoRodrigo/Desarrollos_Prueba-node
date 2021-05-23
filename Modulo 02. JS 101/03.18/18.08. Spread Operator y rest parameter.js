//  Spread operator. Operador de Propagacion
//  En arrays
let frutas1 = ['fru1','fru2','fru3'];
let frutas2 = ['fru4','fru5','fru6'];

let todasBIEN = [...frutas1, ...frutas2];
let todasMAL = [frutas1, frutas2];
console.log(todasBIEN);
console.log(todasMAL);

//  En Objetos
let cursada = {
    curso: 'FullStack',
    turno: 'Mañana',
    sede: 'Belgrano'
}
let alumno1 = {
    nombre: 'nom1',
    email: 'email1',
    ...cursada
}
let alumno2 = {
    nombre: 'nom2',
    email: 'email2',
    ...cursada
}
console.log(alumno1);

//  En Funcion
function conVariosparametros (...parametros){
    return 1;
}
conVariosparametros ('a');
conVariosparametros ('a','b');
conVariosparametros ('a','b','c');

function limpiarEspacios(...palabras){
    for (let i = 0; i < palabras.length; i++) {
        palabras[i] = palabras[i].trim();
    }
    return palabras;
}

let resultado1 = limpiarEspacios('hola   ','que    ','tal');
let resultado2 = limpiarEspacios('hola    ','    mundo   ');
console.log(resultado1);
console.log(resultado2);
