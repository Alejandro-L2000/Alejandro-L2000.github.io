// let request = new XMLHttpRequest();
//   request.responseType = "json";
//   request.open("GET", "https://jsonplaceholder.typicode.com/todos");
//   request.send();
//   request.onload = function () {
//       let fotos = request.response;
//       const $espacio = document.querySelector("#fotos");
      
//       for(let foto of fotos){
//           $espacio.innerHTML += `
//           <div id="datos">
//           <p>${foto.title}, ${foto.completed}</p>
//           </div>`;
//       }
//   };

// let boton1 = document.querySelector("#btnbuscar");
// boton1.addEventListener('click',buscarID);

// function buscarID(){
//     let etiqueta = document.querySelector("input");
//     let dato = etiqueta.value;
//     console.log(dato);
//     let request = new XMLHttpRequest();
//     request.responseType = "json";
//     request.open("GET", `https://jsonplaceholder.typicode.com/todos/${dato}`);
//     request.send();
//     request.onload = function () {
//     let post = request.response;
//     console.log(post);
//     const $espacio = document.querySelector("#fotos");
//     if($espacio.innerHTML == null){
//         $espacio.innerHTML += `
//         <div id="datos">
//         <p>${post.title}, ${post.completed}</p>
//         </div>`;
//     }
//     else
//     {
//         $espacio.innerHTML = `
//         <div id="datos">
//         <p>${post.title}, ${post.completed}</p>
//         </div>`;
//     }
//   }
// }

// Forma Ed.
const $form = document.querySelector("form");
$form.addEventListener("submit", function(e){
    e.preventDefault();
    let etiqueta = document.querySelector("input");
    let dato = etiqueta.value;
    console.log(dato);
    let request = new XMLHttpRequest();
    request.responseType = "json";
    request.open("GET", `https://jsonplaceholder.typicode.com/todos/${dato}`);
    request.send();
    request.onload = function () {
        let post = request.response;
        console.log(post);
        const $espacio = document.querySelector("#fotos");
        if($espacio.innerHTML == null){
            $espacio.innerHTML += `
            <div id="datos">
            <p>${post.title}, ${post.completed}</p>
            </div>`;
        }
        else
        {
            $espacio.innerHTML = `
            <div id="datos">
            <p>${post.title}, ${post.completed}</p>
            </div>`;
        }
    }
});


