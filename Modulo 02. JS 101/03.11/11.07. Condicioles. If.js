//  Ternario:   condicion : expresión para el true: expresión para el false;
let fruta = 'manzanas';
let resultado = fruta == 'manzanas' ? 'Buenísimo, me gustan las manzanas': 'UFA, quería manzanas';  
console.log(resultado);
//  switch:   
let semaforo = 'Verde';
switch (semaforo) {
    case 'Verde':
        console.log('Puede cruzar');        
        break;
    case 'Amarillo':
        console.log('Atención');        
        break;
    case 'Rojo':
        console.log('No cruces, hay que esperar');        
        break;
    default:
        console.log('Sin luz encendida');        
        break;
}  