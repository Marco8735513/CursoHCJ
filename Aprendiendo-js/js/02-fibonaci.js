//Seleccionar elementos de la página
//Fibonacci
let fiboDiv = document.querySelector("#fibo");
let c;

function fibonaci(a, b, limite) {

    fiboDiv.innerHTML = "";

    for (let i = 0; i < limite; i++) {
        fibo.innerHTML += `<p>${a}</p>`
        c = a + b;
        a = b;
        b = c;


    }

}

let form = document.querySelector("#form-container");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    
    let limite = document.querySelector("#limite").value;
    limite = parseInt(limite);

    if (!isNaN(limite) && limite > 0) {

        fibonaci(0,1, limite);
    }

    else {
        fibo.innerHTML = "<p> Por favor ingrese un numero valido </p>";

    }





});

// fibonaci(0,1,10)
