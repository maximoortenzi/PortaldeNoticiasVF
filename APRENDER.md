# APRENDER A CREAR ESTE PORTAL — GUIA COMPLETA

## INDICE

1. HTML
2. CSS
3. JavaScript
4. APIs y Fetch
5. Git y GitHub
6. GitHub Pages

---

## 1. HTML (HyperText Markup Language)

Es el esqueleto de la pagina. Define la estructura y el contenido.

### Estructura basica de un documento

```html
<!DOCTYPE html>              <!-- Dice al navegador que es HTML5 -->
<html lang="es">             <!-- Idioma de la pagina -->
<head>                       <!-- Metadatos (no se ve) -->
    <meta charset="UTF-8">   <!-- Acepta tildes y eñes -->
    <title>Titulo</title>     <!-- Texto en la pestana -->
    <link rel="stylesheet" href="css/styles.css"> <!-- Link al CSS -->
</head>
<body>                       <!-- Todo lo que se ve -->
    <h1>Hola</h1>            <!-- Contenido visible -->
    <script src="js/app.js"></script> <!-- Link al JS -->
</body>
</html>
```

### Etiquetas mas importantes (las que usamos)

| Etiqueta | Que hace | Ejemplo |
|----------|----------|---------|
| `<h1>` a `<h6>` | Titulos (1 es el mas grande) | `<h1>Portal de Noticias</h1>` |
| `<p>` | Parrafo de texto | `<p>Esto es una descripcion</p>` |
| `<a>` | Link a otra pagina | `<a href="login.html">Login</a>` |
| `<button>` | Boton clickeable | `<button id="btn">Click</button>` |
| `<input>` | Campo para escribir | `<input type="text" id="nombre">` |
| `<textarea>` | Area de texto grande | `<textarea id="desc"></textarea>` |
| `<form>` | Contenedor de formulario | `<form id="loginForm">` |
| `<section>` | Seccion de la pagina | `<section id="noticias">` |
| `<header>` | Encabezado de la pagina | `<header>` |
| `<div>` | Contenedor generico | `<div class="card">` |
| `<img>` | Imagen | `<img src="url.jpg">` |
| `<span>` | Texto en linea (no rompe renglon) | `<span id="nombre">Rosario</span>` |

### Atributos comunes

```html
<etiqueta id="identificadorUnico" class="claseRepetible" style="color:red;">contenido</etiqueta>
```

- **id**: unico por pagina, para seleccionar con JS o CSS (`#id`)
- **class**: puede repetirse, para seleccionar con CSS (`.clase`)
- **style**: CSS directo en la etiqueta (inline)
- **src**: origen de imagen o script
- **href**: destino de un link
- **placeholder**: texto de ayuda dentro de un input

---

## 2. CSS (Cascading Style Sheets)

Define los colores, tamanos, posiciones y aspecto visual.

### Como se aplica

```html
<!-- Archivo externo (recomendado) -->
<link rel="stylesheet" href="css/styles.css">

<!-- Dentro del <head> (no recomendado) -->
<style> body { color: red; } </style>

<!-- Directo en la etiqueta (inline) -->
<div style="color:red;">
```

### Selectores

```css
/* Por etiqueta */
body { background: #f4f4f4; }

/* Por id (unico) */
#logoutBtn { background: red; }

/* Por clase (repetible) */
.card { border-radius: 12px; }

/* Anidado */
header a { color: white; }        /* <a> dentro de <header> */

/* Multiple */
#dolar, #conversor { width: 90%; }

/* Combinado con clase */
.dark .card { background: black; }  /* .card dentro de .dark */
```

### Box Model (todo elemento es una caja)

```
  |----- margin (fuera del borde) -----|
  |--- border (borde visible) ---|
  |--- padding (relleno interno) ---|
  |--- contenido ---|
```

```css
.elemento {
    margin: 20px;        /* separacion EXTERNA */
    padding: 10px;       /* separacion INTERNA */
    border: 1px solid #ccc;  /* borde */
    width: 90%;          /* ancho */
    height: 100px;       /* alto */
}
```

### Flexbox (distribuir elementos en fila o columna)

```css
.contenedor {
    display: flex;                    /* activa flexbox */
    justify-content: space-between;   /* horizontal: center, flex-start, space-around, space-evenly */
    align-items: center;              /* vertical: center, flex-start, stretch */
    gap: 20px;                        /* separacion entre hijos */
    flex-wrap: wrap;                  /* si no entra, baja a la siguiente linea */
}
```

### Grid (grilla de varias columnas)

```css
.contenedor {
    display: grid;
    grid-template-columns: repeat(3, 1fr);  /* 3 columnas iguales */
    gap: 20px;                               /* separacion entre celdas */
}
```

### Media Queries (responsive)

```css
/* Cuando la pantalla mide 600px o menos */
@media (max-width: 600px) {
    body { font-size: 14px; }
    #noticias { grid-template-columns: 1fr; }  /* 1 columna */
}
```

### Dark mode (como lo hicimos)

```css
/* Estilo normal (modo claro) */
body { background: #f4f4f4; color: #333; }

/* Modo oscuro con clase .dark en el <body> */
.dark { background: #121212; color: white; }

/* Para que un elemento cambie en dark mode */
.dark .card { background: #1f1f1f; }
```

El JS agrega o saca la clase `.dark` del `<body>`:
```js
document.body.classList.toggle("dark");
```

### Propiedades comunes

```css
color: #1e3a8a;           /* color de texto */
background: white;         /* fondo */
border-radius: 12px;       /* esquinas redondeadas */
box-shadow: 0 2px 10px rgba(0,0,0,0.1);  /* sombra */
font-weight: bold;         /* negrita */
font-size: 2rem;           /* tamano de texto */
text-decoration: none;     /* sin subrayado */
cursor: pointer;           /* cursor de mano */
opacity: 0.9;              /* transparencia (hover) */
overflow: hidden;          /* oculta lo que sobresale */
object-fit: cover;         /* ajusta imagen sin deformar */
min-height: 100vh;         /* alto minimo = toda la pantalla */
```

### Cascada (Cascade)

CSS significa "Cascading Style Sheets" — **hojas de estilo en cascada**. La cascada es el algoritmo que decide que estilo gana cuando hay conflictos.

**Reglas de la cascada (de menor a mayor prioridad):**

1. **Origen**: estilos del navegador (user agent) < estilos del usuario < estilos del autor (tu CSS)
2. **Especificidad**: a igual origen, gana el selector mas especifico
3. **Orden de aparicion**: a igual especificidad, gana el que esta escrito despues
4. **!important**: rompe todas las reglas anteriores (NO USAR a menos que sea estrictamente necesario)

```css
/* Ejemplo de cascada: */

p { color: blue; }           /* etiqueta: especificidad baja */
.texto { color: red; }       /* clase: mas especifico, gana */
#parrafo { color: green; }   /* id: mucho mas especifico, gana aun si esta antes */

/* Si un elemento tiene class="texto" y id="parrafo", gana green (el id) */
```

### Especificidad

La especificidad es un **peso que tiene cada selector**. Cuanto mas especifico, mas prioridad tiene.

**Tabla de pesos:**

| Selector | Ejemplo | Peso |
|----------|---------|------|
| Etiqueta / pseudo-elemento | `p`, `div`, `h1`, `::before` | 0,0,0,1 |
| Clase / atributo / pseudo-clase | `.card`, `[type="text"]`, `:hover` | 0,0,1,0 |
| ID | `#header`, `#logoutBtn` | 0,1,0,0 |
| Inline (style="") | `<div style="color:red">` | 1,0,0,0 |
| !important | `color: red !important;` | Anula todo |

**Como se calcula:**

Se cuentan (ids, clases, etiquetas) y se comparan de izquierda a derecha:

```css
p { }                      /* 0 ids, 0 clases, 1 etiqueta  -> 0,0,1 */
.texto { }                 /* 0 ids, 1 clase,  0 etiquetas -> 0,1,0 */
#parrafo { }               /* 1 id,   0 clases, 0 etiquetas -> 1,0,0 */
header a { }               /* 0 ids, 0 clases, 2 etiquetas -> 0,0,2 */
.dark .card p { }          /* 0 ids, 2 clases, 1 etiqueta  -> 0,2,1 */
#noticias .card button { } /* 1 id,   1 clase,  1 etiqueta  -> 1,1,1 */
```

**Ejemplo practico del portal:**

```css
/* Especificidad 0,0,1 - gana a body pero pierde contra .card */
button { background: blue; }

/* Especificidad 0,1,0 - gana contra button */
.card button { background: red; }

/* Como el body tiene clase .dark, y button esta dentro del body: */
.dark .card button { background: darkred; }  /* 0,2,1 - gana a todos */

/* Si usamos inline, gana siempre (1,0,0,0): */
<button style="background:green;">  /* GANA, salvo que haya !important */
```

**Regla practica:** si un estilo no se aplica y no entendes por que, probablemente otro selector con mas especificidad lo esta pisando.

### !important — cuando y por que NO usarlo

```css
.boton { color: red !important; }
```

- **NO** se recomienda porque rompe la cascada natural
- Si despues queres pisar ese estilo, necesitas otro `!important` todavia mas especifico
- Genera una "guerra de !important" imposible de mantener
- **Excepcion valida**: cuando queres pisar estilos inline que vienen de una libreria externa

### Unidades de medida

```css
/* Absolutas */
px        /* pixeles: 1px = 1 punto en pantalla */
cm, mm    /* centimetros, milimetros (para imprimir) */

/* Relativas (recomendadas para responsive) */
%         /* porcentaje del elemento padre */
rem       /* relativo al font-size del <html> (1rem = 16px por defecto) */
em        /* relativo al font-size del elemento actual */
vh        /* 1vh = 1% de la altura de la pantalla */
vw        /* 1vw = 1% del ancho de la pantalla */
```

```css
/* Ejemplos */
html { font-size: 16px; }
h1 { font-size: 2rem; }     /* 32px */
.card { width: 90%; }       /* 90% del contenedor padre */
body { min-height: 100vh; } /* alto minimo = toda la pantalla */
```

### Posicionamiento

```css
/* Static (por defecto) — sigue el flujo normal */
.elemento { position: static; }

/* Relative — igual que static pero podes moverlo con top/left sin afectar a los demas */
.elemento { position: relative; top: 10px; left: 20px; }

/* Absolute — se sale del flujo normal, se posiciona respecto al ancestro mas cercano con position:relative */
.elemento { position: absolute; top: 0; right: 0; }

/* Fixed — queda fijo en la pantalla aunque scrollees */
.elemento { position: fixed; bottom: 0; width: 100%; }

/* Sticky — mezcla relative + fixed, se pega cuando scrollea hasta cierto punto */
.elemento { position: sticky; top: 0; }
```

### Pseudo-clases

Definen un **estado** del elemento:

```css
button:hover { opacity: 0.9; }     /* cuando el mouse pasa encima */
input:focus { border-color: blue; }  /* cuando el input esta seleccionado */
a:visited { color: purple; }       /* link ya visitado */
p:first-child { font-weight: bold; } /* primer hijo de su padre */
li:last-child { border: none; }    /* ultimo hijo */
```

### Pseudo-elementos

Crean elementos **ficticios** dentro de otro:

```css
p::before { content: "→ "; }   /* agrega algo ANTES del contenido */
p::after { content: " ←"; }    /* agrega algo DESPUES del contenido */
input::placeholder { color: gray; } /* estiliza el placeholder */
```

---

## 3. JAVASCRIPT

Da comportamiento a la pagina: responde a clicks, obtiene datos, modifica el HTML.

### Variables

```js
let nombre = "Juan";          // puede cambiar
const apellido = "Perez";     // no puede cambiar (constante)
var viejo = "no usar";        // NO USAR, es antiguo
```

### Tipos de datos

```js
"texto"                       // string
42                            // number (entero)
3.14                          // number (decimal)
true / false                  // boolean
[1, 2, 3]                     // array (lista)
{ nombre: "Juan", edad: 25 }  // objeto
```

### Funciones

```js
// Tradicional
function saludar(nombre) {
    return "Hola " + nombre;
}

// Flecha (moderna, usada en .then())
const saludar = (nombre) => {
    return "Hola " + nombre;
};

// Flecha corta (una sola linea, sin llaves)
const doble = n => n * 2;
```

### Manipular el DOM (Document Object Model)

```js
// Seleccionar elementos
document.getElementById("miId")       // por id
document.querySelector(".clase")      // por selector CSS
document.querySelectorAll("button")   // todos los que coinciden

// Leer/escribir contenido
elemento.innerHTML = "<p>Nuevo texto</p>";  // HTML adentro
elemento.textContent = "Solo texto";         // solo texto
elemento.value                              // valor de input

// Clases
elemento.classList.add("dark");
elemento.classList.remove("dark");
elemento.classList.toggle("dark");    // si tiene la saca, si no tiene la agrega

// Estilos directos
elemento.style.color = "red";
elemento.style.display = "flex";

// Atributos
elemento.id = "nuevoId";
```

### Eventos

```js
// Cuando se hace click
document.getElementById("btn").addEventListener("click", function() {
    alert("Click!");
});

// Cuando se envia un formulario
document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault();  // EVITA que la pagina se recargue
    // ... logica ...
});
```

Tipos de eventos comunes: `click`, `submit`, `mouseover`, `keydown`, `change`, `DOMContentLoaded`

### Template Strings (comilla invertida)

Permite poner variables adentro del texto:

```js
const nombre = "Juan";
const edad = 25;
const texto = `Hola, me llamo ${nombre} y tengo ${edad} años.`;
// Resultado: "Hola, me llamo Juan y tengo 25 años."
```

### Arrays (listas)

```js
const frutas = ["manzana", "pera", "banana"];

frutas[0]           // "manzana" (empieza en 0)
frutas.length       // 3 (cantidad)
frutas.push("uva")  // agrega al final
frutas.splice(1, 1) // elimina el elemento en posicion 1
frutas.forEach(function(fruta, i) {
    console.log(i + ": " + fruta);
});
```

### Metodos de arrays mas usados

```js
const nums = [1, 2, 3, 4, 5];

// forEach — ejecuta algo por cada elemento (no devuelve nada)
nums.forEach(n => console.log(n));

// map — transforma cada elemento y devuelve un NUEVO array
const dobles = nums.map(n => n * 2);   // [2, 4, 6, 8, 10]

// filter — filtra elementos que cumplan una condicion
const pares = nums.filter(n => n % 2 === 0);  // [2, 4]

// find — busca el PRIMERO que cumpla la condicion
const primerPar = nums.find(n => n % 2 === 0);  // 2

// some — true si ALGUNO cumple
const hayPares = nums.some(n => n % 2 === 0);  // true

// every — true si TODOS cumplen
const todosPares = nums.every(n => n % 2 === 0);  // false

// sort — ordena (CUIDADO: convierte a string primero)
nums.sort((a, b) => a - b);  // ascendente
nums.sort((a, b) => b - a);  // descendente
```

### Objetos

```js
const persona = {
    nombre: "Juan",
    edad: 25,
    saludar: function() {
        return "Hola, soy " + this.nombre;
    }
};

// Acceder
persona.nombre       // "Juan"
persona["nombre"]    // "Juan"
persona.saludar()    // "Hola, soy Juan"

// Modificar
persona.edad = 26;
persona.ciudad = "Rosario";  // agrega nueva propiedad

// Recorrer
for (let clave in persona) {
    console.log(clave + ": " + persona[clave]);
}

// Obtener claves y valores
Object.keys(persona)    // ["nombre", "edad", "saludar", "ciudad"]
Object.values(persona)  // ["Juan", 26, function, "Rosario"]
```

### Scope (alcance de variables)

Define **donde existe** una variable.

```js
// Global — existe en todo el archivo
let global = "acceso desde cualquier parte";

function ejemplo() {
    // Local (function scope) — solo existe dentro de la funcion
    var localFuncion = "solo aca";

    if (true) {
        // Block scope (let/const) — solo existe dentro de estas llaves
        let localBloque = "solo dentro del if";
        const otra = "tambien solo aca";
        var noTieneBloque = "esto SI existe fuera del if"; // var ignora block scope
    }

    console.log(localBloque);     // ERROR: no existe
    console.log(noTieneBloque);   // funciona (var escapa del bloque)
}

console.log(global);         // funciona
console.log(localFuncion);   // ERROR
```



### localStorage y sessionStorage

Guardan datos en el navegador del usuario.

```js
// Guardar
localStorage.setItem("clave", "valor");
localStorage.setItem("objeto", JSON.stringify({a: 1, b: 2}));

// Leer
const valor = localStorage.getItem("clave");
const objeto = JSON.parse(localStorage.getItem("objeto"));

// Borrar
localStorage.removeItem("clave");

// Diferencias
localStorage    // NO se borra al cerrar el navegador
sessionStorage  // SE borra al cerrar la pestana
```

### Promises (.then() y .catch())

Las Promises manejan operaciones que tardan (como pedir datos a internet).

**Que pasa sin Promises:**
```js
const data = fetch("url");  // NO FUNCIONA, fetch es asincronico
console.log(data);          // undefined, todavia no llego la respuesta
```

**Con .then():**
```js
fetch("https://api.ejemplo.com")
    .then(respuesta => respuesta.json())     // espera y convierte a JSON
    .then(data => {
        console.log(data);                   // aca ya tenes los datos
    })
    .catch(error => {
        console.log("Error:", error);        // si algo falla
    });
```

**.then()** se ejecuta cuando la operacion termina bien.
**.catch()** se ejecuta si hay un error.

Encadenamiento:
```js
fetch(url)
    .then(r => r.json())      // primer paso
    .then(datos => {          // segundo paso (cuando termina el primero)
        // trabajar con datos
    })
    .catch(err => {           // si cualquier paso falla
        // manejar error
    });
```

### try / catch (para errores sincronicos)

```js
try {
    // codigo que puede fallar
    new URL("texto_invalido");
} catch (error) {
    // se ejecuta si algo fallo arriba
    alert("URL invalida");
}
```

### Operador ternario

```js
// if normal
let mensaje;
if (edad >= 18) {
    mensaje = "Mayor";
} else {
    mensaje = "Menor";
}

// ternario (una linea)
const mensaje = edad >= 18 ? "Mayor" : "Menor";
```

### Operadores de comparacion

```js
===   // igual estricto (valor Y tipo)
!==   // distinto estricto
>     // mayor que
<     // menor que
>=    // mayor o igual
<=    // menor o igual
```

```js
if (edad >= 18) {
    console.log("Mayor de edad");
}

if (nombre === "admin") {
    console.log("Bienvenido admin");
}
```

**Siempre usa `===`, nunca `==`.** El doble igual hace conversiones raras de tipo.

### Operadores logicos

```js
&&   // AND (y) — todas las condiciones deben ser true
||   // OR (o) — al menos una debe ser true
!    // NOT (no) — invierte true/false
```

```js
if (usuario === "admin" && pass === "123") {
    console.log("Login correcto");
}

if (edad < 12 || edad > 90) {
    console.log("No aplica");
}

if (!activo) {
    console.log("Esta desactivado");
}
```

### Bucles (loops)

**for** — cuando sabes cuantas veces repetir:

```js
for (let i = 0; i < 5; i++) {
    console.log("Vuelta numero " + i);
}
// i empieza en 0, se repite mientras i < 5,
// al final suma 1 (i++)
// Resultado: 0, 1, 2, 3, 4

// Recorrer un array:
for (let i = 0; i < noticias.length; i++) {
    console.log(noticias[i].titulo);
}
```

**while** — cuando no sabes cuantas veces:

```js
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
```

### forEach (recorrer arrays)

```js
const frutas = ["manzana", "pera", "banana"];

// Ejecuta una funcion por cada elemento
frutas.forEach(function(fruta, indice) {
    console.log(indice + ": " + fruta);
});
// Resultado:
// 0: manzana
// 1: pera
// 2: banana

// Con funcion flecha (mas comun hoy):
frutas.forEach((fruta, i) => {
    console.log(i + ": " + fruta);
});
```

### Metodos de strings

```js
const texto = "  Hola Mundo  ";

texto.length              // 12 (cuenta los espacios)
texto.trim()              // "Hola Mundo" (saca espacios adelante y atras)
texto.toUpperCase()       // "  HOLA MUNDO  "
texto.toLowerCase()       // "  hola mundo  "
texto.includes("Mundo")   // true (contiene ese texto?)
texto.startsWith("  Ho")  // true (empieza con?)
texto.split(" ")          // ["", "", "Hola", "Mundo", "", ""]
"hola-mundo".split("-")   // ["hola", "mundo"]
texto.replace("Mundo", "Juan")  // "  Hola Juan  "
texto.trim().charAt(0)    // "H" (primer caracter)
```

### Metodos de numeros

```js
const n = 1500000;

n.toLocaleString("es-AR")  // "1.500.000" (formato argentino)
n.toFixed(2)               // "1500000.00" (2 decimales, devuelve STRING)
parseInt("42px")           // 42 (string a numero entero)
parseFloat("3.14")         // 3.14 (string a numero decimal)
Number("42")               // 42
isNaN("texto")             // true (NO es un numero)
isNaN(42)                  // false (SI es un numero)
```

### Depuracion con console

```js
console.log("mensaje");          // muestra en la consola del navegador
console.log("valor:", variable); // varias cosas separadas por coma
console.error("Error!");         // en rojo
console.warn("Cuidado");         // en amarillo
console.table(array);            // muestra arrays/objetos como tabla
console.time("nombre");          // inicia un cronometro
// ... codigo que queres medir ...
console.timeEnd("nombre");       // cuanto tardo en milisegundos
```

**Como abrir la consola del navegador:**
- Chrome/Edge: `F12` o click derecho > Inspeccionar > Consola
- Firefox: `F12` o click derecho > Inspeccionar > Consola

### undefined vs null

```js
// undefined — variable declarada pero sin valor
let x;
console.log(x);  // undefined

// null — vos DECIDIS que no tiene valor (intencional)
const y = null;
console.log(y);  // null

// Cuando aparece undefined:
let a;                  // variable sin asignar
function algo() {}      // funcion sin return
const obj = {}; obj.x;  // propiedad que no existe

// Cuando usar null:
const usuario = null;   // "vacio a proposito"
```

### Comentarios en codigo

```js
// Esto es un comentario de una linea (lo mas comun)

/*
Esto es un
comentario de
varias lineas
*/

// Los comentarios NO se ejecutan, son solo para quien lee el codigo
```

### Diferencias entre let, const y var

| Keyword | Puede reasignarse? | Alcance | Se usa hoy? |
|---------|-------------------|---------|------------|
| `const` | NO | bloque `{}` | SI, siempre que puedas |
| `let` | SI | bloque `{}` | SI, cuando necesites cambiar el valor |
| `var` | SI | funcion (no respeta bloques) | NO, evitar |

```js
const nombre = "Juan";   // no va a cambiar
let edad = 25;            // puede cambiar
edad = 26;                // OK
// nombre = "Pedro";      ERROR: no se puede reasignar una const

// const con objetos: la referencia NO cambia, pero el contenido SI
const persona = { nombre: "Juan" };
persona.nombre = "Pedro";  // PERMITIDO
persona.edad = 25;         // PERMITIDO (agregar propiedades)
// persona = {};           ERROR: no se puede reasignar
```

### Concatenacion vs Template Strings

```js
const nombre = "Juan";
const edad = 25;

// Concatenacion con + (forma vieja)
const texto1 = "Hola, me llamo " + nombre + " y tengo " + edad + " años.";

// Template string con `` (forma moderna, recomendada)
const texto2 = `Hola, me llamo ${nombre} y tengo ${edad} años.`;
```

---

## 4. APIs Y FETCH

### Que es una API

Una API es una URL a la que le pedis datos y te responde en JSON.

```js
// Pedir datos
fetch("https://api.bluelytics.com.ar/v2/latest")
    .then(r => r.json())
    .then(data => {
        console.log(data.blue.value_sell);  // cotizacion dolar
    });
```

### JSON

Formato de datos liviano para intercambiar info:

```json
{
    "nombre": "Juan",
    "edad": 25,
    "hobbies": ["futbol", "musica"]
}
```

En JS se usa:
- `JSON.stringify(objeto)` — convierte objeto a string JSON
- `JSON.parse(string)` — convierte string JSON a objeto

### APIs que usamos en el portal

| API | URL | Que devuelve |
|-----|-----|-------------|
| Bluelytics | `api.bluelytics.com.ar/v2/latest` | Cotizacion dolar blue |
| DummyJSON | `dummyjson.com/auth/login` | Token de autenticacion |
| Open-Meteo | `api.open-meteo.com/v1/forecast?lat=...&lon=...` | Clima actual y pronostico |

### Tipos de pedidos HTTP

```js
// GET (obtener datos) — el mas comun
fetch("https://api.ejemplo.com/datos")

// POST (enviar datos, ej: login)
fetch("https://api.ejemplo.com/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ usuario: "juan", pass: "123" })
})
```

### Codigos de respuesta HTTP (status codes)

Cada vez que haces un fetch, la API responde con un numero de 3 digitos que indica el resultado. Se accede con `respuesta.status` o `respuesta.ok`.

```js
fetch("https://api.ejemplo.com/datos")
    .then(r => {
        console.log(r.status);    // 200, 404, 500, etc.
        console.log(r.ok);        // true si es 200-299, false si no
    })
```

**Clasificacion por rango:**

| Rango | Categoria | Significa |
|-------|-----------|-----------|
| 1xx | Informacion | El servidor recibio el pedido y sigue procesando (casi nunca se usa) |
| 2xx | Exito | Todo salio bien |
| 3xx | Redireccion | El recurso se movio a otra URL |
| 4xx | Error del cliente | El pedido esta mal (culpa tuya o del usuario) |
| 5xx | Error del servidor | El servidor fallo (culpa del servidor) |

**Los mas comunes:**

| Codigo | Nombre | Que significa | Ejemplo |
|--------|--------|---------------|---------|
| **200** | OK | Todo salio bien, aca estan los datos | GET exitoso |
| **201** | Created | Se creo un recurso nuevo | POST de registro exitoso |
| **204** | No Content | Exito pero sin contenido en la respuesta | DELETE exitoso |
| **301** | Moved Permanently | La URL cambio permanentemente, redirige a otra | Pagina mudada |
| **304** | Not Modified | Usa la version que tenes en cache (no hay cambios) | Recursos estaticos |
| **400** | Bad Request | El pedido esta mal formado | Faltan campos en el JSON |
| **401** | Unauthorized | No estas autenticado, falta login | Token invalido o faltante |
| **403** | Forbidden | Autenticado pero sin permiso para ese recurso | Admin intenta acceder a algo de superadmin |
| **404** | Not Found | El recurso no existe | URL mal escrita |
| **405** | Method Not Allowed | Usaste el verbo incorrecto (GET en vez de POST) | Hacer GET a una ruta que solo acepta POST |
| **408** | Request Timeout | El pedido tardo mucho y el servidor lo cancelo | Conexion lenta |
| **429** | Too Many Requests | Superaste el limite de pedidos por minuto | API rate limit |
| **500** | Internal Server Error | Error generico del servidor | Bug en el backend |
| **502** | Bad Gateway | El servidor recibe respuesta invalida de otro servidor | Problema de infraestructura |
| **503** | Service Unavailable | Servidor temporalmente caido por mantenimiento o sobrecarga | Mucho trafico |

**Como se usa en el codigo:**

```js
fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    body: JSON.stringify({ username, password })
})
.then(respuesta => {
    if (!respuesta.ok) {                      // si no es 200-299
        alert("Credenciales incorrectas");    // Mostramos error al usuario
        return;                               // cortamos aca
    }
    return respuesta.json();                  // si es 200, seguimos
})
.then(data => {
    if (data) {
        sessionStorage.setItem("admin", JSON.stringify(data));
    }
});
```

**Diferencia entre .ok y .status:**

```js
respuesta.ok      // true si el codigo esta entre 200 y 299, false si no
respuesta.status  // el numero exacto (200, 404, 500, etc.)
respuesta.statusText // el texto asociado ("OK", "Not Found", etc.)
```

**Que pasa cuando la API no responde (network error)?**

Si no hay internet, el DNS falla o el servidor esta caido, el `fetch()` directamente rechaza la Promise y cae en el `.catch()`:

```js
fetch("https://api.quenoexiste.com")
    .then(r => r.json())      // esto NO se ejecuta
    .catch(error => {
        // aca caemos si no hay conexion
        console.log("Error de red:", error);
        mostrarMensaje("No se pudo conectar");
    });
```

---

## 5. GIT Y GITHUB

### Comandos basicos

```bash
# Ver estado de los archivos
git status

# Agregar archivos al commit
git add .                        # todos los archivos
git add index.html css/style.css # solo esos

# Crear un commit (version)
git commit -m "Descripcion de lo que cambie"

# Subir a GitHub
git push origin main             # a la rama main
git push origin main:dev         # a la rama dev (desde main local)

# Bajar cambios de GitHub
git pull origin main
```

### Flujo de trabajo tipico

```bash
# 1. Hacer cambios en los archivos
# 2. Verificar que cambio
git status

# 3. Preparar los archivos
git add .

# 4. Guardar la version
git commit -m "Agrega X funcionalidad"

# 5. Subir a GitHub
git push origin main
```

### Ramas (branches)

```bash
# Ver ramas
git branch

# Crear y moverse a una rama nueva
git checkout -b mi-rama

# Volver a main
git checkout main
```

Usamos ramas para no romper la version principal:
- `main` — version en produccion
- `dev` — cambios en prueba

### .gitignore

Archivo que le dice a Git que archivos IGNORAR (no subir):

```
node_modules/
.env
clima-feature/
*.log
```

---

## 6. GITHUB PAGES

Sirve paginas HTML estaticas gratis desde un repositorio.

### Configuracion

1. Repositorio en GitHub
2. Settings > Pages > Source: GitHub Actions
3. Pushear a `main` con un workflow `.github/workflows/pages.yml`

### El workflow que creamos

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/configure-pages@v5
      - uses: actions/upload-pages-artifact@v3
        with:
          path: .
      - uses: actions/deploy-pages@v4
```

Cada vez que pusheas a `main`, automaticamente se deploya el sitio.

### .nojekyll

Archivo vacio en la raiz del proyecto. Le dice a GitHub Pages "no proceses con Jekyll, es HTML plano".

---

## DATOS UTILES

### Formatear numeros en ARS

```js
(1500000).toLocaleString("es-AR")
// Resultado: "1.500.000"

(1500000).toFixed(2)
// Resultado: "1500000.00"
```

### Estructura de proyecto

```
/PortaldeNoticiasVF
├── index.html
├── login.html
├── admin.html
├── .nojekyll
├── .gitignore
├── css/
│   └── styles.css
├── js/
│   ├── app.js
│   ├── admin.js
│   ├── auth.js
│   ├── clima.js
│   ├── dolar.js
│   └── noticias.js
├── clima-feature/
└── .github/
    └── workflows/
        └── pages.yml
```

### Orden de carga de scripts

Los scripts se ejecutan en orden. Si `app.js` usa funciones de `noticias.js`, `noticias.js` debe cargarse primero:

```html
<script src="js/noticias.js"></script>    <!-- primero -->
<script src="js/dolar.js"></script>       <!-- segundo -->
<script src="js/clima.js"></script>       <!-- tercero -->
<script src="js/app.js"></script>         <!-- ultimo (usa los anteriores) -->
```
