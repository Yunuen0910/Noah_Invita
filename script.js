function mostrarInvitacion() {
  document.querySelector(".inicio").scrollIntoView({
    behavior: "smooth"
  });

  // Forzar reproducción de música (por restricciones móviles)
  var audio = document.getElementById("musica");
  audio.play();
}
