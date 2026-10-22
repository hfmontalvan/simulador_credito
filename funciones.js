//AQUI TODA LA LOGICA DE LAS FUNCIONES DEL NEGOCIO
function calcularDisponible(ingresos, egresos) {
    let disponible = ingresos - egresos;

    if (disponible < 0) {
        return 0;
    }

    return disponible;
}
function calcularCapacidadPago(montoDisponible) {
    return montoDisponible * 0.3;
}
function calcularInteresSimple(monto, tasa, plazoAnios) {
    const interes = monto * (tasa / 100) * plazoAnios;
    return interes;
}
function calcularTotalPagar(monto, interes) {
    const total = monto + interes + 100;
    return total;
}
function calcularCuotaMensual(total, plazoAnios) {
    const numeroMeses = plazoAnios * 12;
    const cuotaMensual = total / numeroMeses;
    return cuotaMensual;
}
function aprobarCredito(capacidadPago, cuotaMensual) {
    if (capacidadPago > cuotaMensual) {
        return true;
    } else {
        return false;
    }
}