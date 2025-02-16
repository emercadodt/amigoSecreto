let amigos = [];

function agregarAmigo() {
  let input = document.getElementById('amigo').value;
  if (input === "") {
    alert('Por favor, inserte un nombre');
    return;
  }
  amigos.push(input);

  limpiarCaja();
  listarAmigos();
}

function limpiarCaja() {
  let valorCaja = document.querySelector('#amigo')
  valorCaja.value = '';
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