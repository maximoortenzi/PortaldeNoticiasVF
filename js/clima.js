async function obtenerClima() {

    try {

        const respuesta = await fetch("https://wttr.in/Rosario?format=j1");

        const data = await respuesta.json();

        const actual = data.current_condition[0];

        document.getElementById("climaInfo").innerHTML = `
            <p>🌡️ ${actual.temp_C}°C — ${actual.weatherDesc[0].value}</p>
            <p>💧 Humedad: ${actual.humidity}% — 🌬️ Viento: ${actual.windspeedKmph} km/h</p>
        `;

    } catch (error) {

        document.getElementById("climaInfo").innerHTML =
            "<p>Error al obtener el clima.</p>";

    }

}

obtenerClima();
