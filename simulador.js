//AQUI EL JAVASCRIPT PARA MANIPULAR EL HTML
function calcular() {
    const ingresos = parseFloat(document.getElementById("txtIngresos").value);
    const egresos = parseFloat(document.getElementById("txtEgresos").value);

    const disponible = calcularDisponible(ingresos, egresos);

    document.getElementById("spnDisponible").textContent =
        "USD " + disponible.toFixed(2);
}

document.getElementById("btnCalcularCredito")
    .addEventListener("click", calcular);