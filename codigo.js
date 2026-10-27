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
        mostrar('div2');
    }
}

function Inicio1() {
    let usuario = document.getElementById("usuario1").value;
    let password = document.getElementById("password1").value;
    let Usuario1 = false;
    let password1 = false;
    if (usuario === "" || password === "") {
        alert("No pueden haber casillas vacias");
        return;
    }
    for (let i = 0; i < arrayDeUsuario.length; i++) {
        if (usuario === arrayDeUsuario[i]) {
            Usuario1 = true;
            if (password === arraydeContra[i]) {
                password1 = true;
                break;
            }
        }
    }
    if (Usuario1 && password1) {
        alert("Bienvenido " + usuario);
        window.location = "inicio.html";
    } else if (Usuario1 && !password1) {
        alert("Contraseña Incorrecta");
    } else if (!Usuario1 && password1) {
        alert("Usuario Incorrecto");
    } else {
        alert("Datos Incorrectos");
    }
}

function mostrar(id) {
    if (id === 'div2') {
        document.getElementById("div1").className = "oculto";
        document.getElementById("div2").className = "visible";
    } 
    else if (id === 'div1') {
        document.getElementById("div1").className = "visible";
        document.getElementById("div2").className = "oculto";
    }
    else {
        if (variableregistro == 0) {

        } else if (variableregistro == 1) {
            document.getElementById("div1").className = "oculto";
            document.getElementById("div2").className = "oculto";
            document.getElementById(id).className = "visible";
        }
    }
}