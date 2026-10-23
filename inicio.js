const imagenes = document.querySelectorAll(".carrusel img");
let actual = 0;

setInterval(() => {
    imagenes[actual].classList.remove("activo");

    actual = (actual + 1) % imagenes.length;

    imagenes[actual].classList.add("activo");
}, 5000);
