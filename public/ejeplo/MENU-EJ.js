var lastScrollTop = 0;
var header = document.querySelector('header');

window.addEventListener('scroll', function () {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }

    lastScrollTop = scrollTop;
});



function mostrarInformacion(id) {
    const titulo = document.getElementById('info-titulo');
    const descripcion = document.getElementById('info-descripcion');

    if (id === 1) {
        titulo.textContent = 'Agender Citas';
        descripcion.textContent = 'Actualmente, es una de las funciones principales, donde la cual muestra informacion';
    } else if (id === 2) {
        titulo.textContent = 'Mapas Cercanos';
        descripcion.textContent = 'Existe posiblidad de que puedas ver cuales son los puntos mas cercanos a ti';
    } else if (id === 3) {
        titulo.textContent = 'Ser donantes';
        descripcion.textContent = 'La nueva funcion de ser donantes a ayuda a ganar tiempo y recuersos';
    }

    const informacion = document.getElementById('informacion');
    informacion.style.display = 'block';
}



// Botón de perfil y menú desplegable
document.addEventListener("DOMContentLoaded", function () {
    var perfilLink = document.getElementById("perfil-link");
    var dropdownMenu = document.getElementById("dropdown-menu");

    perfilLink.addEventListener("click", function (event) {
        event.preventDefault();
        dropdownMenu.classList.toggle("show");
    });

    // Cerrar el menú desplegable al hacer clic fuera de él
    document.addEventListener("click", function (event) {
        var isInsideDropdown = dropdownMenu.contains(event.target);
        var isPerfilLink = event.target === perfilLink;

        if (!isInsideDropdown && !isPerfilLink) {
            dropdownMenu.classList.remove("show");
        }
    });
});



const logoutButton = document.getElementById('logout');
const profileLink = document.getElementById('profile-link');
const profileTools = document.getElementById('profile-tools');

logoutButton.addEventListener('click', function () {
    alert('Cerrar sesión');
});

document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        selectable: true,
        select: function (info) {
            // Se ejecuta cuando se selecciona una fecha en el calendario
            var note = prompt('Ingrese una nota para la fecha seleccionada:');
            if (note) {
                // Guardar la nota en el array de notas
                notas.push({ fecha: info.start, contenido: note });
                // Mostrar todas las notas
                mostrarNotas();

                // Aquí puedes agregar tu lógica adicional si deseas guardar las notas en otro lugar (por ejemplo, en una base de datos)
                console.log('Fecha seleccionada:', info.startStr, ' - ', info.endStr);
                console.log('Nota:', note);
            }
        },
        eventClick: function (info) {
            // Se ejecuta cuando se hace clic en un evento existente en el calendario
            console.log('Evento clickeado:', info.event.title);
            // Aquí puedes agregar tu lógica para manejar el clic en el evento
            // por ejemplo, mostrar más detalles o realizar alguna acción específica
        }
    });
    calendar.render();

    var notas = []; // Array para almacenar las notas

    function mostrarNotas() {
        var notaContenidoElement = document.getElementById('nota-contenido');
        // Limpiar el contenido existente
        notaContenidoElement.innerHTML = '';
        // Mostrar todas las notas
        notas.forEach(function (nota, index) {
            var notaElement = document.createElement('div');
            notaElement.className = 'nota-item';
            var fechaElement = document.createElement('p');
            fechaElement.textContent = 'Fecha: ' + nota.fecha.toLocaleDateString();
            var contenidoElement = document.createElement('p');
            contenidoElement.textContent = 'Nota: ' + nota.contenido;
            var botonEliminar = document.createElement('button');
            botonEliminar.textContent = 'Eliminar';
            botonEliminar.addEventListener('click', function () {
                eliminarNota(index);
            });
            notaElement.appendChild(fechaElement);
            notaElement.appendChild(contenidoElement);
            notaElement.appendChild(botonEliminar);
            notaContenidoElement.appendChild(notaElement);
        });
    }

    function eliminarNota(index) {
        notas.splice(index, 1);
        mostrarNotas();
    }
});

