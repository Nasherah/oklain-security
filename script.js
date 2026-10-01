const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");

if (menuButton && navMenu) {
    menuButton.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });
}

const quotationForm = document.getElementById("quotationForm");

if (quotationForm) {
    quotationForm.addEventListener("submit", function (event) {
        event.preventDefault();

        alert("Thank you. Your quotation request has been received.");

        quotationForm.reset();
    });
}

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        if (navMenu) {
            navMenu.classList.remove("active");
        }
    });
});