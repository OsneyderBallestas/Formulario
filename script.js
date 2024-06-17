document.addEventListener("DOMContentLoaded", function() {
    
    // Ocultar la página
    document.body.style.visibility = 'hidden';
    document.body.style.opacity = '0';
    
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

    // === Funcionalidad para Landing Page ===
    const btnLandingPage = document.getElementById('btn-landing-page');
    const landingSections = document.querySelectorAll('#preguntas-landing > div');
    let currentLandingIndex = 0;

    btnLandingPage.addEventListener('click', function() {
        secciones.forEach(section => section.style.display = 'none');
        document.getElementById('preguntas-landing').style.display = 'block';
        showLandingSection(currentLandingIndex);
    });

    function showLandingSection(index) {
        landingSections.forEach((section, idx) => {
            section.style.display = idx === index ? 'block' : 'none';
        });
        updateLandingNextButton();
    }

    document.querySelectorAll('#preguntas-landing .arrow').forEach(button => {
        button.addEventListener('click', function() {
            if (this.id === 'btn-siguiente' && currentLandingIndex < landingSections.length - 1) {
                currentLandingIndex++;
            } else if (this.id === 'btn-atras' && currentLandingIndex > 0) {
                currentLandingIndex--;
            }
            showLandingSection(currentLandingIndex);
        });
    });

    function updateLandingNextButton() {
        const currentSection = landingSections[currentLandingIndex];
        const buttons = currentSection.querySelectorAll('.button-group button');
        const nextButton = currentSection.querySelector('#btn-siguiente');
        const anySelected = [...buttons].some(button => button.classList.contains('seleccionado'));
        if (nextButton) {
            nextButton.disabled = !anySelected;
        }
    }

    const objetivoLandingButtons = document.querySelectorAll('.objetivo-landing');
    objetivoLandingButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (this.classList.contains('seleccionado')) {
                this.classList.remove('seleccionado');
            } else {
                objetivoLandingButtons.forEach(btn => btn.classList.remove('seleccionado'));
                this.classList.add('seleccionado');
            }
            updateLandingNextButton();
        });
    });

    // === Funcionalidad para Sitio Web Informativo ===
    const btnSitioWeb = document.getElementById('btn-sitio-web');
    const sitioWebSections = document.querySelectorAll('#preguntas-sitioweb > div');
    let currentSitioWebIndex = 0;

    btnSitioWeb.addEventListener('click', function() {
        secciones.forEach(section => section.style.display = 'none');
        document.getElementById('preguntas-sitioweb').style.display = 'block';
        showSitioWebSection(currentSitioWebIndex);
    });

    function showSitioWebSection(index) {
        sitioWebSections.forEach((section, idx) => {
            section.style.display = idx === index ? 'block' : 'none';
        });
        updateSitioWebNextButton();
    }

    document.querySelectorAll('#preguntas-sitioweb .arrow').forEach(button => {
        button.addEventListener('click', function() {
            if (this.id === 'btn-siguientesw' && currentSitioWebIndex < sitioWebSections.length - 1) {
                currentSitioWebIndex++;
            } else if (this.id === 'btn-atrasw' && currentSitioWebIndex > 0) {
                currentSitioWebIndex--;
            }
            showSitioWebSection(currentSitioWebIndex);
        });
    });

    function updateSitioWebNextButton() {
        const currentSection = sitioWebSections[currentSitioWebIndex];
        const buttons = currentSection.querySelectorAll('.button-group button');
        const nextButton = currentSection.querySelector('#btn-siguientesw');
        const anySelected = [...buttons].some(button => button.classList.contains('seleccionado'));
        if (nextButton) {
            nextButton.disabled = !anySelected;
        }
    }

    const objetivoSitioWebButtons = document.querySelectorAll('.objetivo-sitioweb');
    objetivoSitioWebButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (this.classList.contains('seleccionado')) {
                this.classList.remove('seleccionado');
            } else {
                objetivoSitioWebButtons.forEach(btn => btn.classList.remove('seleccionado'));
                this.classList.add('seleccionado');
            }
            updateSitioWebNextButton();
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

    // === Funcionalidad para Tienda Online ===
    const btnTiendaOnline = document.getElementById('btn-tienda-online');
    const tiendaSections = document.querySelectorAll('#preguntas-tiendaonline > div');
    let currentTiendaIndex = 0;

    btnTiendaOnline.addEventListener('click', function() {
        secciones.forEach(section => section.style.display = 'none');
        document.getElementById('preguntas-tiendaonline').style.display = 'block';
        showTiendaSection(currentTiendaIndex);
    });

    function showTiendaSection(index) {
        tiendaSections.forEach((section, idx) => {
            section.style.display = idx === index ? 'block' : 'none';
        });
        updateTiendaNextButton();
    }

    document.querySelectorAll('#preguntas-tiendaonline .arrow').forEach(button => {
        button.addEventListener('click', function() {
            if (this.id === 'btn-siguiente-tienda' && currentTiendaIndex < tiendaSections.length - 1) {
                currentTiendaIndex++;
            } else if (this.id === 'btn-atras-tienda' && currentTiendaIndex > 0) {
                currentTiendaIndex--;
            }
            showTiendaSection(currentTiendaIndex);
        });
    });

    function updateTiendaNextButton() {
        const currentSection = tiendaSections[currentTiendaIndex];
        const buttons = currentSection.querySelectorAll('.button-group button');
        const nextButton = currentSection.querySelector('#btn-siguiente-tienda');
        const anySelected = [...buttons].some(button => button.classList.contains('seleccionado'));
        if (nextButton) {
            nextButton.disabled = !anySelected;
        }
    }

    const objetivoTiendaButtons = document.querySelectorAll('.objetivo-tienda');
    objetivoTiendaButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (this.classList.contains('seleccionado')) {
                this.classList.remove('seleccionado');
            } else {
                objetivoTiendaButtons.forEach(btn => btn.classList.remove('seleccionado'));
                this.classList.add('seleccionado');
            }
            updateTiendaNextButton();
        });
    });







// Selecciona el input y el botón siguiente
const tipoTiendaInput = document.getElementById('tipo-tienda');
const btnSiguienteTienda = document.getElementById('btn-siguiente-tienda');

// Agrega un evento de entrada para detectar cuando se escribe algo
tipoTiendaInput.addEventListener('input', function() {
    // Habilita el botón de siguiente si el campo no está vacío
    if (tipoTiendaInput.value.trim() !== '') {
        btnSiguienteTienda.disabled = false;
    } else {
        btnSiguienteTienda.disabled = true;
    }
});









    // Funcionalidad para el botón btn-volver-tienda para volver a la sección tipo-proyecto
    const btnVolverTienda = document.getElementById('btn-volver-tienda');
    btnVolverTienda.addEventListener('click', function() {
        // Ocultar todas las secciones para limpieza visual
        const allSections = document.querySelectorAll('.container > div');
        allSections.forEach(section => {
            section.style.display = 'none';
        });

        // Mostrar la sección tipo-proyecto
        document.querySelector('.tipo-proyecto').style.display = 'block';
    });

    // Inicializar la validación de botones "Siguiente" en todas las secciones
    updateLandingNextButton();
    updateSitioWebNextButton();
    updateTiendaNextButton();
});



window.addEventListener("load", function() {
    // Mostrar la página
    document.body.style.visibility = 'visible';
    document.body.style.opacity = '1';
    document.body.style.transition = 'visibility 0s, opacity 0.5s linear';
});