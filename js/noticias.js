const noticiasIniciales = [
{
    titulo: "Argentina Campeón del Mundo",
    descripcion: "La selección argentina ganó el Mundial de Qatar 2022 ante Francia en los penales.",
    imagen: "https://d3lj9c7v4ye8wm.cloudfront.net/a1b2c3d4-0000-4000-8000-000000000001/2026/05/4d352a08-e905-4b73-b398-9de6d2fadda6/xl.webp"
},
{
    titulo: "La inteligencia artificial revoluciona el mercado",
    descripcion: "ChatGPT y otras herramientas de IA están transformando la forma en que trabajamos.",
    imagen: "https://fotos.perfil.com/2023/09/05/trim/987/555/inteligencia-artificial-cuales-son-las-regulaciones-que-se-impulsan-en-el-mundo-1646974.jpg"
},
{
    titulo: "El dólar blue sigue en alza",
    descripcion: "La cotización del dólar informal superó nuevos máximos en el mercado argentino.",
    imagen: "https://junior-report.media/wp-content/uploads/2023/09/Art.-1-Mathieu-Stern-Unsplash-1024x535.jpg"
},
{
    titulo: "River y Boca definen el Superclásico",
    descripcion: "El clásico más esperado del fútbol argentino se jugará este fin de semana en el Monumental.",
    imagen: "https://cdn.eldestapeweb.com/eldestape/022025/1739221316174/el-deporte-argentino-jpg..jpg?cw=1500&ch=843"
},
{
    titulo: "El Congreso debate la nueva ley de educación",
    descripcion: "Diputados y senadores discuten los puntos clave de la reforma educativa propuesta.",
    imagen: "https://www.diariojunio.com.ar/wp-content/uploads/2023/11/politica.jpg"
},
{
    titulo: "Conflicto en Medio Oriente: últimas noticias",
    descripcion: "La situación internacional se agrava mientras la comunidad mundial busca una salida diplomática.",
    imagen: "https://media.linkedin.com/dms/image/v2/D4D12AQEClLndsx8ByQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1681884440724?e=2147483647&v=beta&t=rAk4y2hkOhAbsKCVn8l0BheqFY635EOJOCFxAXRF5aM"
}
];

function inicializarNoticias(){

    if(!localStorage.getItem("noticias")){
        localStorage.setItem(
            "noticias",
            JSON.stringify(noticiasIniciales)
        );
    }

}

function obtenerNoticias(){
    return JSON.parse(
        localStorage.getItem("noticias")
    );
}

function guardarNoticias(noticias){
    localStorage.setItem(
        "noticias",
        JSON.stringify(noticias)
    );
}
