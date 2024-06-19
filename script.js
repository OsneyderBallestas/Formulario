document.addEventListener('DOMContentLoaded', function() {
      // Hacer visible el cuerpo de la página una vez que el contenido se ha cargado completamente
    document.body.style.visibility = 'visible';
    document.body.style.opacity = '1';

     // Función para ocultar todas las secciones principales
    function hideAllSections() {
        const sections = document.querySelectorAll('.container > div');
        sections.forEach(section => {
            section.style.display = 'none';
        });
    }

      // Función para ocultar todas las subsecciones dentro de preguntas-landing
    function hideAllSubsections() {
        const subsections = document.querySelectorAll('#preguntas-landing > div');
        subsections.forEach(subsection => {
            subsection.style.display = 'none';
        });
    }

     // Inicializa el índice de la subsección actual
    let currentSubsectionIndex = 0;
    // Función para mostrar una subsección específica por índice
    function showSubsection(index) {
        const subsections = document.querySelectorAll('#preguntas-landing > div');
        if (index < subsections.length && index >= 0) {  // Verifica que el índice esté dentro del rango
            hideAllSubsections();  // Oculta todas las subsecciones
            subsections[index].style.display = 'block';  // Muestra la subsección correspondiente
            currentSubsectionIndex = index;  // Actualiza el índice de la subsección actual
        }
    }

    // Evento para el botón "¡Comencemos!" (btn-inicio)
    const btnInicio = document.getElementById('btn-inicio');
    btnInicio.addEventListener('click', function() {
        hideAllSections();
        const tipoProyecto = document.querySelector('.tipo-proyecto');
        tipoProyecto.style.display = 'block';
    });

    // Evento para el botón "Volver a inicio" (btn-proyecto)
    const btnProyecto = document.getElementById('btn-proyecto');
    btnProyecto.addEventListener('click', function() {
        hideAllSections();
        const inicio = document.querySelector('.inicio');
        inicio.style.display = 'block';
    });

    // Evento para el botón de Landing Page (btn-landing-page)
    const btnLandingPage = document.getElementById('btn-landing-page');
    btnLandingPage.addEventListener('click', function() {
        hideAllSections();  // Oculta todas las secciones principales
        hideAllSubsections();  // Oculta todas las subsecciones de preguntas de landing
        const preguntasLanding = document.getElementById('preguntas-landing');
        preguntasLanding.style.display = 'block';  // Muestra la sección de preguntas de landing
        showSubsection(0);  // Muestra la primera subsección
    });

    // Evento para el botón "Volver al Proyecto" (btn-volver-proyecto)
    const btnVolverProyecto = document.getElementById('btn-volver-proyecto');
    btnVolverProyecto.addEventListener('click', function() {
        hideAllSections();
        const tipoProyecto = document.querySelector('.tipo-proyecto');
        tipoProyecto.style.display = 'block';
    });

    // Evento para el botón "Siguiente" (btn-siguiente)
    // Agrega un evento click a cada botón "siguiente" para avanzar a la siguiente subsección
    const btnSiguiente = document.querySelectorAll('#btn-siguiente');
    btnSiguiente.forEach(button => {
        button.addEventListener('click', function() {
            showSubsection(currentSubsectionIndex + 1);
        });
    });

    // Evento para los botones "Atrás" (btn-atras)
    // Agrega un evento click a cada botón "atrás" para retroceder a la subsección anterior
    const btnAtras = document.querySelectorAll('.arrow#btn-atras');
    btnAtras.forEach(button => {
        button.addEventListener('click', function() {
            showSubsection(currentSubsectionIndex - 1);
        });
    });

    // Evento para los botones con clase "objetivo-landing-01"
    // Alterna la clase 'seleccionado' en el botón clickeado
    const objetivoButtons = document.querySelectorAll('.objetivo-landing-01');
    objetivoButtons.forEach(button => {
        button.addEventListener('click', function() {
            button.classList.toggle('seleccionado');
        });
    });
});
