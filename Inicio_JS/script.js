console.log("Hola mundo");
/*Dato variable
  let a = 2;*/
entrada = document.querySelector('#entrada');

function cambiacolortexto(){
    let nodoacambiar = document.querySelector('#tituloacambiar');
    nodoacambiar.classList.toggle("red");
    //nodoacambiar.classList.add("blue");
}

function imprimetexto(){
    let entrada = document.querySelector('#entrada');
    console.log(entrada.value);
}

function calculatempCF(){
    let entrada = document.querySelector('#temC1');
    let num = Number(entrada.value);
    num = (num * (9/5)) + 32;
    console.log(num);
}

function calculatempCK(){
    let entrada = document.querySelector('#temC2');
    let num = Number(entrada.value);
    num += 273.15;
    console.log(num);
}

function calculatelongmin(){
    let entrada = document.querySelector('#longM1');
    let num = Number(entrada.value);
    num *= 39.37;
    console.log(num);
}

function calculatelongmcm(){
    let entrada = document.querySelector('#longM2');
    let num = Number(entrada.value);
    num *= 100;
    console.log(num);
}

let boton = document.querySelector("#boton");
boton.addEventListener('click',cambiacolortexto);
boton.addEventListener('click',imprimetexto);

let boton1 = document.querySelector("#boton1");
boton1.addEventListener('click',calculatempCF);

let boton2 = document.querySelector("#boton2");
boton2.addEventListener('click',calculatempCK);

let boton3 = document.querySelector("#boton3");
boton3.addEventListener('click',calculatelongmin);

let boton4 = document.querySelector("#boton4");
boton4.addEventListener('click',calculatelongmcm);