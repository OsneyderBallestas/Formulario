document.addEventListener("DOMContentLoaded", function() {
    // Inicializar variables y funciones comunes
    const steps = document.querySelectorAll(".form-step");
    let currentStep = 0;

    function showStep(step) {
        steps.forEach((step, index) => {
            step.style.display = index === currentStep ? "block" : "none";
        });
    }

    function nextStep() {
        if (currentStep < steps.length - 1) {
            currentStep++;
            showStep(currentStep);
        }
    }

    function prevStep() {
        if (currentStep > 0) {
            currentStep--;
            showStep(currentStep);
        }
    }

    // Asignar eventos a los botones de navegación
    const btnNext = document.querySelectorAll(".arrow-container .arrow#btn-next");
    const btnPrev = document.querySelectorAll(".arrow-container .arrow#btn-prev");

    btnNext.forEach(button => button.addEventListener("click", nextStep));
    btnPrev.forEach(button => button.addEventListener("click", prevStep));

    // Inicializar vista
    showStep(currentStep);

    // Asignar evento al botón de inicio si existe
    const startButton = document.getElementById("btn-inicio");
    if (startButton) {
        startButton.addEventListener("click", nextStep);
    }

    // Asignar eventos a los botones de selección de proyecto
    const btnLandingPage = document.getElementById("btn-landing-page");
    const btnSitioWeb = document.getElementById("btn-sitio-web");
    const btnTiendaOnline = document.getElementById("btn-tienda-online");

    if (btnLandingPage) {
        btnLandingPage.addEventListener("click", () => {
            window.location.href = 'landing.html';
        });
    }

    if (btnSitioWeb) {
        btnSitioWeb.addEventListener("click", () => {
            window.location.href = 'sitioweb.html';
        });
    }

    if (btnTiendaOnline) {
        btnTiendaOnline.addEventListener("click", () => {
            window.location.href = 'tiendaonline.html';
        });
    }
});
