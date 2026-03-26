function verificarNumero() {
    let contenedor = document.getElementById(`resultado1`);
    let resultado = document.getElementById(`pantalla1`);
    let input = document.getElementById(`val1`);

    // transformar a numero el input
    let num = parseInt(input.value);

    if (input.value == "") {
        resultado.textContent = `Por favor ingresar un número`;
    } else {
        if (isNaN(num) || num == "") {
            resultado.textContent = `Por favor ingresar un elemento valido`;
        } else {
            resultado.textContent = `El número ${num} ha sido ingresado correctamente ٩(^ᗜ^ )و ´-`;
        }
    }

    //mostrar container
    contenedor.classList.remove(`d-none`);
    document.getElementById(`val1`).value = "";
}

function evaluarNota() {
    let contenedor = document.getElementById(`resultado2`);
    let resultado = document.getElementById(`pantalla2`);
    let input = document.getElementById(`val2`);

    // estudiante
    let estudiante = document.getElementById(`nombre`).value;

    if (input.value == "") {
        resultado.textContent = `Por favor ingresar una nota`;
    } else {
        //Pasar a decimal
        let num = parseFloat(input.value);

        if (num == "" || isNaN(num)) {
            resultado.textContent = `Por favor ingresar un elemento valido`;
        } else {
            if (num >= 6.0 && num <= 7.0) {
                resultado.textContent = `El estudiante ${estudiante} tiene una nota sobresaliente (${num})`;
            } else if (num < 6.0 && num >= 4.0) {
                resultado.textContent = `El estudiante ${estudiante} tiene una nota aprobatoria (${num})`;
            } else if (num < 4.0 && num >= 1.0) {
                resultado.textContent = `El estudiante ${estudiante} tiene una nota reprobatoria (${num})`;
            } else {
                resultado.textContent = `El número ingresado no es valido`;
            }
        }
    }

    contenedor.classList.remove(`d-none`);
    document.getElementById(`val2`).value = "";
    document.getElementById(`nombre`).value = "";
}

// ejercicio tres
function calcularCuadrado(numero) {
    return numero * numero;
}

function calcularTriple(numero) {
    return numero * 3;
}

function procesarNumero() {
    let contenedor = document.getElementById(`resultado3`);
    let resultado = document.getElementById(`pantalla3`);
    let input = document.getElementById(`val3`)

    if (input.value == "") {
        resultado.textContent = `Por favor ingresar un número`;
    } else {
        let num = parseFloat(input.value);
        if (isNaN(num)) {
            resultado.textContent = `Por favor ingresar elemento valido`;
        } else {
            let cuadro = calcularCuadrado(num);
            let tres = calcularTriple(num);

            resultado.innerHTML = `⧽ El cuadrado de ${num} es ${cuadro} y su triple es de ${tres}`;
        }
    }

    contenedor.classList.remove(`d-none`);
    document.getElementById(`val3`).value = "";
}

function transformarTexto() {
    let contenedor = document.getElementById(`resultado4`);
    let resultado = document.getElementById(`pantalla4`);
    let input = document.getElementById(`val4`)

    if (input.value == "") {
        resultado.textContent = `Por favor ingresar elemento valido`;
    } else {
        if (input.value == input.value.toLowerCase()) {
            resultado.textContent = `Salida: ${input.value.toUpperCase()}`;
        } else if (input.value == input.value.toUpperCase()){
            resultado.textContent = `Salida: ${input.value.toLowerCase()}`;
        }
    }

    contenedor.classList.remove(`d-none`);
    document.getElementById(`val4`).value = "";
}