/**
 * Created by Carmen on 25/04/2016.
 */

function Tablero() {

    ///////////////
    //PROPIEDADES//
    ///////////////

    this.casillas;
    this.turno;
    this.numMovimientos;


    ///////////
    //METODOS//
    ///////////

    /**
     * metodos que resetea el tablero
     */
    this.iniciarTablero = function () {
        //declaramos las variables

        this.casillas = new Array(3);
        for (var i = 0; i < 3; i++) {
            this.casillas[i] = new Array(3);
        }

        //Establecemos el turno
        var azar = Math.round(Math.random());

        //limpiamos las casillas
        for (var fila = 0; fila < 3; fila++) {
            for (var col = 0; col < 3; col++) {
                this.casillas[fila][col] = "";
                document.getElementById('casilla' + fila + col).innerHTML = "&nbsp;";

            }

        }

        if (azar == 0) {
            this.turno = "O";
        } else {
            this.turno = "X"
        }

        //reiniciamos el numero de movimientos
        this.numMovimientos = 0;
    };

    this.detectarLineaDiagonal = function () {

        //comprobamos la diagonal hacia la derecha
        if (this.casillas[0][0] != "" && this.casillas[0][0] == this.casillas[1][1] && this.casillas[1][1] == this.casillas[2][2]) {
            return true;
        }

        // Comprobamos la diagonal hacia la izquierda
        if (this.casillas[0][2] != "" && this.casillas[0][2] == this.casillas[1][1] && this.casillas[1][1] == this.casillas[2][0]) {
            return true;
        }
        //En otro caso, no hemos encontrado una linea
        return false;

    };

    this.detectarLineaHorizontal = function () {
        //Comprobamos cada fila
        for (var fila = 0; fila < 3; fila++) {
            if (this.casillas[fila][0] != "" && this.casillas[fila][0] == this.casillas[fila][1] && this.casillas[fila][1] == this.casillas[fila][2]) {
                return true;
            }
        }
        // En otro caso, no hemos encontrado una linea
        return false;
    };

    this.detectarLineaVertical = function () {
        //comprobamos cada columna
        for (var col = 0; col < 3; col++) {
            if (this.casillas[0][col] != "" && this.casillas[0][col] == this.casillas[1][col] && this.casillas[1][col] == this.casillas[2][col]) {
                return true;
            }

        }
        // en otro caso, no hemos encontrado la linea
        return false;
    };

    this.detectarLinea = function () {
        return this.detectarLineaHorizontal() || this.detectarLineaVertical() || this.detectarLineaDiagonal();

    };

    this.continuarPartida = function () {
        //si hay tres en raya
        if (this.detectarLinea()) {
            //finalizamos la partida
            this.numMovimientos = 9;
            //mensaje final
            alert('Tres en raya! Enhorabuena!');
        } else {
            //si no ha terminado la partida
            if (this.numMovimientos < 9) {
                if (this.turno == "O") {
                    this.turno = "X"
                } else {
                    this.turno = "O";
                }
            } else {
                //en otro caso, avisamos del final de la partida
                alert('La partida ha terminado sin vencedor');
            }
        }
    };

    this.marcarMovimiento = function () {
        //si no ha terminado la partida
        if (this.numMovimientos < 9) {
            // Si la casilla no está ocupada
            if (this.casillas[fila][col] == "") {
                // La ocupamos
                this.casillas[fila][col] = this.turno;
                document.getElementByld("casilla" + fila + col).innerHTML = this.turno;
                // Incrementamos el número de movimientos
                this.numMovimientos++;
                // Comprobar si sigue la partida
                this.continuarPartida();
            }
        }
    };
}

function init() {

    console.log('arranco')
    var tresEnRaya;
    tresEnRaya = new Tablero();
    tresEnRaya.iniciarTablero();
}

window.onload = init;
