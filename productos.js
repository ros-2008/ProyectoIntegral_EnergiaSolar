let carrito = [];


// AGREGAR PRODUCTOS

function agregarCarrito(producto) {
    let existente = carrito.find(item => item.nombre === producto);
    if (existente) {
        existente.cantidad++;
    } else {
        carrito.push({
            nombre: producto,
            cantidad: 1
        });
    }
    actualizarCarrito();
    document.getElementById("cart-panel").classList.add("activo");
    document.getElementById("cart-overlay").classList.add("activo");
}


// ACTUALIZAR CARRITO

function actualizarCarrito() {

    let contenedor = document.getElementById("cart-items");
    let contador = document.getElementById("cart-count");
    let total = document.getElementById("cart-total");
    // CALCULAR CANTIDAD TOTAL

    let cantidadTotal = carrito.reduce(
        (suma, item) => suma + item.cantidad, 0
    );
    contador.textContent = cantidadTotal;
    // COMPROBAR SI ESTÁ VACÍO

    if (carrito.length === 0) {

        contenedor.innerHTML =
            '<p class="cart-empty">Tu carrito está vacío.</p>';

    } else {
        contenedor.innerHTML = "";
        carrito.forEach((item, index) => {
            contenedor.innerHTML += `
                <div class="cart-item">
                    <div>
                        <h3>${item.nombre}</h3>
                        <p>Cantidad: ${item.cantidad}</p>

                    </div>
                    <div class="cart-controls">

                        <button onclick="cambiarCantidad(${index}, -1)">
                            −
                        </button>
                        <button onclick="cambiarCantidad(${index}, 1)">
                            +
                        </button>

                        <button onclick="eliminarProducto(${index})">

                            <i class="fa-solid fa-trash"></i>

                        </button>
                    </div>
                </div>
            `;
        });
    }


    total.textContent = "Productos seleccionados: " + cantidadTotal;

}


function cambiarCantidad(index, cambio) {
    carrito[index].cantidad += cambio;
    if (carrito[index].cantidad <= 0) {

        carrito.splice(index, 1);

    }
    actualizarCarrito();
}

function eliminarProducto(index) {
    carrito.splice(index, 1);
    actualizarCarrito();
}


function toggleCart() {

    document.getElementById("cart-panel").classList.toggle("activo");
    document.getElementById("cart-overlay").classList.toggle("activo");
}

