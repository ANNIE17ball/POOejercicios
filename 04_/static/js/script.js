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