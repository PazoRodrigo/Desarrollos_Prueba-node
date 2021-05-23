let curso = {
    cantidadAlumnos: 32,
    docente: 'Pazo, Rodrigo',
    horario: '8:30 a 12 hs',
    notificaciones: function () {
        return 'El horario de tu cominsión es: ' + this.horario
    } 
}
console.log(curso);
console.log(curso.cantidadAlumnos);
console.log(curso.notificaciones());

let miPais = {
    nombre: 'Argentina',
    poblecion: 40092000,
    capital: 'Ciudad de Buenos Aires',
    decirNacionalidad: function () {
        return 'Yo nací en ' + this.nombre; 
    }
}

// Funciones constructoras
function Curso(cantidadAlumnos, docente, horario){
    this.cantidadAlumnos = cantidadAlumnos,
    this.docente = docente,
    this.horario = horario
}

let curso1 = new Curso(40, 'Javi y Lando', '18:30 a 22hs.');
let curso2 = new Curso(32, 'Ale y Kenyi', '14 a 12:30hs.');
console.log(curso1);
console.log(curso2);