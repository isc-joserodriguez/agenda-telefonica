const campoNombre = document.getElementById('nombre');
const campoTelefono = document.getElementById('telefono');
const formularioContacto = document.getElementById('form');
const cuerpoTabla = document.getElementById('cuerpoTabla');
const datosModal = document.getElementById('datosModal');
let contactos = [];

const guardarLocalStorage = (datos) => {
    localStorage.setItem('contactos', JSON.stringify(datos))
};

const recuperarLocalStorage = () => {
    contactos = JSON.parse(localStorage.getItem('contactos') || '[]');
    mostrarContactos();
};
//! CREATE
const guardarContacto = (datosContato) => {
    contactos.push(datosContato);
    mostrarContactos();
};

//!READ
const mostrarContactos = () => {
    /* let temp='';
    for(let i=0;i<contactos.length;i++){
        temp += `
        <tr>
            <th scope="row">${i + 1}</th>
            <td>${contactos[i].nombre}</td>
            <td>${contactos[i].telefono}</td>
            <td><button class="btn btn-warning" onclick="editarContacto(${i})">.</button></td>
            <td><button class="btn btn-danger" onclick="eliminarContacto(${i})">.</button></td>
        </tr>
        `
    } */
    if (contactos.length === 0) {
        return;
    }
    cuerpoTabla.innerHTML = contactos.reduce((acc, contacto, index) => {
        return acc + `
        <tr>
            <th scope="row">${index + 1}</th>
            <td>${contacto.nombre}</td>
            <td>${contacto.telefono}</td>
            <td>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#contactoModal" onclick="mostrarContacto(${index})">
                    Ver
                </button>
            <button class="btn btn-warning" onclick="editarContacto(${index})">Editar</button>
            <button class="btn btn-danger" onclick="eliminarContacto(${index})">Eliminar</button></td>
        </tr>
        `
    }, '');
    guardarLocalStorage(contactos)
};
const mostrarContacto = (indice) => {
    const { telefono, nombre } = contactos[indice];
    datosModal.innerHTML = `
    <span class="h1">Nombre:</span> <span class="h4">${nombre}</span>
    <br />
    <span class="h1">Telefono:</span> <span class="h4">${telefono}</span>
    `
};
//! UPDATE
const editarContacto = (indice) => {
    const { telefono, nombre } = contactos[indice];
    const nuevoNombre = prompt('Agrega un nuevo nombre', nombre);
    const nuevoTelefono = prompt('Agrega un nuevo telefono', telefono);
    contactos[indice] = {
        nombre: nuevoNombre,
        telefono: nuevoTelefono,
    }
    mostrarContactos();
    alert('Se actualizó correctamente.')
};
//! DELETE
const eliminarContacto = (indice) => {
    if (confirm('¿Desea eliminar el elemento?')) {
        contactos.splice(indice, 1);
        mostrarContactos();
        alert('Se eliminó correctamente.')
    }
};



formularioContacto.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!campoNombre.value || !campoTelefono.value) {
        alert('Oye, ambos datos son requeridos.')
        return;
    }
    guardarContacto({
        nombre: campoNombre.value,
        telefono: campoTelefono.value
    });
    formularioContacto.reset();
});

recuperarLocalStorage();