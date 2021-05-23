//  Función que se pasa como parámetro de otra función

//  Anónima ... 
//  function FuncionPadreAnonima(function(){
//     // sentancias de codigo
//  });

// function FuncionComoParametro(){
//     return 'Soy un callback';
// }

// function FuncionPadreNoAnonima(FunctionComoParametro){

// };
// console.log(FuncionPadreNoAnonima());


// this file is read only, you cannot write it
function doble(num)
{
  return num*2;
}

function triple(num)
{
return num*3;
}

function apply(num, operacion)
    {return operacion(num);
}

function sumar(numero1, numero2){
  return numero1 + numero2;
}
function restar(numero1, numero2){
  return numero1 - numero2;
}
function multiplicar(numero1, numero2){
  return numero1 * numero2;
}
function dividir(numero1, numero2){
  return numero1 / numero2;
}
function calculadora(numero1, numero2, operacion){
  return (operacion(numero1, numero2));
}

console.log(calculadora(2,1, multiplicar));

let suma = (numero1, numero2) => numero1 + numero2;
let resta = (numero1, numero2) => numero1 - numero2;
let multiplica = (numero1, numero2) => numero1 * numero2;
let divide = (numero1, numero2) => numero1 / numero2;

console.log(calculadora(2,1, multiplica));

let agregarHttp = (palabra) => 'http://' + palabra;
let largoString = (palabra) => palabra.length;

function procesar(lista, operacion){
  let result = [];
  for (let i = 0; i < lista.length; i++) {
    result.push(operacion(lista[i]))
  }
  return result;
}

let urlCompletas = procesar(["www.google.com","www.yahoo.com"],agregarHttp)
console.log(urlCompletas); // imprime [ 'http://www.google.com', 'http://www.yahoo.com' ]
let largoDeElmentos = procesar(["www.google.com","www.yahoo.com"],largoString)
console.log(largoDeElmentos); // imprime [ 14, 13 ]


