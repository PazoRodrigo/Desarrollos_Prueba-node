//  For In  - Opera sobre objetos literales
let persona = {
    nombre: 'Rodrigo Pazo',
    edad: 58,
    profeson: 'Analista'
}
for (let caracteristica in persona) {
    console.log(caracteristica);
}
for (let caracteristica in persona) {
    console.log(persona[caracteristica]);
}
for (let caracteristica in persona) {
    console.log(caracteristica + ': ' + persona[caracteristica]);
}

//  For Off  - Opera sobre arrays
let series = ['GOT', 'Breaking Bad'];
for (const iterator of series) {
    console.log(iterator);
}

let notas = [7,6,10,6,3,2];
for (let i = 0; i < notas.length; i++) {
    console.log('Hola ' + i)
}



