/**
 * Created by carmen on 25/04/16.
 */


/**
 * funcion para que mueva la ventana de sitio y evitar que el usuario click en si
 */
function esquivarUsuario() {

    //obtenemos la hora actual
    var ahora = new Date();

    //calculamos las nuevas coordenadas
    var x = ahora.getMilliseconds();
    var y = x / 2;

    //desplazamos la ventana
    // window.moveTo(x, y);

    //movemos el div
    var ventana = document.getElementById('myModal');
    ventana.style.position = "absolute";
    ventana.style.left = x + "px";
    ventana.style.top = y + "px";


}

/**
 * funcion que muestra un mensaje cuando se pulsa no
 */
function mostrarMensaje() {
    //mostramos un mensaje
    alert("¡Nos sorprende tu respuesta!");
    //cerramos la ventana
    window.close();
}


function init() {
    console.log('arranco');

    var btnSi = document.getElementById('btnSi');
    var btnNo = document.getElementById('btnNo');

    btnSi.addEventListener('mouseover', esquivarUsuario);
    btnNo.addEventListener('click', mostrarMensaje);

}

window.onload = init;


