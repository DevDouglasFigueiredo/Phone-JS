const listaDeTeclas = document.querySelectorAll('#tecla');
const del = document.querySelector('#delete');

let contador = 0;


function somBip (){
    
    document.querySelector('#bip').play();
    
}


while (contador < listaDeTeclas.length ){
    
    listaDeTeclas[contador].onclick = somBip;
    
    contador = contador + 1 ;
    
    del.onclick = somBip;
}

function insert (numero) {
        
        document.getElementById('display').innerHTML = numero;

      }