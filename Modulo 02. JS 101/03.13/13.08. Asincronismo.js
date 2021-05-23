// Asincronismo
// aquel código donde cada instrucción NO espera a la anterior para ejecutarse

let alarma1 = () => 'Despertate, son las 09.10 am.';
let alarma2 = () => 'Son las 09.00, te quedan 10 minutos';

// console.log(alarma1());
// console.log(alarma2());

setTimeout(function(){
    console.log(alarma1());
}, 3000);   // 3 Segundos
// Con setTimeout entra en cola
console.log(alarma2());



