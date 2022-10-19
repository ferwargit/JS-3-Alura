import { valida } from "./validaciones.js";

// Para que seleccione todos los inputs
const inputs = document.querySelectorAll('input');

// Me devuelve un arreglo que podemo iterar
inputs.forEach( input => {
    input.addEventListener('blur', (input) => {
        valida(input.target);
    });
});