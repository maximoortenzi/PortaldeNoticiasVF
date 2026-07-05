if(!sessionStorage.getItem("admin")){
    window.location.href = "login.html";
}

mostrarNoticiasAdmin();

document.getElementById("newsForm").addEventListener("submit", agregarNoticia);

function agregarNoticia(e){

    e.preventDefault();

    const titulo = document.getElementById("titulo").value;
    const descripcion = document.getElementById("descripcion").value;
    const imagen = document.getElementById("imagen").value;

    try{
        new URL(imagen);
    }catch{
        alert("La URL de la imagen no es válida");
        return;
    }

    const noticias = obtenerNoticias();

    noticias.push({ titulo, descripcion, imagen });

    guardarNoticias(noticias);
    mostrarNoticiasAdmin();
    e.target.reset();

}

function mostrarNoticiasAdmin(){

    const contenedor = document.getElementById("listaNoticias");
    const noticias = obtenerNoticias();

    contenedor.innerHTML = "";

    noticias.forEach((noticia, index) => {

        contenedor.innerHTML += `
        <div class="card">
            <img src="${noticia.imagen}">
            <h3>${noticia.titulo}</h3>
            <p>${noticia.descripcion}</p>
            <button onclick="editarNoticia(${index})">Editar</button>
            <button onclick="eliminarNoticia(${index})">Eliminar</button>
        </div>
        `;

    });

}

function eliminarNoticia(index){

    const noticias = obtenerNoticias();
    noticias.splice(index, 1);
    guardarNoticias(noticias);
    mostrarNoticiasAdmin();

}

function editarNoticia(index){

    const noticias = obtenerNoticias();
    const noticia = noticias[index];

    document.getElementById("titulo").value = noticia.titulo;
    document.getElementById("descripcion").value = noticia.descripcion;
    document.getElementById("imagen").value = noticia.imagen;

    eliminarNoticia(index);

}

document.getElementById("logoutBtn").addEventListener("click", () => {
    sessionStorage.removeItem("admin");
    window.location.href = "index.html";
});
