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
/* CONFIGURACIÓN DE LA FECHA */
// Edita solo esta línea para cambiar la fecha de toda la invitación
const fechaEventoString = "June 16, 2027 12:00:00"; 
const fechaEvento = new Date(fechaEventoString).getTime();

function actualizarContador() {
    const ahora = new Date().getTime();
    const diferencia = fechaEvento - ahora;

    // Ponemos la fecha legible debajo del contador
    // Esto lo convierte a algo como "16 de junio de 2027"
    const opciones = { day: 'numeric', month: 'long', year: 'numeric' };
    const fechaLegible = new Date(fechaEventoString).toLocaleDateString('es-ES', opciones);
    document.getElementById("fecha-texto").innerHTML = fechaLegible;

    if (diferencia <= 0) {
        document.getElementById("cuenta").innerHTML = "¡Es hoy!";
        return;
    }

    const d = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const h = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diferencia % (1000 * 60)) / 1000);

    document.getElementById("cuenta").innerHTML = `
        ${d}d | ${h.toString().padStart(2, '0')}h | 
        ${m.toString().padStart(2, '0')}m | 
        ${s.toString().padStart(2, '0')}s
    `;
}

// Iniciar el intervalo
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

