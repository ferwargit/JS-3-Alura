const inputNacimiento = document.querySelector('#birth');

// console.log(inputNacimiento);

inputNacimiento.addEventListener('blur', (evento) => {
    // console.log(inputNacimiento.value);
    // console.log(evento.target);
    // console.log(evento.target.value);
    validarNacimiento(evento.target.value);
});

function validarNacimiento(input) {
    const fechaCliente = new Date(input);
    let mensaje = "";
    if (!mayorDeEdad(fechaCliente)) {
      mensaje = "Debes tener al menos 18 años de edad";
    }
  
    inputNacimiento.setCustomValidity(mensaje);
}

function mayorDeEdad(fecha) {
    const fechaActual = new Date();
    console.log(fechaActual);
    console.log(fecha);
    console.log(fecha,' ***** ',fechaActual);
    const diferenciaFechas = new Date(
        fecha.getUTCFullYear() + 18, 
        fecha.getUTCMonth(), 
        fecha.getUTCDate());
    // console.log(diferenciaFechas);
    // console.log(diferenciaFechas <= fechaActual);
    return diferenciaFechas <= fechaActual;
}