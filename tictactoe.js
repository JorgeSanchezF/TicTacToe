/**
 * TIC TAC TOE
 * 
 * 1. (OBLIGATORIO)
 * REQUISITOS{
 * NECESITA COMENTARIOS EN LA CABECERA DE LAS FUNCIONES (@param, @return)
 * VARIABLES DECLARADAS ARRIBA
 * SIN ERRORES EN CONSOLA
 * ESTILOS (TABLERO CENTRADO IMAGENES DE FONDO)
 * SUBIR A GITHUB 
 * SI HAY GANADOR NO SE PUEDEN PONER MÁS FICHAS
 * CONTADOR DE DE PUNTOS POR EQUIPO
 * REINICIO TABLERO SIN RECARGAR PAGINA (ELIMINO EL TEXT CONTENT DE LAS CASILLAS)
 * MOSTRAR COLOR DE LINEA GANADORA
 * CAMBIAR LA FUNCION PARA GANADOR A UNA SOLA}
 * 
 * 2. (SECUNDARIO)
 * RELOJ DE TIEMPO PARA CAMBIO DE TURNO SI SE AGOTA EL TIEMPO
 * 
 * 
 */



let jugador1 = 'X';
let jugador2 = 'O';
let ganarx = Boolean;

/**
 * [0, 1, 2]
 * [3, 4, 5]
 * [6, 7, 8]
 */
// let tablero = ['','','','','','','','',''];
let tablero = document.getElementsByClassName('casilla');
let turno = true;

/**
 * [3, 4, 5]
 * [0, 3, 6]
 * [1, 4, 7]
 * [2, 5, 8]
 * [0, 4, 8]
 * [2, 4, 6]
 */
let combinacionGanadora = [
    [3, 4, 5],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

/**
 * Introduccion de enventos de click como atributo en etiqueta
 */
for (let index = 0; index < tablero.length; index++) {
    tablero[index].setAttribute('onclick', `pintaconsola(${index})`);

}

/**
 * Funcion pintaconsola comprueba el turno y el contenido de la casilla clicada, si tiene contenido alerta, si no la rellena
 * y cambia el turno
 */
/**
 * @param numero
 * @return null
 * */

function pintaconsola(numero) {
    if (turno == true) {
        if (tablero[numero].textContent == '') {
            tablero[numero].textContent = 'X';
            GANAR();
            turno = !turno;
        }
        else {
            alert('Casilla ocupada')
        }

    } else {
        if (tablero[numero].textContent == '') {
            tablero[numero].textContent = 'O';
            GANAR();
            turno = !turno;
        }
        else {
            alert('Casilla ocupada')
        }
    }


}

/**
 * Funcion ganar comprueba cada turno si la s casillas marcadas por los jugadores son las mismas que las contenidas en el array
 * de posiciones ganadoras y si alguien gana lo muestra por alerta y llama a funciones para reiniciar el juego
 */
/**
 * @param null
 * @return null
 * */

function GANAR() {
    let actualx = [];
    let actualo = [];


    // Recorrer las casillas para ver su contenido
    for (let i = 0; i < tablero.length; i++) {
        if (tablero[i].innerHTML == 'X') {
            actualx.push(i);
        } if (tablero[i].innerHTML == 'O') {
            actualo.push(i);
        }
    }
    /**
     *Array.include para comprobar si una de las combinaciones correctas
     * esta incluida en mi array de actualX o acutalO
     */
    for (let i = 0; i < combinacionGanadora.length; i++) {
        if (actualx.includes(combinacionGanadora[i][0]) && actualx.includes(combinacionGanadora[i][1]) && actualx.includes(combinacionGanadora[i][2])) {
            modificarContador();
            alert('GANAN LAS X');

            ganarx = true;


        } if (actualo.includes(combinacionGanadora[i][0]) && actualo.includes(combinacionGanadora[i][1]) && actualo.includes(combinacionGanadora[i][2])) {
            modificarContador();
            alert('GANAN LAS O');

            ganarx = false;

        }
    }


}
/**
 * Funcion limpiar recorre el tablero y cambia el textcontent a null caundo es llamada en la funcion ganar
 */
/**
 * @param null
 * @return null
 * */
function limpiar() {
    for (let numero = 0; numero < tablero.length; numero++) {
        tablero[numero].textContent = null;
    }
}


/**
 * @param null
 * @return null
 * */
function modificarContador() {
    let boton = document.getElementsByClassName('boton')[0];
    let puntosx = document.getElementsByClassName('puntosx');
    let puntoso = document.getElementsByClassName('puntoso');

    function continua() {
        if (ganarx == true) {
            puntosx = puntosx++;
        }
        else {
            puntosx = puntoso++
        }
    }
    boton.addEventListener('click', continua())
    limpiar();
}
