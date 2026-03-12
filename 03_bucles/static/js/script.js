function contador() {
    let numeros = [];
    const container = document.getElementById(`resultadoContainer`);
    const parrafo = document.getElementById(`pantalla`);

    parrafo.textContent = ""; //limpiar contenedor
    for (let i = 1; i <= 10; i++) {
        numeros.push(i);
    }
    parrafo.textContent = `Contando: ${numeros.join(" - ")}`;
    container.classList.remove(`d-none`);
}

function estudiantes() {
    let curso = ["Ana", "Diego", "Sofía", "Matias"];
    const container = document.getElementById(`resultado2`);
    const parrafo = document.getElementById(`lista`);

    parrafo.textContent = ""; //limpiar contenedor
    for (let i = 0; i < curso.length; i++) {
        parrafo.innerHTML += `≫ ${curso[i]} <br>`;
    }
    container.classList.remove(`d-none`);
}

function aprobar() {
    const container = document.getElementById(`resultado3`);
    const parrafo = document.getElementById(`notas`);

    let notas = [3.5, 6.2, 5.0, 2.8, 4.5, 7.0];
    let contAprobados = 0;

    parrafo.textContent = ""; //limpiar contenedor
    for (let i = 0; i < notas.length; i++) {
        if (notas[i] >= 4.0) {
            contAprobados++
        }
    }
    parrafo.textContent = `Total de alumnos aprobados: ${contAprobados}`;
    container.classList.remove(`d-none`);
}

function agotado() {
    const container = document.getElementById(`resultado4`);
    const parrafo = document.getElementById(`tienda`);

    let productos = ["Teclado", "Mouse", "Agotado", "Monitor", "Agotado", "Audífonos"];
    let tenemos = [];

    parrafo.textContent = ""; //limpiar contenedor
    for (let i = 0; i < productos.length; i++) {
        if (productos[i] !== "Agotado") {
            tenemos.push(productos[i]);
        }
    }
    parrafo.textContent = `${tenemos.join(", ")}`;
    container.classList.remove(`d-none`);
}

function colecta() {
    const container = document.getElementById(`resultado5`);
    const parrafo = document.getElementById(`sumas`);

    let aportes = [1500, 2000, 500, 3000, 1000];
    let totalRecaudo = 0;

    parrafo.textContent = ""; //limpiar contenedor
    for (let i = 0; i < aportes.length; i++) {
        totalRecaudo = totalRecaudo + aportes[i];
    }
    parrafo.textContent = `Se ha juntado un total de $${totalRecaudo}`;
    container.classList.remove(`d-none`);
}

function nombres() {
    const container = document.getElementById(`resultado6`);
    const parrafo = document.getElementById(`vip`);

    let asistentes = ["carlos", "MARIA", "pedro", "LUCIA"];
    let nuevaLinea = [];

    parrafo.textContent = ""; //limpiar contenedor
    for (let i = 0; i < asistentes.length; i++) {
        asistentes[i].toLowerCase;
        nuevaLinea.push(asistentes[i]);

        if (asistentes[i].length % 2 == 0) {
            nuevaLinea.push("[VIP]")
        }
    }
    parrafo.textContent = `${nuevaLinea.join(" ")}`;
    container.classList.remove(`d-none`);
}

function stock() {
    const container = document.getElementById(`resultado7`);
    const parrafo = document.getElementById(`buscar`);

    let bodega = ["Lápiz", "Cuaderno", "Goma", "Cuaderno", "Regla", "Cuaderno"];
    let articuloBuscado = "Cuaderno";
    let vecesEncontrado = 0;

    parrafo.textContent = ""; //limpiar contenedor
    for (let i = 0; i < bodega.length; i++) {
        if (bodega[i] == articuloBuscado) {
            vecesEncontrado++;
        }
    }
    parrafo.textContent = `El artículo ${articuloBuscado} se ha encontrado ${vecesEncontrado} veces en la bodega`;
    container.classList.remove(`d-none`);
}

function parrafos() {
    const container = document.getElementById(`resultado8`);
    const parrafo = document.getElementById(`advertencia`);

    let temperaturas = [22, 24, 28, 35, 21, 38];

    parrafo.textContent = ""; //limpiar contenedor
    for (let i = 0; i < temperaturas.length; i++) {
        if (temperaturas[i] > 30) {
            parrafo.innerHTML += "¡ALERTA! Temperatura crítica de " + temperaturas[i] + " grados.<br>";
        }
    }
    container.classList.remove(`d-none`);
}