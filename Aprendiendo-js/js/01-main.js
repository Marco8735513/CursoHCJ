//Alertas
alert("Hola Mundo");

//Variables
let nombre = "Marco";
let apellido = "Valenzuela";

//Constantes <- No cambia el valor
const altura = 187;

//Mostrar por consola
console.log(nombre);
console.log(altura);

//Concatenación
let concatenacion = (nombre + " " + apellido);

//Seleccionar elementos de la página
let datos = document.querySelector("#datos");
datos.innerHTML = `
    <h1> Este es mi primer mensaje de html con js </h1>
    <h2> Mi nombre es ${nombre} ${apellido}</h2>
    <h3> Mido ${altura}</h3>
`;
