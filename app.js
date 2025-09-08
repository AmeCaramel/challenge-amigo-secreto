let amigos = [];

const listaAmigos = document.getElementById('listaAmigos'); 
const inputAmigo = document.getElementById('amigo'); 
const resultado = document.getElementById('resultado');

function agregarAmigo() {
    const nombre = inputAmigo.value; 
    if (nombre === '') {
        alert('Por favor, inserte un nombre.');
        return; 
    }
    amigos.push(nombre); 

    inputAmigo.value = '';

    actualizarLista();
}

function actualizarLista() {
    listaAmigos.innerHTML = ''; 
    for (let indice = 0; indice < amigos.length; indice++) {
        const item = document.createElement("li");
            item.textContent = amigos[indice];
            listaAmigos.appendChild(item);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {            
        alert('No hay amigos para sortear. Por favor, añadí al menos un nombre.');
        return;   
    }
  
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];    

    resultado.innerHTML = `<li>Tu amigo secreto es: ${amigoSorteado}</li>`;
}

