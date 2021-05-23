// Estructura json genérica

let json1 = {
    "propiedad1" : "valor",
    "propiedad2" : "valor"
};
console.log(json1);

// Ejemplo de estructura json simple

let json2 = {
    "id": 1,
    "nombre": "Luke",
    "apellido": "Skywalker",
    "edad": 19
};
console.log(json2);

// Ejemplo de estructura json más avanzada

let json3 = {
    "provincias": [
        {
            "nombre": "Santiago del Estero",
            "id": "86",
            "centroide": {
                "lat": -27.782412,
                "lon": -63.252387
            }
        }
    ],
    "cantidad": 1,
    "total": 1,
    "inicio": 0,
    "parametros": { 
        "a": 1,
        "b": 2
     }
}
console.log(json3);

// Array de elementos en formato json
let json4 = [
    {
        "id": 1,
        "nombre": "Luke",
        "apellido": "Skywalker",
        "edad": 19,
        "password": "$2y$10$Hd35v8se0MIYhdzyeiCXuej8T5j6yNmgWWJSWJowLgelMFvSiqevq"
    },
    {
        "id": 2,
        "nombre": "Leia",
        "apellido": "Organa",
        "edad": 19,
        "password": "$2y$10$pMuPiJ3dOvFw4Jzbl4cpJu59QggCNdterkHjdYn2.ThIPtVKWuiHy"
    }
] 
console.log(json4);

// JSON.parse(datosString)  . Recibe un dato string en formato JSON y lo devuelve en forma de array u objeto literal
let datosEnJson = {"propiedad1" : "valor","propiedad2" : "valor"};
console.log(datosEnJson);
let DatosConveridosString = JSON.stringify(datosEnJson);
console.log(DatosConveridosString);
let datosEnJsonOriginal = JSON.parse(DatosConveridosString);
console.log(datosEnJsonOriginal);

// JSON.parse(stringify)    . Recibe un array u objeto literal y lo devuelve en forma de string en formato JSON para que sea más simple para otros sistemas
let datosEnJson2 = ['Maxi', 'Diego', 'Germán', 'Chino'];;       // Es un array
console.log(datosEnJson2);
let DatosConveridosString2 = JSON.stringify(datosEnJson2);       // Es un string
console.log(DatosConveridosString2);
let datosEnJsonOriginal2 = JSON.parse(DatosConveridosString2);  // Es un array
console.log(datosEnJsonOriginal2);


// Ejemplo 1
let amigos = ['Maxi', 'Diego', 'Germán', 'Chino'];  // Es un array
console.log (amigos);
let amigosJSON = JSON.stringify(amigos);            // Es un string
console.log (amigosJSON);
let amigosOriginal = JSON.parse(amigosJSON);        // Es un array
console.log (amigosOriginal);

// Ejemplo 2
let persona = {
    "Nombre" :  "Rodrigo",
    "Pazo" :    "Pazo",
    "Ciudad" : "Castelar"
}
console.log(persona);
let personaJSON = JSON.stringify(persona);  
console.log(personaJSON);
let personaOriginal = JSON.parse(personaJSON);
console.log(persona);
