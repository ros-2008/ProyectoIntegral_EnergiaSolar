var arrayDeUsuario = JSON.parse(localStorage.getItem("soltech_usuarios")) || [];
var arraydeContra = JSON.parse(localStorage.getItem("soltech_contras")) || [];
var variableregistro = arrayDeUsuario.length > 0 ? 1 : 0;

function Inicio() {
    let usuario = document.getElementById("usuario").value.trim();
    let password = document.getElementById("password").value.trim();

    if (usuario === "" || password === "") {
        alert("No pueden haber casillas vacías");
        return;
    }

    arrayDeUsuario.unshift(usuario);
    arraydeContra.unshift(password);

    localStorage.setItem("soltech_usuarios", JSON.stringify(arrayDeUsuario));
    localStorage.setItem("soltech_contras", JSON.stringify(arraydeContra));

    document.getElementById("usuario").value = "";
    document.getElementById("password").value = "";

    alert("Registrado");
    variableregistro = 1;
    mostrar("div2");
}

function Inicio1() {
    let usuario = document.getElementById("usuario1").value.trim();
    let password = document.getElementById("password1").value.trim();

    if (usuario === "" || password === "") {
        alert("No pueden haber casillas vacías");
        return;
    }

    let usuarioEncontrado = false;
    let credencialesValidas = false;

    for (let i = 0; i < arrayDeUsuario.length; i++) {
        if (usuario === arrayDeUsuario[i]) {
            usuarioEncontrado = true;
            if (password === arraydeContra[i]) {
                credencialesValidas = true;
                break;
            }
        }
    }

    if (credencialesValidas) {
        alert("Bienvenido " + usuario);
        window.location.href = "inicio.html";
    } else if (usuarioEncontrado) {
        alert("Contraseña incorrecta");
    } else {
        alert("Usuario no encontrado o datos incorrectos");
    }
}

function mostrar(id) {
    if (id === "div2") {
        document.getElementById("div1").className = "oculto";
        document.getElementById("div2").className = "visible";
    } else if (id === "div1") {
        document.getElementById("div1").className = "visible";
        document.getElementById("div2").className = "oculto";
    } else if (variableregistro === 1 && document.getElementById(id)) {
        document.getElementById("div1").className = "oculto";
        document.getElementById("div2").className = "oculto";
        document.getElementById(id).className = "visible";
    }
}