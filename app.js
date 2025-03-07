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
   
    capturaAmigo = document.getElementById("amigo").value.toUpperCase();
    

    if (capturaAmigo){
        
        amigos.push(capturaAmigo);
        limpiarCaja();
        mostrarLista();
        console.log(amigos);
        return;

    }else{
        alertNombreCorrecto();
        return;

    }
    
}
//Funcion sortea amigo
function sortearAmigo() {
    let numeroMaximo = amigos.length; 
    let numeroSorteado = Math.floor(Math.random()*numeroMaximo);
    console.log(numeroSorteado);

    if(amigos.length >= 2){
        let lista = document.getElementById("resultado");
        lista.innerHTML = ""; //Limpiar lista
        let li = document.createElement("li"); //crear lista
        li.textContent = `Tu amigo Secreto es: ${amigos[numeroSorteado]}`; //colocar texto 
        lista.appendChild(li);//agregar a lista ul
        document.getElementById("reiniciar").disabled = false; 
        document.getElementById("sortear").disabled = true;
        document.getElementById("amigo").disabled = true;
        document.getElementById("add").disabled = true;
        return;

    }if (amigos.length >= 1) {
        alertAgregarMasAmigos();
        return;
    } else {
        alertAgregarAmigo();
        return;
    }

}

//Reiniciar juego
function reiniciarJuego(){
    let lista1 = document.getElementById("listaAmigos");
    lista1.innerHTML = ""; //Limpiar lista
    let lista2 = document.getElementById("resultado");
    lista2.innerHTML = ""; //Limpiar lista
    amigos = [];
    document.getElementById("reiniciar").disabled = true;
    document.getElementById("sortear").disabled = false;
    document.getElementById("amigo").disabled = false;
    document.getElementById("add").disabled = false;
    alertReiniciar()
    return
}

//alert personalizado

function alertReiniciar() {
    Swal.fire({
        title: '¡Juego Reiniciado!',
        text: 'Gracias por jugar',
        icon: 'success', // Puedes cambiar el ícono (success, error, warning, info, question)
        confirmButtonText: 'Aceptar',
        customClass: {
            popup: 'mi-alerta', // Clase CSS personalizada
        },
    });
}

function alertAgregarAmigo() {
    Swal.fire({
        title: '¡Disculpa!',
        text: 'No tienes agregado ningun amigo a la lista',
        icon: 'info', // Puedes cambiar el ícono (success, error, warning, info, question)
        confirmButtonText: 'Aceptar',
        customClass: {
            popup: 'mi-alerta', // Clase CSS personalizada
        },
    });
}

function alertAgregarMasAmigos() {
    Swal.fire({
        title: '¡Oye faltan amigos!',
        text: 'Agrega por lo menos 2 amigos para sortear',
        icon: 'question', // Puedes cambiar el ícono (success, error, warning, info, question)
        confirmButtonText: 'Aceptar',
        customClass: {
            popup: 'mi-alerta', // Clase CSS personalizada
        },
    });
}

function alertNombreCorrecto() {
    Swal.fire({
        title: '¡Disculpa!',
        text: 'Favor de capturar el nombre de tus amigos Ej: Liliana, Belinda etc.',
        icon: 'Warning', // Puedes cambiar el ícono (success, error, warning, info, question)
        confirmButtonText: 'Aceptar',
        customClass: {
            popup: 'mi-alerta', // Clase CSS personalizada
        },
    });
}

