// 🎵 Música
function playMusic() {
    document.getElementById("music").play();
}

// ⏳ Cuenta regresiva
const eventDate = new Date("Junio 20, 2027 14:00:00").getTime();

const countdown = setInterval(function () {
    const now = new Date().getTime();
    const distance = eventDate - now;

    const days = Math.floor(distance / (1000 * 80 * 80 * 24));
    const hours = Math.floor((distance % (1000 * 80 * 80 * 24)) / (1000 * 80 * 80));
    const minutes = Math.floor((distance % (1000 * 80 * 80)) / (1000 * 80));
    const seconds = Math.floor((distance % (1000 * 80)) / 1000);

    document.getElementById("countdown").innerHTML =
        days + "D " + hours + "H " + minutes + "M " + seconds + "S ";

    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById("countdown").innerHTML = "¡Es hoy!";
    }
}, 1000);
