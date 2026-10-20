function calcular() {
    const campoIngresos = document.getElementById("txtIngresos");
    const campoEgresos = document.getElementById("txtEgresos");

    const ingresos = parseFloat(campoIngresos.value);
    const egresos = parseFloat(campoEgresos.value);

    const disponible = calcularDisponible(ingresos, egresos);
    const capacidadPago = calcularCapacidadPago(disponible);

    const etiquetaDisponible = document.getElementById("spnDisponible");
    etiquetaDisponible.textContent = "USD " + disponible.toFixed(2);

    const etiquetaCapacidadPago = document.getElementById("spnCapacidadPago");
    etiquetaCapacidadPago.textContent = "USD " + capacidadPago.toFixed(2);
}

const botonCalcularCredito = document.getElementById("btnCalcularCredito");
botonCalcularCredito.addEventListener("click", calcular);