const portada = document.getElementById("portada");
const botonAbrir = document.getElementById("botonAbrir");
const musica = document.getElementById("musica");

botonAbrir.addEventListener("click", function () {

    // Intentar iniciar música después de la interacción del usuario
    musica.play().catch(function () {
        console.log("La música necesita activarse manualmente.");
    });

    // Animación de salida
    portada.classList.add("abierta");

    // Habilitar desplazamiento
    setTimeout(function () {

        document.body.style.overflow = "auto";

    }, 500);

});
