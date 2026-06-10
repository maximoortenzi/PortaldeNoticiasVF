document
    .getElementById("logoutBtn")
    .addEventListener("click", () => {
        sessionStorage.removeItem("admin");
        window.location.href = "index.html";
    });
