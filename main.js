const listaDeTeclas = document.querySelectorAll('#tecla');
const del = document.querySelector('#delete');
const chamar = document.querySelector('#chamar');
const input = document.querySelector('#display')


let contador = 0;

function SomOcupado(){
    document.querySelector('#somOcupado').play();
    

}

chamar.onclick = SomOcupado;


function somBip() {
    document.querySelector('#bip').play();
  }

  del.onclick = somBip;

function insert(numero) {
    document.getElementById('display').value += numero
    somBip()
  }

  function clean(){
      document.getElementById('display').value = "";
      document.querySelector('#somOcupado').pause();
  }

  // Na função insert, coloquei uma condição de que SE o comprimento do valor do input for MENOR QUE 13, as teclas adicionam o valor e tocam o som. SE NÂO, ele desabilita as teclas, então a pessoa não consegue mais apertar os botões

function insert(numero) {
    if (input.value.length < 13) {
      input.value += numero
      somBip()
    } else {
      listaDeTeclas.disabled = 'true'
    }
  }
