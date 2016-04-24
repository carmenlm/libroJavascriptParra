/**
 * Created by Carmen on 19/04/2016.
 */

/**
 * funcion que valida un campo input que sea el formato dni
 * con patron expresion regular
 * @returns los numero del dni del input, siempre que sea valido
 */
function validarCampos() {

    // capturo el input del formulario
    var entrada = document.getElementById('inputDNI').value;

    //defino una expresion regular
    var patron = new RegExp("\\d{8}[a-zA-z]");

    //si el patron coincide con el input limpio el div resultado
    if (patron.test(entrada)) {
        document.getElementById('resultado').innerHTML = "";
        return entrada.substring(0, 8);
    } else {
        document.getElementById('resultado').innerHTML = "El DNI " + entrada + " no tiene un formato valido";
        return "";
    }



}

/**
 * funcion que devuelve la letra acorde al numero del dni
 * @param numero -- paso los numero del dni del input
 * @returns {string} --devuelvo la letra obtenida
 */
function calcularLetra(numero) {

    //variables

    //saco la posicion de la letra conforme al numero del dni
    //el resto de la division del numero por 23
    var posicion = numero % 23;
    //string con las letras ordenadas segun la posicion del dni
    var letrasDNI = "TRWAGMYFPDXBNJZSQVHLCKET";

    //letra es la posicion que he sacado en el string
    var letra = letrasDNI.substr(posicion, 1);

    //devuelvo la letra
    return letra;

}

/**
 * funcion para validar el dni del input con el que deberia ser
 */
function validarDNI() {

    //dni obtenido del input
    var dniUsuario = document.getElementById('inputDNI').value;

    //dni calculado
    var dniCalculado = validarCampos(dniUsuario);

    //nodo donde muetro el resultado
    var mostrar = document.getElementById('resultado');

    //compruebo
    if (dniCalculado != "") {
        var letraUsuario = dniUsuario.substr(-1);
        var letraCalculada = calcularLetra(dniCalculado);

        if (letraUsuario.toUpperCase() == letraCalculada) {
            mostrar.innerHTML = "El dni es correcto";
        } else {
            mostrar.innerHTML = "El dni no es correcto";
        }

    }

}

function init() {
    console.log('Arranco');

    var botonValidar = document.getElementById('btnValidar');
    botonValidar.addEventListener('click', validarDNI);
}

window.onload = init;


