document.getElementById("loginForm").addEventListener("submit", login);

async function login(e) {

    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const respuesta = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
    });

    if (respuesta.ok) {

        const data = await respuesta.json();
        sessionStorage.setItem("admin", JSON.stringify(data));
        window.location.href = "admin.html";

    } else {

        document.getElementById("errorMsg").textContent = "Credenciales incorrectas.";

    }

}
