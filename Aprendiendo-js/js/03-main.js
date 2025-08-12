let nombre = "Marco";

let dato = document.querySelector("#datos");
dato.innerHTML = `

<p> Mi nombre es ${nombre} </p>

`

//Condiciones
let altura = 190;

if (altura >= 185) {

    dato.innerHTML += `
    <p> Eres alto </p>
    `
}
else {

    dato.innerHTML += `
    <p> No Eres alto </p>
    `
}


//Bucles

for (let year = 2000; year <= 2023; year++) {
    datos.innerHTML += `<p> Estamos en el año ${year}</p>`
}

//Arrays

let nombres = ["Victor", "Marco", "Juan", "Gru"];

let nombreDiv = document.querySelector("#nombres");

nombreDiv.innerHTML = "<h1> Listado de nombre </h1> <ul>"

nombres.forEach(nombre => {
    nombreDiv.innerHTML += `<li> ${nombre} </li>`

});

nombreDiv.innerHTML += "</ul>"


//Funciones

const miInformacion = (nombre, apellido) => {

    let misDatos = `

        <h1>Soy la caja de datos </h1>
        <h2>Mi nombre es : ${nombre} </h2>
        <h3> apellido: ${apellido} </h3>

    `;

    return misDatos;

} 


const imprimir = ()=>{
    let datos2 = document.querySelector("#datos2");
    datos2.innerHTML = miInformacion("Marco","Valenzuela");

}

imprimir()
