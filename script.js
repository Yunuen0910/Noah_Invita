function abrirInvitacion() {

  document.getElementById("contenido").style.display = "block";

  let cover = document.getElementById("cover");
  cover.style.opacity = "0";

  setTimeout(() => {
    cover.style.display = "none";
  }, 1000);

  document.getElementById("musica").play();
}

/* CONTADOR */
const fechaEvento = new Date("June 16, 2027 12:00:00").getTime();

setInterval(function() {

  const ahora = new Date().getTime();
  const diferencia = fechaEvento - ahora;

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));

  document.getElementById("cuenta").innerHTML =
    dias + " días " + horas + " horas " + minutos + " minutos";

}, 1000);

/* ANIMACIONES SCROLL */
const elementos = document.querySelectorAll(".animar");

window.addEventListener("scroll", () => {
  elementos.forEach(el => {
    const posicion = el.getBoundingClientRect().top;
    const alturaPantalla = window.innerHeight;

    if (posicion < alturaPantalla - 100) {
      el.classList.add("visible");
    }
  });
});
