document.addEventListener("DOMContentLoaded", function() {
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
            const currentHeading = document.querySelector('.form-step:nth-child(' + (currentStep + 1) + ') h4').innerText;
            if (currentHeading === "Datos de Contacto") {
                // Redirigir a la sección de "¿Qué tipo de proyecto te interesa?"
                currentStep = 1; // Suponiendo que la sección de "¿Qué tipo de proyecto te interesa?" es la segunda (índice 1)
            } else {
                currentStep--;
            }
            showStep(currentStep);
        }
    }

    const btnNext = document.querySelectorAll(".arrow-container .arrow#btn-next");
    const btnPrev = document.querySelectorAll(".arrow-container .arrow#btn-prev");

    btnNext.forEach(button => button.addEventListener("click", nextStep));
    btnPrev.forEach(button => button.addEventListener("click", prevStep));

    // Initial setup
    showStep(currentStep);

    // Add event listener to the start button
    const startButton = document.getElementById("btn-inicio");
    startButton.addEventListener("click", function() {
        nextStep();
    });

    // Add event listener to the Landing Page button
    const landingPageButton = document.getElementById("btn-landing-page");
    landingPageButton.addEventListener("click", function() {
        window.location.href = "landing.html";
    });

    // Add event listener to the Sitio Web Informativo button
    const sitioWebButton = document.getElementById("btn-sitio-web");
    sitioWebButton.addEventListener("click", function() {
        window.location.href = "sitioweb.html";
    });

    // Add event listener to the Tienda Online button
    const tiendaOnlineButton = document.querySelector(".button-group button:nth-child(3)");
    tiendaOnlineButton.addEventListener("click", function() {
        window.location.href = "tiendaonline.html";
    });
});
