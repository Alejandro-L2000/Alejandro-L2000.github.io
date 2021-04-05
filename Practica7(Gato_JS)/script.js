//Realizar el juego del Gato.
/*Objetivos que debe hacer el programa(página)
 Tablero
 */

let tablero=["", "", "", "", "", "", "", "", ""];
let turno="X";

function clickcasilla(evt){
    let id = Number(evt.target.id[1])-1;
    if(tablero[id] == "")
    {
        tablero[id] = turno;
        evt.target.classList.add(turno);
        if(turno == "X"){
            turno = "O";
        }
        else{
            turno = "X";
        }
    }
}

function ganador(){
    //Revisar si alguien gano, si alguien gano.
}

function reinicio(){
    let casillas = document.querySelectorAll(".casilla");
    for(var i=0; i<9; i++)
    {
        casillas[i].classList.remove("X", "O");
    }
}

let casillas = document.querySelectorAll(".casilla");

for(var i=0; i<9; i++)
{
    casillas[i].addEventListener('click',clickcasilla);
}

document.querySelector("#reiniciar").addEventListener('click', reinicio);

/*
function prueba(){
    for(i=0; i<=1000; i++)
    {
        document.querySelector("#MarcadorX").textContent = i;
        document.querySelector("#MarcadorO").textContent = i;
    }
}

setInterval(prueba,1000);
*/