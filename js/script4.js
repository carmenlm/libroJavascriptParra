/**
 * Created by Carmen on 20/04/2016.
 */
//constante con el maximo caracteres
var LONG_MAX = 160;
/**
 * funcion que calcula cuantos caracteres quedan
 * @param texto -- input textarea
 * @returns {number} -- devuelve numero de caracteres
 */
function calcularRestante(texto) {

    var restante = LONG_MAX - texto.length;

    return restante;

}
/**
 * funcion que cambia el input donde indica cuandtos caracteres quedan
 */
function mostrarRestante() {

    var input = document.getElementById('quedan');
    var texto = document.getElementById('texto').value;

    var r = calcularRestante(texto);
    //si tengo caracteres disponible
    if (r >= 0) {
        // sigo llamando a r
        input.value = r;
        //sino
    } else if (r < 0) {
        // lo pongo a 0
        //aqui solo dejo que se escriban 160
        var cadena = texto.value.substr(0, LONG_MAX);
        texto.value = cadena;
        //pongo el restante a 0;
        r = 0;
        input.value = r;

        //

    }

}

function init() {
    // body...

    console.log('arranco');
    var escribir = document.getElementById('texto');

    escribir.addEventListener('keyup', mostrarRestante, false);


}

window.onload = init;
