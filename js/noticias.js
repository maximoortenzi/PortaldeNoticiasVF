const noticiasIniciales = [
{
    titulo: "Argentina Campeón del Mundo",
    descripcion: "La selección argentina ganó el Mundial de Qatar 2022 ante Francia en los penales.",
    imagen: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=300&h=200&fit=crop"
},
{
    titulo: "La inteligencia artificial revoluciona el mercado",
    descripcion: "ChatGPT y otras herramientas de IA están transformando la forma en que trabajamos.",
    imagen: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=300&h=200&fit=crop"
},
{
    titulo: "El dólar blue sigue en alza",
    descripcion: "La cotización del dólar informal superó nuevos máximos en el mercado argentino.",
    imagen: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=300&h=200&fit=crop"
},
{
    titulo: "River y Boca definen el Superclásico",
    descripcion: "El clásico más esperado del fútbol argentino se jugará este fin de semana en el Monumental.",
    imagen: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=300&h=200&fit=crop"
},
{
    titulo: "El Congreso debate la nueva ley de educación",
    descripcion: "Diputados y senadores discuten los puntos clave de la reforma educativa propuesta.",
    imagen: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=300&h=200&fit=crop"
},
{
    titulo: "Conflicto en Medio Oriente: últimas noticias",
    descripcion: "La situación internacional se agrava mientras la comunidad mundial busca una salida diplomática.",
    imagen: "https://images.unsplash.com/photo-1524058988628-e3fc5f80e3e7?w=300&h=200&fit=crop"
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
