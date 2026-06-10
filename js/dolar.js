let valorDolar = 0;

async function obtenerDolar() {

    try {

        const respuesta = await fetch(
            "https://api.bluelytics.com.ar/v2/latest"
        );

        const data = await respuesta.json();

        valorDolar = data.blue.value_sell;

        document.getElementById("dolar").innerHTML = `
            <h2>Dólar Blue</h2>
            <p>Compra: $${data.blue.value_buy}</p>
            <p>Venta: $${data.blue.value_sell}</p>
        `;

    } catch (error) {

        document.getElementById("dolar").innerHTML =
            "<p>Error al obtener cotización.</p>";

    }

}

document.addEventListener("click", function (e) {

    const input = document.getElementById("montoInput");
    const resultado = document.getElementById("resultadoConversion");

    if (!input) return;

    const monto = Number(input.value);

    if (monto <= 0) {
        resultado.textContent = "Ingrese un monto válido.";
        return;
    }

    if (e.target.id === "usdToArsBtn") {
        const pesos = monto * valorDolar;
        resultado.textContent = `${monto} USD = $${pesos.toLocaleString("es-AR")} ARS`;
    }

    if (e.target.id === "arsToUsdBtn") {
        const dolares = monto / valorDolar;
        resultado.textContent = `$${monto.toLocaleString("es-AR")} ARS = ${dolares.toFixed(2)} USD`;
    }

});
