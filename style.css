/* VARIABLES DE COLOR (Paleta de Noah) */
:root {
    --color-menta: #71DBD2;
    --color-crema: #EEFFDB;
    --color-verde-claro: #ADE4B5;
    --color-verde-lima: #D0EAA3;
    --color-amarillo: #FFF18C;
    --texto: #4A4A4A;
    --verde-oscuro: #6B705C;
}

body {
    margin: 0;
    font-family: 'Tangerine', cursive;
    background-color: var(--color-crema);
    overflow-x: hidden;
    color: var(--texto);
}

/* PORTADA (COVER) */
.cover {
    height: 100vh;
    width: 100%;
    /* Asegúrate de tener una imagen de fondo 'FONDO_ACUARELA.jpg' */
    background: url('FONDO_ACUARELA.jpg') center/cover no-repeat;
    background-color: var(--color-verde-claro); /* Backup */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    transition: opacity 1.2s ease, visibility 1.2s;
}

.cover-content {
    position: relative;
    z-index: 2;
    margin-bottom: 150px; /* Espacio para que el dino no tape el botón */
}

.subtitulo-caps {
    font-family: 'Montserrat', sans-serif;
    letter-spacing: 3px;
    text-transform: uppercase;
    font-size: 0.7rem;
    margin: 0;
}

.cover h1 {
    font-size: 5.5rem;
    margin: 10px 0;
    color: var(--verde-oscuro);
}

.cover button {
    padding: 18px 50px;
    background-color: var(--color-menta);
    border: none;
    color: white;
    border-radius: 30px;
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;
    font-size: 0.9rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    transition: transform 0.3s ease;
}

.cover button:hover {
    transform: scale(1.05);
}

.dino-principal {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 250px;
    z-index: 1;
}

/* CONTENIDO */
#contenido {
    display: none;
}

section {
    min-height: 80vh; /* Secciones más cortas para efecto scroll */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    padding: 40px 20px;
}

.card {
    background-color: white;
    padding: 40px 30px;
    border-radius: 25px;
    width: 85%;
    max-width: 400px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
}

.card h2 {
    font-size: 3.5rem;
    margin: 10px 0;
    color: var(--color-menta);
}

.card p {
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
    line-height: 1.6;
}

.detalle {
    width: 50px;
    height: 3px;
    background-color: var(--color-verde-lima);
    margin: 10px auto 20px auto;
}

/* GRIDS Y EVENTOS */
.grid-familia {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    margin-top: 20px;
}

@media (min-width: 600px) {
    .grid-familia { grid-template-columns: 1fr 1fr; }
}

.grid-familia h3 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 1.1rem;
    margin-bottom: 5px;
    color: var(--verde-oscuro);
}

.grid-familia p {
    margin: 0;
    font-size: 0.95rem;
}

.info-evento {
    margin-top: 20px;
}

.info-evento p {
    margin: 5px 0;
}

/* BOTONES */
.btn-mapa {
    display: inline-block;
    text-decoration: none;
    padding: 10px 20px;
    background-color: var(--color-verde-claro);
    color: white;
    border-radius: 20px;
    margin-top: 15px;
    font-family: 'Montserrat', sans-serif;
    font-size: 0.8rem;
    transition: background-color 0.3s;
}

.btn-confirmar {
    display: inline-block;
    text-decoration: none;
    padding: 15px 35px;
    background-color: var(--color-menta);
    color: white;
    border-radius: 30px;
    margin-top: 25px;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    letter-spacing: 1px;
    transition: background-color 0.3s;
}

.btn-mapa:hover, .btn-confirmar:hover {
    background-color: var(--verde-oscuro);
}

/* FOTOS */
.foto-grande {
    width: 100%;
    max-width: 800px;
    height: auto;
    object-fit: cover;
    border-radius: 15px;
}

.foto-mediana {
    width: 60%;
    max-width: 300px;
    height: auto;
    object-fit: cover;
    border-radius: 50%; /* Foto redonda para el bebé solo */
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

/* CONTADOR */
#cuenta {
    font-family: 'Tangerine', cursive;
    font-size: 2.8rem;
    color: var(--verde-oscuro);
}

/* ANIMACIONES */
.animar {
    opacity: 0;
    transform: translateY(30px);
    transition: all 1s ease;
}

.animar.visible {
    opacity: 1;
    transform: translateY(0);
}
