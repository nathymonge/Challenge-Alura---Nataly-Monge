// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let comida = [];

function agregarComidas() {
let inputComida = document.getElementById("comida");
let nombreComida = inputComida.value;

if (!nombreComida) {
    alert ("Debes ingresar una comida");
    return;
}
comida.push(nombreComida);
inputComida.value = "";
inputComida.focus();
renderizarComida();
}

function renderizarComida() {
    let listaComidas = document.getElementById("listaComidas");
    listaComidas.innerHTML="";
    for (let i = 0; i < comida.length; i++) {
        let item = document.createElement("li");
        item.textContent = comida[i];
        listaComidas.appendChild(item);

    }
}
function sortearComidas(){
if (comida.length === 0) {
        alert("No hay comidas para escoger");
        return;
    }
let comidaSorteada = comida[Math.floor (Math.random()*comida.length)];
let resultado = document.getElementById("resultado");
resultado.innerHTML= `La comida ganadora es: ${comidaSorteada}`;

let limpiarLista= document.getElementById("listaComidas");
limpiarLista.innerHTML = "";

}

