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

function name() {
    let usuarios = [];
    let nombre = prompt("Cual es tu nombre??");

    if (nombre != null) {
        usuarios.push(nombre);
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
        bodega.pop();
        alert("Bodega llena, eliminando último ingreso");
    } else {
        alert("Espacio disponible");
        let ingreso = prompt("Qué vas a guardar?");
        bodega.push(ingreso);
    }
}

// ejercicio cinco
    let colaEspera = ["error_404", "Juan", "Sofía"];
function error(){
    if (colaEspera[0] == "error_404"){
        colaEspera.shift();
        alert(colaEspera.join(" "));
    } else if (colaEspera[0] != "error_404"){
        alert("La lista de espera está correcta");
    }
}

// ejercicio seis
function vip(){
    const contraAdmin = 123456;
    let foro = ["User1", "User2"];

    let usuario = prompt("Por favor ingresar usuario");
    let contra = parseInt(prompt("Por favor ingresar contraseña"));

    if (contra == contraAdmin){
        foro.unshift(usuario);
    } else {
        foro.push(usuario);
    }

    alert(foro.join(" "))
}

// ejercicio siete
function cal(){
    let nota = parseFloat(prompt)
}