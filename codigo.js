var arrayDeUsuario = [];
var arraydeContra = [];
var variableregistro = 0;



function Inicio() {
    let usuario = document.getElementById("usuario").value;
    let password = document.getElementById("password").value;
    arrayDeUsuario.unshift(usuario)
    arraydeContra.unshift(password)
    if (usuario == "" || password == "") {
        alert("No pueden haber casillas vacias")
    } else {
        alert("Registrado")
        variableregistro = 1;
    }
}

function Inicio1() {
    let usuario = document.getElementById("usuario1").value;
    let password = document.getElementById("password1").value;
    for (let i = 0; i < arrayDeUsuario.length; i++) {
        if (usuario == arrayDeUsuario[i] && password == arraydeContra[i]) {
            alert("Bienvenido " + usuario)
            window.location = "inicio.html";
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
    if (variableregistro == 0) {
        
    }else if (variableregistro == 1) {
            document.getElementById("div1").className = "oculto";
    document.getElementById("div2").className = "oculto";
    document.getElementById(id).className = "visible";
    }

}