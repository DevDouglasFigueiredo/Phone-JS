const listaDeTeclas = document.querySelectorAll('#teclas');
const del = document.querySelector('#delete');
const chamar = document.querySelector('#chamar');
const input = document.querySelector('#display')

function somBip() {
    document.querySelector('#bip').play();
  }

function somOcupado (){
    document.querySelector('#somOcupado').play();
}

function insert (digitosTeclado){
    document.getElementById('display').value += digitosTeclado;
    somBip();
}

function clean(){
    document.getElementById('display').value = '';
    document.querySelector('#somOcupado').pause();

}

function insert(numero) {
    if (input.value.length < 13) {
      input.value += numero
      somBip()
    } else {
      listaDeTeclas.disabled = 'true'
    }
  }
  
chamar.onclick = somOcupado;
del.onclick = somBip;