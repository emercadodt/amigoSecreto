let amigos = [];

function agregarAmigo() {
  let input = document.getElementById('amigo').value;
  if (input === "") {
    alert('Por favor, inserte un nombre');
    return;
  }
  amigos.push(input);

  limpiarCaja();
  limpiarLista();
}

function limpiarCaja() {
  let valorCaja = document.querySelector('#amigo')
  valorCaja.value = '';
}

function limpiarLista() {
  let limpiarLista = document.querySelector('#listaAmigos');
  limpiarLista.innerHTML = '';
  listarAmigos();
}

function listarAmigos() {
  const listaAmigos = document.getElementById('listaAmigos');
  listaAmigos.innerHTML = "";
  for (let i = 0; i < amigos.length; i++) {
    // Crear un nuevo elemento de lista para cada amigo
    let li = document.createElement('li');
    li.textContent = amigos[i];
    listaAmigos.appendChild(li);
  }
}

function sortearAmigo() {
  let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
  alert(`El amigo sorteado es: ${amigoSorteado}`);
}