const imagenes = document.querySelectorAll(".carrusel img");
let actual = 0;

if (imagenes.length > 1) {
    const tieneActiva = Array.from(imagenes).some(img => img.classList.contains("activo"));
    if (!tieneActiva) {
        imagenes[0].classList.add("activo");
    }

    setInterval(() => {
        imagenes[actual].classList.remove("activo");
        actual = (actual + 1) % imagenes.length;
        imagenes[actual].classList.add("activo");
    }, 7000);
}