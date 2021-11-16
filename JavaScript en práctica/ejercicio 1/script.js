//Variables del Formulario
let form = document.getElementById('formulario');

//Funciones
form.addEventListener ('submit', function (event){
    event.preventDefault();
    limpiarErrores ();
    let textNombre = document.querySelector(".textNombre").value
    let textAsunto = document.querySelector(".textAsunto").value
    let textMensaje = document.querySelector(".textMensaje").value

    let resultado = validar(textNombre, textAsunto, textMensaje)

    if(resultado == true) {
        exito ();
    }
})

    function limpiarErrores() {
        document.querySelector(".resultado").innerHTML = "";
        document.querySelector(".errorNombre").innerHTML = "";
        document.querySelector(".errorAsunto").innerHTML = "";
        document.querySelector(".errorMensaje").innerHTML = "";
    }

    function exito (){
        document.querySelector(".resultado").innerHTML ="Se ha enviado con exito"
    }

// validación
    function validar (nombre, asunto, mensaje){ 
        let valido = true
        let validacionNombre = /[a-zA-Z]/gim;

        if(validacionNombre.test(nombre) == false){
        document.querySelector(".errorNombre").innerHTML = "Debe Ingresar su nombre"
        valido = false
    }

    let validacionAsunto = /[a-zA-Z]/gim;
    if(validacionAsunto.test(asunto) == false){
        document.querySelector(".errorAsunto").innerHTML = "Debe Ingresar el asunto"
        valido = false
    }

        let validacionMensaje = /([a-zA-Z0-9 ])\w+/;
        if(validacionMensaje.test(mensaje) == false){
            document.querySelector(".errorMensaje").innerHTML = "Debe Ingresar el mensaje"
            valido = false
        }

    return valido 
    }
