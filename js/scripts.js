// console.log('funciona correctamente');

// //querySelector

// const heading = document.querySelector('.header__texto h2');
// heading.textContent = 'Nuevo Heading';
// heading.classList.add('nueva-clase');

// console.log(heading);

// //querySelectorAll
// const enlaces = document.querySelectorAll('.navegacion a');
// console.log(enlaces);
// enlaces[0].textContent= 'Nuevo Texto para Enlace';
// enlaces[0].href = 'https:\\www.google.com'
// enlaces[0].classList.add('nueva-clase');
// // enlaces[0].classList.remove('navegacion__enlace');

// // generar un nuevo enlace
// const nuevoEnlace = document.createElement('A');

// // agregar el href
// nuevoEnlace.href = 'nuevo-enlace.html';

// // Agregar el texto
// nuevoEnlace.textContent = 'Un nuevo enlace';

// // Agregar la clase
// nuevoEnlace.classList.add('navegacion__enlace');

// // Agregar al documento
// const navegacion = document.querySelector('.navegacion');
// navegacion.appendChild(nuevoEnlace);


// console.log(nuevoEnlace);

// Eventos en JS
// console.log(1);

// window.addEventListener('load', function() { //load espera a que el JS y los archivos del HTML estén listos
//     console.log(2);
// })

// window.onload = function(){
//     console.log(3);
// }

// document.addEventListener('DOMContentLoaded',function(){
//     console.log(4);
// })

// console.log(5);

// // window.onscroll = function() {
// //     console.log('Scrolling...');
// // }


// Seleccionar elementos y asociarles un evento
// const btnEnviar = document.querySelector('.boton--primario');
// btnEnviar.addEventListener('click',function(evento){
//     console.log(evento);
//     console.log(evento.preventDefault()); // Útil para validar formularios

//     // Validar un formulario
//     console.log('Enviando formulario...');
// })

// Eventos de los Inputs y TextArea

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

// querySelectors
const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

// EventListeners
nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);
// El evento de Submit
formulario.addEventListener('submit', function(e){
    e.preventDefault();

    // Validar formulario
    const { nombre, email, mensaje} = datos;

    if(nombre === '' || email === '' || mensaje === '') {
        mostrarAlerta('Todos los campos son obligatorios', true);
        // console.log('Todos los campos son obligatorios');
        return;
    }

    // Enviar formulario
    mostrarAlerta('Mensaje enviado correctamente');

})

// Resto de funciones
function leerTexto(e) {
    // console.log(e.target.value);
    datos[e.target.id] = e.target.value;

    // console.log(datos);
}

function mostrarAlerta( mensaje, error = null ) {
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;

    if ( error ){
        alerta.classList.add('error');
    } else {
        alerta.classList.add('correcto');
    }

    formulario.appendChild(alerta);

    setTimeout( () => {
        alerta.remove();
    }, 5000);

}



