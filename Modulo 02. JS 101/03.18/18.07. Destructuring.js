//  Destructuring
//  Permite la extracción de datos de arrays u objetos literales. No altera el array de origen
//  De array
let colores = ['verde','negro','blanco','azul','amarillo','rojo'];
let [colorVerde, colorNegro, colorBlanco] = colores;
console.log(colorNegro); // negro
console.log(colorBlanco); // blanco

//  De objeto
let persona = {
    nombre: 'Rodrigo',
    edad: 44,
    profesion: 'Analista',
    seriesFavoritas: ['Lost', 'GOT']
}
let [edad, profesion] = persona;
console.log(edad); // 44
console.log(profesion); // Analista
