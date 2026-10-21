var arrayDeUsuario = [];
var arraydeContra = [];

function Inicio() {
    let usuario = document.getElementById("usuario").value;
    let password = document.getElementById("password").value;
    arrayDeUsuario.unshift(usuario)
    arraydeContra.unshift(password)
    if (usuario == "" || password == "") {
        alert("No pueden haber casillas vacias")
    } else {
        alert("Registrado")
    }
}

function Inicio1() {
    let usuario = document.getElementById("usuario1").value;
    let password = document.getElementById("password1").value;
    for (let i = 0; i < arrayDeUsuario.length; i++) {
        if (usuario == arrayDeUsuario[i] && password == arraydeContra[i]) {
            alert("Bienvenido " + usuario)
        } else if (usuario != arrayDeUsuario[i] && password == arraydeContra[i]) {
            alert("Usuario Incorrecto")
        } else if (usuario == arrayDeUsuario[i] && password != arraydeContra[i]) {
            alert("Contraseña Incorrecta")
        } else if (usuario == "" || password == "") {
            alert("No pueden haber casillas vacias")
        }else {
            alert("datos incorrectos");
        }
    }
}

function mostrar(id) {
    document.getElementById("div1").className = "oculto";
    document.getElementById("div2").className = "oculto";
    document.getElementById(id).className = "visible";
}