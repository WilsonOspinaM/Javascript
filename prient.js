const listaProteinas = [];
const listaFrutas = [];
const proteina = 21;
const fruta = 3;
let cantidad = 2;
let personaDatos = 4;
const arbol = 167;
let numeroP = 1;
let numeroF = 1;

class persona {
    constructor(nombre, edad, genero, tipo){
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
        this.tipo = tipo;
    }
}

alert("¡Bienvenid@! Con el fin de conocerte mejor te haremos unas preguntas, ¿comenzamos?")

let nombre = prompt ("¿Cual es tu nombre?")
let edad = parseInt(prompt("¿Que edad tienes?"))
let genero = prompt ("¿Cuál es tu género? Masculino, Femenino, Otros (Por favor especifica) o si prefieres no decirnos no hay problema")
let tipo = prompt ("¿Cuál es tu tipo de alimentación? Omnívoro, vegetariano, vegano, crudista, macrobiótico")
nuevaPersona = new persona (nombre, edad, genero, tipo);
console.log(persona)

alert(nombre + " ingresa dos proteínas que consumas a la semana");
do{
    let entradaProte = prompt("Proteína " + numeroP++);
    listaProteinas.push(entradaProte);
    console.log(listaProteinas)
}while(listaProteinas.length != cantidad)

let kilosProte = parseInt(prompt("¿Que promedio en kilos consumes de " + listaProteinas[0] + " y " + listaProteinas[1]+" a la semana?"));

alert("Ahora, ingresa dos frutas que consumas a la semana");
do{
    let entradaFruta = prompt("Fruta " + numeroF++);
    listaFrutas.push(entradaFruta);
    console.log(listaFrutas)
}while(listaFrutas.length != cantidad)

let kilosFruta = parseInt(prompt("¿Que promedio en kilos consumes de " + listaFrutas[0] + " y " + listaFrutas[1] + " a la semana?"));

let totalCO = ((kilosProte * proteina) + (kilosFruta * fruta))*52

alert(nombre + " tu huella ambiental es de " + totalCO + " kilogramos de CO2 al año." +
    " Para compensar deberías sembrar " + totalCO/arbol + " arboles al año." 
     )