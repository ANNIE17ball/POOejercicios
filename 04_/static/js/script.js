let asistencia = [];

function registrarAlumno() {
    const container = document.getElementById(`resultado1`);
    const parrafo = document.getElementById(`pantalla1`);
    let input = document.getElementById(`val1`).value; // capturar valor del input
    //input = parseInt(input); --> Transformar a numero
    if (input !== "") {
        asistencia.push(input);
    }

    parrafo.innerHTML = `Alumnos presentes: <br> ${asistencia.join(`<br>`)}`;
    container.classList.remove(`d-none`);
    document.getElementById(`val1`).value = "";
}

// ejercicio dos
let pacientes = ["Carlos", "María", "Diego"];
function ingresarUrgencia() {
    const container = document.getElementById(`resultado2`);
    const parrafo = document.getElementById(`pantalla2`);
    let input = document.getElementById(`val2`).value; // capturar valor del input

    if (input !== "") {
        if (!pacientes.includes(input)) {
            pacientes.unshift(input);
        } else {
            alert(`El nombre ${input} ya ha sido ingresado`);
        }
    }

    parrafo.innerHTML = `Próximos a atender:  <br> ${pacientes.join(` `)}`;
    container.classList.remove(`d-none`);
    document.getElementById(`val2`).value = "";
}

//ejercicio tres
let entregas = ["Pizza", "Sushi", "Hamburguesa", "Ensalada"];
function gestionarPedidos() {
    const container = document.getElementById(`resultado3`);
    const parrafo = document.getElementById(`pantalla3`);
    let input = document.getElementById(`val3`).value; // capturar valor del input
    input.toLowerCase()

    if (input == "despachar") {
        entregas.shift()
    } else if (input == "cancelar") {
        entregas.pop()
    } else if (input == "ingresar") {
        let ingreso = prompt("Ingrese pedido");
        if (ingreso == "") {
            alert("Por favor ingresar elemento valido")
        } else {
            entregas.push(ingreso)
        }
    } else {
        alert("Por favor ingresar elemento valido")
    }

    parrafo.innerHTML = `Pedidos pendientes: ${entregas.join(`, `)}`;
    container.classList.remove(`d-none`);
    document.getElementById(`val3`).value = "";
}

// ejercicio cuatro
let codigosValidos = ["VERANO2026", "PROMO50", "CLIENTEVIP"];
function verificarCodigo() {
    let mensaje = "Código inválido o expirado";

    const container = document.getElementById(`resultado4`);
    const parrafo = document.getElementById(`pantalla4`);
    let input = document.getElementById(`val4`).value;
    input.toUpperCase()

    for (let i = 0; i < codigosValidos.length; i++) {
        if (input == codigosValidos[i]) {
            mensaje = "¡Éxito! Código aceptado";
            break;
        }
    }

    parrafo.innerHTML = mensaje;
    container.classList.remove(`d-none`);
    document.getElementById(`val4`).value = "";
}

// ejercicio cinco (no entendi)
function simularCuotas() {
    const container = document.getElementById(`resultado5`);
    const parrafo = document.getElementById(`pantalla5`);
    let producto = document.getElementById(`val51`).value;

    let registroPagos = "";
    for (let i = 1; i <= 3; i++) {
        registroPagos += producto + " - Cuota " + i + " | ";
    }

    parrafo.innerHTML = registroPagos;
    container.classList.remove(`d-none`);
    document.getElementById(`val5`).value = "";
}

// ejercicio seis
let vitrina = [2500, 15000, 8000, 30000, 5000];
function filtrarPrecios() {
    const container = document.getElementById(`resultado6`);
    const parrafo = document.getElementById(`pantalla6`);
    let input = document.getElementById(`val6`).value;
    let inp = parseInt(input);

    let opciones = "Te alcanza para los precios: ";
    let alcanza = [];

    for (let i = 0; i < vitrina.length; i++) {
        if (inp >= vitrina[i]) {
            alcanza.push(vitrina[i])
        } else {
            continue;
        }
    }

    if (alcanza.length !== 0) {
        parrafo.textContent = opciones + " " + alcanza.join("  ");
    } else {
        parrafo.textContent = "Lo sentimos no te alcanza nada...";
    }

    container.classList.remove(`d-none`);
    document.getElementById(`val6`).value = "";
}

//ejercicio siete
function calcularDescuentos(bruto) {
    return bruto * 0.8;  // Descuenta el 20% (AFP y Salud)
}

function procesarSueldo() {
    const container = document.getElementById(`resultado7`);
    let pantalla = document.getElementById('pantalla7');
    let sueldoBruto = document.getElementById('val7').value;
    sueldoBruto = Number(sueldoBruto);
    
    let sueldoLiquido = calcularDescuentos(sueldoBruto);

    pantalla.textContent = "Tu sueldo a pago es: $" + sueldoLiquido;
    container.classList.remove(`d-none`);
    document.getElementById('val7').value = '';
}

// ejercicio ocho
let carrito = [];
function actualizarPantalla() {
    const container = document.getElementById(`resultado8`);
    let pantalla = document.getElementById('pantalla8');
    let sueldoBruto = document.getElementById('val8').value;
    sueldoBruto = Number(sueldoBruto);
    
    let sueldoLiquido = calcularDescuentos(sueldoBruto);

    pantalla.textContent = "Tu sueldo a pago es: $" + sueldoLiquido;
    container.classList.remove(`d-none`);
    document.getElementById('val7').value = '';
}