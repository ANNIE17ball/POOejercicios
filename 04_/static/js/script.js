function contador() {
    const container = document.getElementById(`resultado1`);
    const parrafo = document.getElementById(`pantalla1`);

    parrafo.textContent = ""; //limpiar contenedor
    
    parrafo.textContent = ``;
    container.classList.remove(`d-none`);
}