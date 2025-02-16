let amigos = [];

function agregarAmigo() {
  let input = document.getElementById('amigo').value;
  if (input === ""){
    alert('Por favor, inserte un nombre');
    return;
  }
  amigos.push(input);

  limpiarCaja();

}

function limpiarCaja() {
  let valorCaja = document.querySelector('#amigo')
  valorCaja.value = '';
}
