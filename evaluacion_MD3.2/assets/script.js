var Presupuesto = 0;
var TotalGastos = 0;


function agregarGasto() {
    var nombreGasto = document.getElementById("nombre_gasto").value;
    var gasto = parseFloat(document.getElementById("gasto").value);
    if (!isNaN(gasto)) {
        TotalGastos += gasto;
        let tablaGastos = document.getElementById("tabla_gastos");
        let fila = tablaGastos.insertRow();
        let celdaNombre = fila.insertCell();
        let celdaGasto = fila.insertCell();
        celdaNombre.innerHTML = nombreGasto;
        celdaGasto.innerHTML = gasto.toFixed(2);
        actualizarTablaPresupuesto();
       // alert("Gasto agregado correctamente.");
    } else {
        alert("Por favor, ingrese un valor numérico para el gasto.");
    }
}
function agregarPresupuesto() {
    var presupuesto = parseFloat(document.getElementById("presupuesto").value);
    if (!isNaN(presupuesto)) {
        Presupuesto += presupuesto;
        //alert("Presupuesto agregado correctamente.\nPresupuesto restante: " + (Presupuesto - TotalGastos));
    } else {
        alert("Por favor, ingrese un valor numérico para el presupuesto.");
    }
    actualizarTablaPresupuesto();
}

function actualizarTablaPresupuesto() {
    let presupuestoElemento = document.getElementById("presupuesto_tabla");
    let gastosElemento = document.getElementById("gastos_tabla");
    let saldoElemento = document.getElementById("saldo_tabla");
    presupuestoElemento.innerHTML = Presupuesto.toFixed(2);
    gastosElemento.innerHTML = TotalGastos.toFixed(2);
    saldoElemento.innerHTML = (Presupuesto - TotalGastos).toFixed(2);
}