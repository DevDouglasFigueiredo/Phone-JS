const listaDeTeclas = document.querySelectorAll('#teclas');
const chamar = document.querySelector('#chamar');
const input = document.querySelector('#display')

function somBip() {
    document.querySelector('#bip').play();
  }

function somChamada (){
    document.querySelector('#somChamada').play();
}

function insert (digitosTeclado){
    document.getElementById('display').value += digitosTeclado;
    somBip();
}

function clean(){
    document.getElementById('display').value = '';
    document.querySelector('#somChamada').pause();

}

function insert(numero) {
    if (input.value.length < 13) {
      input.value += numero
      somBip()
    } else {
      listaDeTeclas.disabled = 'true'
    }
  }
  
chamar.onclick = somChamada;
