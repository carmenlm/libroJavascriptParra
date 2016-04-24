/**
 * Created by Carmen on 19/04/2016.
 */

//variables globales
var temporizador;

/**
 * Funcion que desplaza el texto
 */
function desplazarTexto() {

    //capturo el texto de index.html
    var texto = document.getElementById('capaTexto').textContent;


    //traslado el primer caracter al final del texto
    texto = texto.substring(1, texto.length) + texto.substring(0, 1);


    //sobreescribo el texto del div cn el nuevo texto
    document.getElementById('capaTexto').innerHTML = texto;

}

/**
 * funcion que inicia el desplazamiento automaticamente
 */
function arrancarRotacion() {
    //fijamos un temporizador
    temporizador = setInterval("desplazarTexto()", 150);
}
/**
 *funcion para detener el desplazamiento
 */
function detenerRotacion() {
    clearInterval(temporizador);
}

/**
 * manejador inicial de la aplicacion
 */
function init() {

    //capturo el div del texto
    var nodoTexto = document.getElementById('capaTexto');

    //evento al pasar el raton por encima
    nodoTexto.addEventListener('mouseover', arrancarRotacion);

    //evento al quitar el raton de encima
    nodoTexto.addEventListener('mouseout', detenerRotacion);


}


window.onload = init;
