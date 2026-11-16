let carrito = [];

function formatoPrecio(precio) {

    return new Intl.NumberFormat("es-GT", {
        style: "currency",
        currency: "GTQ",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(precio);

}


// AGREGAR PRODUCTOS
function agregarCarrito(producto, precio) {

    let existente = carrito.find(item => item.nombre === producto);
    if (existente) {

        existente.cantidad++;
    } else {

        carrito.push({
            nombre: producto,
            precio: precio,
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
    let cantidad = document.getElementById("cart-quantity");


    // CALCULAR CANTIDAD TOTAL
    let cantidadTotal = carrito.reduce(
        (suma, item) => suma + item.cantidad, 0
    );

    // CALCULAR PRECIO TOTAL

    let precioTotal = carrito.reduce(
        (suma, item) => suma + (item.precio * item.cantidad), 0
    );

    // ACTUALIZAR CONTADOR
    contador.textContent = cantidadTotal;

    // ACTUALIZAR TOTAL Y CANTIDAD
    total.textContent = "Total: " + formatoPrecio(precioTotal);
    cantidad.textContent = "Productos seleccionados: " + cantidadTotal;


    // COMPROBAR SI ESTÁ VACÍO
    if (carrito.length === 0) {
        contenedor.innerHTML =
            '<p class="cart-empty">Tu carrito está vacío.</p>';

    } else {
        contenedor.innerHTML = "";
        // MOSTRAR PRODUCTOS

        carrito.forEach((item, index) => {
            let subtotal = item.precio * item.cantidad;
            contenedor.innerHTML += `
                <div class="cart-item">

                    <div>

                        <h3>${item.nombre}</h3>

                        <p>Precio unitario: ${formatoPrecio(item.precio)}</p>

                        <p>Cantidad: ${item.cantidad}</p>

                        <p>
                            <strong>
                                Subtotal: ${formatoPrecio(subtotal)}
                            </strong>
                        </p>

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
}

// CAMBIAR CANTIDAD DE PRODUCTOS
function cambiarCantidad(index, cambio) {

    carrito[index].cantidad += cambio;
    if (carrito[index].cantidad <= 0) {
        carrito.splice(index, 1);
    }
    actualizarCarrito();
}

// ELIMINAR PRODUCTOS
function eliminarProducto(index) {

    carrito.splice(index, 1);

    actualizarCarrito();

}

// ABRIR Y CERRAR CARRITO
function toggleCart() {

    document.getElementById("cart-panel").classList.toggle("activo");

    document.getElementById("cart-overlay").classList.toggle("activo");

}
actualizarCarrito();
