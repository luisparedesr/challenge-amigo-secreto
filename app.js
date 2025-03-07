// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombres = [];

function agregarAmigo() {
   let valorNombre = document.getElementById('amigo').value;
  
 if (valorNombre === "") {
alert('Por favor, inserte un nombre.');
return;
   }
else {
   nombres.push (valorNombre);
   console.log (nombres);
   document.getElementById('amigo').value = '';
   
   renderizarAmigos();
    }
}
function renderizarAmigos(){
let listaAmigos = document.getElementById('listaAmigos')
listaAmigos.innerHTML = "";
for(let i = 0; i < nombres.length; i++) {
   let listaLi = document.createElement('li');
   listaLi.textContent = nombres[i];
   listaAmigos.appendChild(listaLi);
}
}

function sortearAmigo (){
   if (nombres.length < 2){
      alert('no hay amigos para sortear');
      return
   }
   let amigoSorteado = nombres[Math.floor(Math.random()*nombres.length)];
   let resultado = document.getElementById('resultado');
   resultado.innerHTML = `el amigo sorteado es: ${amigoSorteado}`;
}

//function listaNombres (){
   //let lista = document.getElementById('prueba').innerHTML=(nombres);
//}

//listaNombres (nombres);



function agregarTexto (elemento, texto){
    let elementoHTML = document.querySelector(elemento)
    elemento.elementoHTML=texto;
}
