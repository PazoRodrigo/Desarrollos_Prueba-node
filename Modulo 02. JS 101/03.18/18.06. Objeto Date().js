//  Objeto Date()
//  Se crea primero la instancia
let FechaActual = new Date()
console.log(FechaActual);

// getDay(). Numero de día en la semana. Domingo es 0.
console.log(FechaActual.getDay());
// getDate(). Numero de día del mes en curso
console.log(FechaActual.getDate());
// getMonth(). Numero de mes en curso. Enero es 0.
console.log(FechaActual.getMonth());
// getFullYear(). Numero de año Completo
console.log(FechaActual.getFullYear());
// getFullYear(). Numero de año Completo
let miCumple = new Date(1976,8,26);
console.log(miCumple);

console.log(miCumple.toUTCString());
console.log(FechaActual.toUTCString());




