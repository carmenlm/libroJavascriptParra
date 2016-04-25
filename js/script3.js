/**
 * Created by Carmen on 19/04/2016.
 */

//variable global para almacenar la hora y los minutos de la alarma
var alarma;

/**
 * funcion para mostrar la hora en el div correspondiente
 */
function mostrarHora() {

    // se obtiene la hora del sistema
    var ahora = new Date();

    //se colocan en el input correspondiente
    //se capturan los input donde se van a poner los datos
    var hora = document.getElementById('horaActual');
    var minuto = document.getElementById('minutoActual');
    var segundo = document.getElementById('segundoActual');

    //los ponemos utilizando el value del input
    hora.value = ahora.getHours();
    minuto.value = ahora.getMinutes();
    segundo.value = ahora.getSeconds();

}

/**
 * funcion que va a comprobar cuando coincida la hora del reloj con la de la alarma
 */
function comprobarAlarma() {

    // se obtiene la hora actual
    var ahora = new Date();

    //capturo el div donde va la imagen

    var imagen = document.getElementById('alarma');

    //si hay una alarma fijada

    if (alarma != undefined) {
        // si coincide la hora y minutos actual con la hora y minutos de la alarma
        if ((ahora.getHours() == alarma.getHours()) && (ahora.getMinutes() == alarma.getMinutes())) {
            //se cambia la imagen
            imagen.setAttribute("class", "alarmaON");
        } else {
            //sino se comprueba pasado 1 minuto
            var idComprobar = setTimeout("comprobarAlarma()", 60000);
        }
    }

}

/**
 * funcion para fijar la alarma
 * @param hora
 * @param minutos
 * @returns {Date} -- devuelvo objeto Date con la alarma
 */
function fijarAlarma(hora, minutos) {

    //capturo el div donde va la imagen
    var imagen = document.getElementById('alarma');

    // capturamos la hora del sistema para la alarma y para comprobar
    var ahora = new Date();
    alarma = new Date();

    //se fija la alarma con los parametros que pasamos
    alarma.setHours(hora, minutos);

    console.log(ahora);
    console.log(alarma);

    //se prepara para comprobar por primera vez

    var primeraComprobacion = (60 - ahora.getHours()) * 1000;

    var idComprobar = setTimeout("comprobarAlarma()", primeraComprobacion);

    //dejamos de mostrar la imagen
    imagen.setAttribute("class", "alarmaOFF");

    return alarma;

}

/**
 * funcion para activar la alarma
 */
function activarAlarma() {
    // fijamos los valores por defecto
    var hora = 12;
    var minuto = 00;

    //comprobamos los valores del formulario
    //capturamos los valores
    var horaAlarma = document.getElementById('horaAlarma').value;
    var minutoAlarma = document.getElementById('minutoAlarma').value;


    if (horaAlarma != "") {
        hora = horaAlarma;

    }
    if (minutoAlarma != "") {
        minuto = minutoAlarma;
    }
    console.log(hora);
    console.log(minuto);

    fijarAlarma(hora, minuto);

}

/**
 * funcion para desactivar la alarma
 */
function desactivarAlarma() {
    // dejamos de comprobar la alarma
    clearTimeout(idComprobar);

    //borramos la hora fijada
    alarma = null;

    //cambiamos la imagen
    var imagen = document.getElementById('alarma');
    imagen.setAttribute("class", "alarmaOFF");

}

function init() {

    console.log('Arranco');
    // bse establece un intervalo para que se llame a la funcion cada 1000
    setInterval('mostrarHora()', 1000);

    var btnActivar = document.getElementById('activar');
    var btnDesactivar = document.getElementById('desactivar');

    btnActivar.addEventListener('click', activarAlarma);
    btnDesactivar.addEventListener('click', desactivarAlarma, false);


}

window.onload = init;


