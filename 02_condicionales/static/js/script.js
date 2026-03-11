function edad() {
    let anos = parseInt(prompt("Cual es tu edad??"));

    if (anos >= 18) {
        alert("Acceso permitido a la App");
    } else if (anos < 18 && anos > 0) {
        alert("Acceso denegado: necesitas ser mayor de edad");
    } else {
        alert("No valido...")
    }
};

function nombre() {
    let nombre = prompt("Cual es tu nombre??");
    let usuarios = [];

    if (nombre !== "") {
        usuarios.push(nombre);
        alert(`${usuarios}`)
    } else {
        alert("Error: El nombre no puede estar en blanco");
    }
}

function lista() {
    let productos = ["celular", "teclado", "mouse"];
    let nuevoProducto = prompt("Qué vas a guardar hoy?");

    if (!productos.includes(nuevoProducto)) {
        productos.push(nuevoProducto);
        alert(productos.join(" "))
    } else {
        alert("El producto ya está en el inventario")
    }
}

// ejercicio cuatro
let bodega = ["caja1", "caja2", "caja3", "caja4", "caja5", "caja6"];
function stock() {
    if (bodega.length > 5) {
        alert("Bodega llena");
        let borrar = prompt(`Cuantos elementos vas a borrar (max : ${bodega.length})`);
        if (borrar <= bodega.length) {
            for (let i = 1; i <= borrar; i++) {
                bodega.pop();
            }
        } else {
            alert("Limite excedido");
        }
    } else {
        alert("Espacio disponible");
        let ingreso = prompt("Qué vas a guardar?");
        bodega.push(ingreso);
    }
}

// ejercicio cinco
let colaEspera = ["error_404", "Juan", "Sofía"];
function error() {
    if (colaEspera[0] == "error_404") {
        colaEspera.shift();
        alert(colaEspera.join(" "));
    } else if (colaEspera[0] != "error_404") {
        alert("La lista de espera está correcta");
    }
}

// ejercicio seis
function vip() {
    let foro = ["User1", "User2"];

    let usuario = prompt("Por favor ingresar usuario");

    if (usuario != "") {
        let rol = prompt("Por favor ingresar rol");
        rol.toLowerCase;
        if (rol == "admin") {
            foro.unshift(usuario);
        } else {
            foro.push(usuario);
        }

        alert(foro.join(" "))
    } else {
        alert("Error");
    }
}

// ejercicio siete
function cal() {
    let nota = parseFloat(prompt("Por favor ingresa tu nota"));

    if (nota <= 7.0 && nota >= 6.0) {
        alert("Excelente, eximido");
    } else if (nota >= 4.0 && nota <= 5.9) {
        alert("Aprobado, vas a examen");
    } else if (nota <= 4.0 && nota >= 1.0) {
        alert("Reprobado");
    } else {
        alert("No valido...")
    }
}

// ejercicio ocho
function invitacion() {
    let invitados = ["Ana", "Luis", "Camila", "Diego"];
    let you = prompt("Ingresa el nombre para pasar");

    if (invitados.includes(you) == 1) {
        alert(`¡Bienvenido/a ${you}! Pasa a la fiesta`);
    } else {
        alert("Lo siento, no estás en la lista de invitados");
    }
}

// ejercicio nueve
function matriz() {
    let estanteria = [["Manzanas", "Peras"], ["Leche", "Yogur"]];
    let seccion = parseInt(prompt("Ingresa una seccion por favor"));

    if (seccion == 0 || seccion == 1) {
        let producto = prompt("Ingrese producto solicitado");
        if (estanteria[seccion].includes(producto)) {
            alert("Producto encontrado en el estante")
        } else {
            alert("Lo sentimos, ahora mismo no se encuentra ese producto en nuestra sección");
        }
    } else {
        alert("Lo sentimos, ahora mismo no se encuentra esa sección");
    }
}

// ejercicio diez
let bitacora = [];
function bit() {
    let nombreVisita = prompt("Por favor ingresa tu nombre");
    let esVip = prompt("Eres VIP (solo si o no)");
    esVip.toLowerCase;

    if (nombreVisita != "") {
        if (esVip == "si") {
            bitacora.unshift(nombreVisita);
        } else if (esVip == "no") {
            bitacora.push(nombreVisita);
        }
    } else {
        alert("Lo sentimos ha ocurrido un error...")
    }

    alert(bitacora.length);
}