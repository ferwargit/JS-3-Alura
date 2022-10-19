/* const inputNacimiento = document.querySelector('#birth');

// console.log(inputNacimiento);

inputNacimiento.addEventListener('blur', (evento) => {
    // console.log(inputNacimiento.value);
    // console.log(evento.target);
    // console.log(evento.target.value);
    validarNacimiento(evento.target.value);
}); */

// dataset es la coleccion de todos los datas
// y el .tipo es para obtener el input del html
export function valida(input) {
    const tipoDeInput = input.dataset.tipo;
    if(validadores[tipoDeInput]) {
        validadores[tipoDeInput](input)
    }
}
// nacimiento va hacer una function que recibe input y va a llamar validarNacimiento
const validadores = {
    nacimiento: input => validarNacimiento(input)
}

function validarNacimiento(input) {
  const fechaCliente = new Date(input.value);
  let mensaje = "";
  if (!mayorDeEdad(fechaCliente)) {
    mensaje = "Debes tener al menos 18 años de edad";
  }

//   input.setCustomValidity(mensaje);
}

function mayorDeEdad(fecha) {
  const fechaActual = new Date();
  const diferenciaFechas = new Date(
    fecha.getUTCFullYear() + 18,
    fecha.getUTCMonth(),
    fecha.getUTCDate()
  );
  return diferenciaFechas <= fechaActual;
}
