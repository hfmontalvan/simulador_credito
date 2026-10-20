function calcular() {
    const campoIngresos = document.getElementById("txtIngresos");
    const campoEgresos = document.getElementById("txtEgresos");
    const campoMonto = document.getElementById("txtMonto");
    const campoPlazo = document.getElementById("txtPlazo");
    const campoTasaInteres = document.getElementById("txtTasaInteres");

    const ingresos = parseFloat(campoIngresos.value);
    const egresos = parseFloat(campoEgresos.value);
    const monto = parseInt(campoMonto.value, 10);
    const plazoAnios = parseInt(campoPlazo.value, 10);
    const tasa = parseInt(campoTasaInteres.value, 10);

    const disponible = calcularDisponible(ingresos, egresos);
    const capacidadPago = calcularCapacidadPago(disponible);
    const interes = calcularInteresSimple(monto, tasa, plazoAnios);
    const totalPagar = calcularTotalPagar(monto, interes);

    const etiquetaDisponible = document.getElementById("spnDisponible");
    etiquetaDisponible.textContent = "USD " + disponible.toFixed(2);

    const etiquetaCapacidadPago = document.getElementById("spnCapacidadPago");
    etiquetaCapacidadPago.textContent = "USD " + capacidadPago.toFixed(2);

    const etiquetaInteresPagar = document.getElementById("spnInteresPagar");
    etiquetaInteresPagar.textContent = "USD " + interes.toFixed(2);

    const etiquetaTotalPrestamo = document.getElementById("spnTotalPrestamo");
    etiquetaTotalPrestamo.textContent = "USD " + totalPagar.toFixed(2);
}

const botonCalcularCredito = document.getElementById("btnCalcularCredito");
botonCalcularCredito.addEventListener("click", calcular);