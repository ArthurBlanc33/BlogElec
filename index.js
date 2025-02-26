console.log("script.js loaded");
document.addEventListener("DOMContentLoaded", function() {
    let burger = document.getElementById('menuIcon');
    let navLinks = document.getElementById('navLinks');

    burger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        console.log('Menu toggled');
    });
});
