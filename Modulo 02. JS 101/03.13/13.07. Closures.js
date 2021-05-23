/*
    function padre() {
        function hija() {
            alert('Mostrar');
        }
        return hija();
    }

    function padre(numero1) {
        function hija() {
            alert(numero1);
        }
        return hija();
    }

*/

function iniciar() {
    var nombreClase = "JS 101";
    function mostrarClase() {
        console.log(nombreClase);
    }
    mostrarClase();
}

iniciar();


