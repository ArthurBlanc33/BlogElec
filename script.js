
    document.addEventListener("DOMContentLoaded", function () {
        const sidebar = document.querySelector(".sidebar");
        const toggleButton = document.querySelector("#toggle-sidebar");

        toggleButton.addEventListener("click", function () {
            sidebar.classList.toggle("hidden-sidebar");

            if (sidebar.classList.contains("hidden-sidebar")) {
                toggleButton.textContent = "📂";
                toggleButton.style.right = "0"; // Déplace le bouton à droite
                toggleButton.style.borderRadius = "5px 0px 0px 5px"; // Arrondi à droite
            } else {
                toggleButton.textContent = "❌";
                toggleButton.style.right = "300px"; // Repositionne le bouton à gauche
                toggleButton.style.borderRadius = "5px 0 0 5px"; // Arrondi à gauche
            }
        });
    });

