function abrirInvitacion() {
    const contenido = document.getElementById("contenido");
    const cover = document.getElementById("cover");
    const musica = document.getElementById("musica");

    // Mostramos el contenido
    contenido.style.display = "block";
    
    // Desvanecemos la portada
    cover.style.opacity = "0";
    setTimeout(() => {
        cover.style.visibility = "hidden";
        iniciarScroll(); // Activamos el efecto scroll
    }, 1200);

    // Intentamos reproducir la música
    if (musica) {
        musica.play().catch(e => console.log("Audio en espera de interacción."));
    }
}

/* CONTADOR DINÁMICO (Sube tu fecha real aquí) */
const fechaEvento = new Date("June 16, 2027 12:00:00").getTime();

function actualizarContador() {
    const ahora = new Date().getTime();
    const diferencia = fechaEvento - ahora;

    if (diferencia <= 0) {
        document.getElementById("cuenta").innerHTML = "¡Es hoy!";
        return;
    }

    const d = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const h = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diferencia % (1000 * 60)) / 1000); // Añadimos segundos

    // Usamos padStart para que siempre haya 2 dígitos (ej: "09" en lugar de "9")
    document.getElementById("cuenta").innerHTML = `
        ${d}d | ${h.toString().padStart(2, '0')}h | 
        ${m.toString().padStart(2, '0')}m | 
        ${s.toString().padStart(2, '0')}s
    `;
}

setInterval(actualizarContador, 1000);
actualizarContador();

/* ANIMACIONES SCROLL (Intersection Observer) */
function iniciarScroll() {
    const elementos = document.querySelectorAll(".animar");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.1 }); // Se activa cuando el 10% del elemento es visible

    elementos.forEach(el => observer.observe(el));
}
