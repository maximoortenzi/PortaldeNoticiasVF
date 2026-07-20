if(sessionStorage.getItem("admin")){
    window.location.href = "admin.html";
}

document
    .getElementById("loginForm")
    .addEventListener("submit", login);

function login(e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username,
            password
        })
    })
    .then(respuesta => {
        if (!respuesta.ok) {
            alert("Credenciales incorrectas");
            return;
        }
        return respuesta.json();
    })
    .then(data => {
        if (data) {
            sessionStorage.setItem("admin", JSON.stringify(data));
            window.location.href = "admin.html";
        }
    });
}
