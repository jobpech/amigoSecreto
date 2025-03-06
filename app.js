// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];
let capturaAmigo = "";

function limpiarLista(){
    lista.innerHTML = ""

    return;
}


//Funcion agrega amigo a lista en el html
function mostrarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; //Limpiar lista

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li"); //crear lista
        li.textContent = amigos[i]; //colocar texto
        lista.appendChild(li);//agregar a lista ul
    }
    return;
}

//Funcion limpia campo al agregar al arreglo
function limpiarCaja(){
    let valorCaja = document.getElementById("amigo");
    valorCaja.value='';
 }

 //Funcion agrega nombre de amigo al arreglo
function agregarAmigo(){
   
    capturaAmigo = document.getElementById("amigo").value;

    if (capturaAmigo){
        
        amigos.push(capturaAmigo);
        limpiarCaja();
        mostrarLista();
        console.log(amigos);
        return;

    }else{
        alert("Favor de capturar nombre correcto ejemplo: Pedro");
        return;

    }
    
}
//Funcion sortea amigo
function sortearAmigo() {
    let numeroMaximo = amigos.length; 
    let numeroSorteado = Math.floor(Math.random()*numeroMaximo)+1;

    if(amigos.length > 2){
        let lista = document.getElementById("resultado");
        lista.innerHTML = ""; //Limpiar lista
        let li = document.createElement("li"); //crear lista
        li.textContent = amigos[numeroSorteado]; //colocar texto
        lista.appendChild(li);//agregar a lista ul
        return;
    }if (amigos.length >= 1) {
        alert("Favor de agregar mas de un amigo a la lista");
        return;
    } else {
        alert("Favor de agregar amigos a la lista para sortar");
        return;
    }

}

