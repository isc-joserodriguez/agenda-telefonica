const campoNombre = document.getElementById('nombre');
const campoTelefono = document.getElementById('telefono');
const formularioContacto = document.getElementById('form');

formularioContacto.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!campoNombre.value || !campoTelefono.value) {
        alert('Oye, ambos datos son requeridos.')
        return;
    }
    console.log({
        nombre: campoNombre.value,
        telefono: campoTelefono.value
    })
    formularioContacto.reset();
});

const guardarLocalStorage = () => { };
const recuperarLocalStorage = () => { };
//! CREATE
const guardarContacto = () => { };
//!READ
const mostrarContactos = () => { };
//* const mostrarContacto = () => { };
//! UPDATE
const editarContacto = () => { };
//! DELETE
const eliminarContacto = () => { };