// Función convencional

function sumar(n1, n2) {
    return n1 + n2
}

// Arrow function

let sumarArrow = (n1, n2) => { n1 + n2 }

// Ejemplos

let laMitad = numero => numero / 2;
console.log(laMitad(8));

let Dividir = (numeroA, numeroB) => numeroA / numeroB;
console.log(Dividir(20, 4));

let TengoQueTrabajar = dia => {
    if (dia == 'Sábado' || dia == 'Domingo'){
        return 'No se trabaja';
    }else{
        return 'Si Rodrigo trabaja';
    }
}
console.log(TengoQueTrabajar('Sábado'));
console.log(TengoQueTrabajar('Lunes'));
