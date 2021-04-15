const $form = document.querySelector("form");
$form.addEventListener("submit", function(e){
    e.preventDefault();
    let objeto = {
        quoteText:"Love life and life will love you back. Love people and they will love you back.",
        quoteAuthor:"Arthur Rubinstein",
        senderName:"",
        senderLink:"",
        quoteLink:"http://forismatic.com/en/75fa007c8e/"
    };
    document.querySelector("#jsonform").value = JSON.stringify(objeto);
    document.querySelector("#JSON").addEventListener('click',InsertJSON);
})

// Examen original - Cambio de planes.
// const $form = document.querySelector("form");
// $form.addEventListener("submit",function(e){
//     e.preventDefault();
//     let request = new XMLHttpRequest();
//     request.responseType = "json";
//     request.open("GET", "http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en");
//     request.send();
//     request.onload = function () {
//         let post = request.response;
//         console.log(post);
//         // document.querySelector('#jsonform').value = post.quoteText, post.quoteAuthor, post.senderName, post.senderLink, post.quoteLink;
//     };
// })
