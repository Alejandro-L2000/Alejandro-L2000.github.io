function cambiaJSON(){
    let valornombre = document.querySelector("#nombre").value;
    let valorapellido = document.querySelector("#apellido").value;
    let valoredad = document.querySelector("#edad").value;
    let valoremail = document.querySelector("#email").value;
    let objeto = {
        nombre:valornombre,
        apellido:valorapellido,
        edad:valoredad,
        email:valoremail
    };
    document.querySelector("#jsonform").value = JSON.stringify(objeto);
}

function cambiaString(){
    let valorJSON = JSON.parse(document.querySelector("#jsonform").value);
    console.log(valorJSON);
    document.querySelector("#nombre").value = valorJSON.nombre;
    document.querySelector("#apellido").value = valorJSON.apellido;
    document.querySelector("#edad").value = valorJSON.edad;
    document.querySelector("#email").value = valorJSON.email;
}

document.querySelector("#JSON").addEventListener('click',cambiaJSON);
document.querySelector("#fstring").addEventListener('click',cambiaString);