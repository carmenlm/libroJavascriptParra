/**
 * Created by carmen on 25/04/16.
 */


/**
 * funcion que comprueba que has introducido una contraseña
 */
function comprobarAcceso() {
    //capturo el password
    var password = document.getElementById('pass').value;


    //compruebo que la contraseña no esta vacia
    if (password != "") {
        //reenvio a otra pagina
        location.href = "ejercicio6b.html";
    }


}

function init() {
    var btnAceptar = document.getElementById('btnAceptar');
    btnAceptar.addEventListener('click', comprobarAcceso);
}
window.onload = init;
