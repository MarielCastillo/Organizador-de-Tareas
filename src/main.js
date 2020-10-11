// Pedimos su nombre

var nombre = prompt('Ingrese su nombre');

var h1 = document.getElementById('name');

// Lo agregamos al titulo
h1.textContent = 'Hola ' + nombre;

// obtener ids

var lista = document.getElementById('lista'),
    tareaInput = document.getElementById('tareaInput'),
    btnNuevaTarea = document.getElementById('plus-button'),
    finalizada = document.getElementById('finalizadas');

// Funciones

var agregarTarea = function () {
    var div = document.createElement('div');
    div.setAttribute('class', 'container-card-ul-li-div');

    var check = document.createElement('i');
    check.setAttribute('class', 'far fa-check-circle');
    check.addEventListener('click', cambiarTarea);

    var del = document.createElement('i');
    del.setAttribute('class', 'far fa-trash-alt');
    del.addEventListener('click', borrarTarea);

    div.appendChild(check);
    div.appendChild(del);

    var tarea = tareaInput.value,
        nuevaTarea = document.createElement('li'),
        contenido = document.createTextNode(tarea);

    if (tarea === '') {
        tareaInput.setAttribute('placeholder', 'Agregrar tarea valida');
        tareaInput.className = 'error';
        return false;
    }

    // Agrgamos contenido a la nueva tarea
    nuevaTarea.appendChild(contenido);
    nuevaTarea.setAttribute('class', 'container-card-ul-li');

    nuevaTarea.appendChild(div);
    lista.appendChild(nuevaTarea);

    tareaInput.value = '';
};

var comprobarInput = function () {
    tareaInput.className = 'arreglo';
    tareaInput.setAttribute('placeholder', 'Agregar tarea');
};

// Eliminar elementos de lista
var borrarTarea = function () {
    let li = this.parentNode.parentNode;
    li.parentNode.removeChild(li);
};

// Cambiar tarea pendiente a finalizada
var cambiarTarea = function () {
    var li = this.parentNode.parentNode;
    finalizada.parentNode.appendChild(li);
};

// Evento
// Agregar Tarea
btnNuevaTarea.addEventListener('click', agregarTarea);

// Comprobar Input
tareaInput.addEventListener('click', comprobarInput);