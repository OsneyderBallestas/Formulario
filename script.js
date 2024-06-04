document.addEventListener("DOMContentLoaded", function() {
    // Ocultar todas las secciones excepto la de inicio
    const secciones = document.querySelectorAll('.container > div:not(.inicio)');
    secciones.forEach(sec => {
        sec.style.display = 'none';
    });

    // Funcionalidad para el botón btn-inicio para ir a la sección tipo-proyecto
    const btnInicio = document.getElementById('btn-inicio');
    btnInicio.addEventListener('click', function() {
        document.querySelector('.inicio').style.display = 'none';
        document.querySelector('.tipo-proyecto').style.display = 'block';
    });

    // Funcionalidad para el botón btn-proyecto para volver a la sección inicio
    const btnProyecto = document.querySelector('#btn-proyecto');
    btnProyecto.addEventListener('click', function() {
        document.querySelector('.tipo-proyecto').style.display = 'none';
        document.querySelector('.inicio').style.display = 'block';
    });


    // Funcionalidad para el botón btn-volver-proyecto para volver a la sección tipo-proyecto
    const btnVolverProyecto = document.getElementById('btn-volver-proyecto');
    btnVolverProyecto.addEventListener('click', function() {
        // Ocultar todas las secciones para limpieza visual
        const allSections = document.querySelectorAll('.container > div');
        allSections.forEach(section => {
            section.style.display = 'none';
        });
        
        // Mostrar la sección tipo-proyecto
        document.querySelector('.tipo-proyecto').style.display = 'block';
    });


        // Manejar el clic en el botón btn-landing-page para mostrar las preguntas de Landing Page
        const btnLandingPage = document.getElementById('btn-landing-page');
        const allSections = document.querySelectorAll('.container > div');
        const landingSections = document.querySelectorAll('#preguntas-landing > div');
        let currentLandingIndex = 0; // índice para controlar qué pregunta se muestra
    
        btnLandingPage.addEventListener('click', function() {
            allSections.forEach(section => {
                section.style.display = 'none'; // Ocultar todas las secciones
            });
            document.getElementById('preguntas-landing').style.display = 'block'; // Mostrar el contenedor de preguntas de landing
            showLandingSection(currentLandingIndex); // Mostrar la primera sección de preguntas
        });
    
        // Función para mostrar una sección de preguntas de landing
        function showLandingSection(index) {
            landingSections.forEach((section, idx) => {
                section.style.display = idx === index ? 'block' : 'none'; // Mostrar solo la sección activa
            });
        }
    
        // Agregar listeners a los botones de navegación dentro de preguntas-landing
        document.querySelectorAll('#preguntas-landing .arrow').forEach(button => {
            button.addEventListener('click', function() {
                if (this.id === 'btn-siguiente' && currentLandingIndex < landingSections.length - 1) {
                    currentLandingIndex++; // Incrementar el índice para mostrar la siguiente sección
                } else if (this.id === 'btn-atras' && currentLandingIndex > 0) {
                    currentLandingIndex--; // Decrementar el índice para volver a la sección anterior
                }
                showLandingSection(currentLandingIndex); // Actualizar la vista
            });
    });
    


        // Funcionalidad para el botón btn-volver-sw para volver a la sección tipo-proyecto
    const btnVolverSW = document.getElementById('btn-volver-sw');
    btnVolverSW.addEventListener('click', function() {
        // Ocultar todas las secciones para limpieza visual
        const allSections = document.querySelectorAll('.container > div');
        allSections.forEach(section => {
            section.style.display = 'none';
        });
        
        // Mostrar la sección tipo-proyecto
        document.querySelector('.tipo-proyecto').style.display = 'block';
    });

    
        // Manejar el clic en el botón btn-sitio-web para mostrar las preguntas de Sitio Web Informativo
        const btnSitioWeb = document.getElementById('btn-sitio-web');
        const sitioWebSections = document.querySelectorAll('#preguntas-sitioweb > div');
        let currentSitioWebIndex = 0; // índice para controlar qué pregunta se muestra
        
        btnSitioWeb.addEventListener('click', function() {
            const allSections = document.querySelectorAll('.container > div');
            allSections.forEach(section => {
                section.style.display = 'none'; // Ocultar todas las secciones
            });
            document.getElementById('preguntas-sitioweb').style.display = 'block'; // Mostrar el contenedor de preguntas de sitio web
            showSitioWebSection(currentSitioWebIndex); // Mostrar la primera sección de preguntas
        });
    
        // Función para mostrar una sección de preguntas de sitio web
        function showSitioWebSection(index) {
            sitioWebSections.forEach((section, idx) => {
                section.style.display = idx === index ? 'block' : 'none'; // Mostrar solo la sección activa
            });
        }
    
        // Agregar listeners a los botones de navegación dentro de preguntas-sitioweb
        document.querySelectorAll('#preguntas-sitioweb .arrow').forEach(button => {
            button.addEventListener('click', function() {
                if (this.id.includes('siguientesw') && currentSitioWebIndex < sitioWebSections.length - 1) {
                    currentSitioWebIndex++; // Incrementar el índice para mostrar la siguiente sección
                } else if (this.id.includes('atrasw') && currentSitioWebIndex > 0) {
                    currentSitioWebIndex--; // Decrementar el índice para volver a la sección anterior
                }
                showSitioWebSection(currentSitioWebIndex); // Actualizar la vista
            });
        });
    



});
