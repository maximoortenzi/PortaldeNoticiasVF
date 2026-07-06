# GUIA COMPLETA DEL PORTAL DE NOTICIAS

Estructura del proyecto y explicacion detallada de cada archivo, funcion y linea importante.

---

## PAGINAS HTML

### index.html — Portal principal (pagina de inicio)

Es la pagina que ve el usuario cuando entra al sitio. Estructura:

**Header (lineas 14-21):**
- `<h1>Portal de Noticias</h1>` — titulo principal
- `#themeBtn` — boton que activa/desactiva el modo oscuro. Muestra "Tema"
- `<a href="login.html">Login</a>` — link que lleva al formulario de inicio de sesion

**Seccion Dolar (linea 23):**
- `<section id="dolar">` — contenedor vacio que JS llena con la cotizacion del dolar blue

**Seccion Conversor (lineas 25-48):**
- `<section id="conversor">` — contiene:
  - `#montoInput` — input numerico donde el usuario escribe el monto a convertir
  - `#usdToArsBtn` — boton que convierte de dolares a pesos argentinos
  - `#arsToUsdBtn` — boton que convierte de pesos argentinos a dolares
  - `#resultadoConversion` — parrafo donde se muestra el resultado

**Seccion Noticias (linea 50):**
- `<section id="noticias">` — contenedor vacio donde JS renderiza la grilla de tarjetas de noticias

**Scripts (lineas 52-54):**
- `noticias.js` — funciones para leer/escribir noticias en localStorage
- `dolar.js` — obtiene cotizacion del dolar y maneja el conversor
- `app.js` — inicializa todo al cargar la pagina

---

### login.html — Inicio de sesion

**Contenedor (lineas 10-36):**
- `<div class="login-container">` — card centrada con sombra que contiene:
  - Formulario `#loginForm` con:
    - `#username` — campo de texto para el nombre de usuario
    - `#password` — campo de contrasena (type="password" oculta los caracteres)
    - Boton "Ingresar" — dispara el login
- `auth.js` — script que maneja la autenticacion

El login se autentica contra la API publica https://dummyjson.com/auth/login. Si las credenciales son correctas, guarda la sesion en sessionStorage y redirige a admin.html. Si no, muestra un alert de error.

Si ya hay una sesion activa guardada en sessionStorage, al entrar a esta pagina redirige automaticamente al admin sin mostrar el formulario.

---

### admin.html — Administracion de noticias

Pagina protegida: si no hay sesion activa, redirige automaticamente a login.html.

**Botones superiores (lineas 12-16):**
- `#logoutBtn` — boton "Cerrar sesion": limpia sessionStorage y redirige al index
- `<a class="admin-link">` — link "Volver al portal": lleva a index.html

**Formulario de noticias (lineas 18-44):**
- `#newsForm` — formulario con:
  - `#titulo` — input de texto para el titulo de la noticia
  - `#descripcion` — textarea para la descripcion
  - `#imagen` — input de texto para la URL de la imagen
  - Boton "Guardar noticia" — envia el formulario

**Validacion:** antes de guardar verifica que el campo imagen sea una URL valida usando `new URL()`. Si no es valida, muestra un alert y no guarda.

**Lista de noticias (linea 46):**
- `#listaNoticias` — contenedor donde se renderizan las tarjetas con botones Editar y Eliminar

**Scripts (lineas 48-49):**
- `noticias.js` — funciones compartidas de noticias
- `admin.js` — logica del panel de administracion

---

## css/styles.css — Estilos globales (288 lineas)

### Reset universal (lineas 1-5)
```css
*{ margin:0; padding:0; box-sizing:border-box; }
```
Elimina margenes y paddings por defecto de todos los elementos. `box-sizing: border-box` hace que el padding no agrande los elementos.

### Body (lineas 7-12)
```css
body{ font-family:Arial,sans-serif; background:#f4f4f4; color:#333; min-height:100vh; }
```
Fondo gris claro, texto gris oscuro, tipografia Arial. `min-height:100vh` asegura que el body ocupe al menos toda la pantalla.

### Header (lineas 16-46)
- Fondo azul oscuro (`#1e3a8a`), texto blanco
- `display:flex; justify-content:space-between` — logo a izquierda, botones a derecha
- Los links y botones dentro del header son blancos con texto azul, bordes redondeados (8px), negrita
- Efecto `opacity:0.9` al hacer hover

### Dolar y Conversor (lineas 48-100)
- Cards blancas con `border-radius:12px`, sombra suave, 90% de ancho, centradas con `margin:20px auto`
- Inputs del conversor: ancho completo, padding, borde gris claro, bordes redondeados
- Botones del conversor: azules (`#2563eb`), se oscurecen al hover (`#1d4ed8`)
- `#resultadoConversion`: texto grande en negrita para mostrar el resultado

### Noticias (lineas 102-148)
- `#noticias` y `#listaNoticias` usan CSS Grid con 3 columnas iguales (`repeat(3,1fr)`)
- Gap de 20px entre tarjetas
- `.card` — tarjeta blanca con bordes redondeados, sombra, imagen de 180px de alto con `object-fit:cover`
- `.card button` — boton rojo (`#dc2626`) que se oscurece al hover (`#b91c1c`)

### Login (lineas 150-165)
- `.login-container` — card de 400px (maximo 90%), centrada verticalmente con `margin:100px auto`

### Formularios (lineas 167-206)
- Form: card blanca de 600px maximo, centrada
- Inputs y textarea: ancho completo, padding, borde gris, bordes redondeados
- `form button`: azul, ancho completo, con hover mas oscuro

### Admin (lineas 208-231)
- `#logoutBtn` — boton rojo fijo, sin borde, con bordes redondeados, negrita
- `.admin-link` — mismo estilo pero azul (`#1e3a8a`), sin subrayado (`text-decoration:none`)

### Dark Mode (lineas 233-258)

**Como funciona?**

Hay una clase CSS llamada `.dark` que se activa o desactiva en el `<body>` desde JavaScript. Cuando el body tiene la clase `.dark`, los estilos con `.dark` en el selector tienen mas especificidad y pisan los estilos normales.

**Mecanismo paso a paso:**

1. El usuario hace clic en el boton `#themeBtn` del header
2. `app.js` ejecuta `cambiarTema()`:
   ```js
   document.body.classList.toggle("dark");
   ```
   `toggle` agrega la clase si no estaba, o la saca si ya estaba.
3. Guarda la preferencia:
   ```js
   localStorage.setItem("theme", tema);
   ```
   Asi la proxima vez que el usuario entre, se restaura automaticamente.
4. Al cargar la pagina, `cargarTema()` lee localStorage y si era "dark", agrega la clase al body.

**Que colores cambian exactamente:**

| Elemento | Modo claro | Modo oscuro |
|----------|-----------|-------------|
| Fondo de pagina (`body`) | `#f4f4f4` (gris claro) | `#121212` (negro) |
| Texto general | `#333` (gris oscuro) | `white` (blanco) |
| Header | `#1e3a8a` (azul) | `#111827` (azul muy oscuro) |
| Cards (dolar, conversor, noticias, form, login) | `white` (blanco) | `#1f1f1f` (gris oscuro) |
| Inputs y textarea | Fondo blanco, borde `#ccc` | Fondo `#2a2a2a`, borde `#555` |
| Texto dentro de inputs | `#333` | `white` |

Los botones y enlaces del header **no cambian** — siguen siendo blancos con texto azul, porque no tienen un selector `.dark` especifico.

**Por que se usa localStorage?** Para que si el usuario cierra el navegador y vuelve a entrar, recuerde si habia elegido modo oscuro o claro. Si usara sessionStorage, se perderia al cerrar la pestana.

### Responsive (lineas 260-288)
- **900px** — grilla de noticias pasa a 2 columnas
- **600px** — header se apila verticalmente, grilla pasa a 1 columna, botones del conversor ocupan todo el ancho

---

## js/noticias.js — Gestor de noticias (56 lineas)

### noticiasIniciales (lineas 1-32)
Array con 6 objetos de noticias precargadas para cuando el usuario abre el portal por primera vez. Cada objeto tiene:
- `titulo` — string con el titulo
- `descripcion` — string con la descripcion
- `imagen` — string con URL de Unsplash (tamano fijo 400x250)

### inicializarNoticias() (lineas 34-43)
```js
if(!localStorage.getItem("noticias")){
    localStorage.setItem("noticias", JSON.stringify(noticiasIniciales));
}
```
Si no existe la clave "noticias" en localStorage, guarda el array de noticias iniciales convertido a JSON. Si ya existe, no hace nada (no sobreescribe).

### obtenerNoticias() (lineas 45-49)
```js
return JSON.parse(localStorage.getItem("noticias"));
```
Lee el string JSON de localStorage, lo convierte a array de objetos JavaScript y lo devuelve.

### guardarNoticias(noticias) (lineas 51-55)
```js
localStorage.setItem("noticias", JSON.stringify(noticias));
```
Toma un array de noticias, lo convierte a JSON y lo guarda en localStorage.

---

## js/dolar.js — Cotizacion y conversor (54 lineas)

### let valorDolar (linea 1)
Variable global que almacena el valor de venta del dolar blue. Se usa en el conversor para hacer los calculos.

### async obtenerDolar() (lineas 3-28)
Funcion asincrona que:
1. Hace un fetch a `https://api.bluelytics.com.ar/v2/latest` (API argentina gratuita)
2. Extrae `data.blue.value_sell` (valor de venta del blue) y lo guarda en `valorDolar`
3. Renderiza en `#dolar`:
   - `<h2>Dolar Blue</h2>` — titulo
   - Precio de compra: `$[valor]`
   - Precio de venta: `$[valor]`
4. Si hay error (API caida, sin internet, etc.), muestra "Error al obtener cotizacion."

### Conversor (lineas 30-53)
Escucha clicks en toda la pagina con `document.addEventListener("click", ...)`:
1. Obtiene el input `#montoInput` y el parrafo `#resultadoConversion`
2. Si el monto es 0 o negativo, muestra "Ingrese un monto valido."
3. **USD a ARS**: multiplica el monto por `valorDolar` y muestra el resultado formateado con `toLocaleString("es-AR")`
4. **ARS a USD**: divide el monto por `valorDolar` y muestra con 2 decimales

---

## js/app.js — Inicializacion del portal (42 lineas)

### DOMContentLoaded a iniciar() (lineas 1-8)
Cuando el DOM esta listo:
1. `inicializarNoticias()` — carga las noticias iniciales si es primera vez
2. `mostrarNoticias()` — renderiza las noticias en la grilla
3. `obtenerDolar()` — pide la cotizacion a la API
4. `cargarTema()` — restaura el tema oscuro si estaba activo

### mostrarNoticias() (lineas 10-27)
1. Obtiene el contenedor `#noticias`
2. Obtiene las noticias desde localStorage
3. Itera con `forEach` y por cada noticia renderiza:
   ```html
   <div class="card">
       <img src="[imagen]">
       <h3>[titulo]</h3>
       <p>[descripcion]</p>
   </div>
   ```

### cambiarTema() (lineas 32-36)
1. Alterna la clase `.dark` en el body con `classList.toggle("dark")`
2. Guarda la preferencia en localStorage con clave "theme" ("dark" o "light")

### cargarTema() (lineas 38-41)
Si en localStorage hay guardado "dark", agrega la clase `.dark` al body al cargar la pagina.

---

## js/auth.js — Autenticacion (29 lineas)

### Auto-redirect (linea 1-3)
```js
if(sessionStorage.getItem("admin")){
    window.location.href = "admin.html";
}
```
Si ya hay una sesion activa al entrar a login.html, redirige directamente al admin.

### async login(e) (lineas 5-29)
1. `e.preventDefault()` — evita que el formulario recargue la pagina
2. Obtiene los valores de `#username` y `#password`
3. Hace un POST a `https://dummyjson.com/auth/login` con:
   - Headers: `Content-Type: application/json`
   - Body: `{ username, password }` en JSON
4. Si la respuesta es ok (codigo 200):
   - Guarda los datos del usuario en `sessionStorage` con clave "admin"
   - Redirige a `admin.html`
5. Si la respuesta falla: muestra alert "Credenciales incorrectas"

---

## js/admin.js — Panel de administracion (75 lineas)

### Proteccion de ruta (lineas 1-3)
```js
if(!sessionStorage.getItem("admin")){
    window.location.href = "login.html";
}
```
Si no hay sesion activa, redirige al login.

### mostrarNoticiasAdmin() (lineas 5, 27-48)
Al cargar la pagina, renderiza las noticias existentes. Por cada noticia crea:
```html
<div class="card">
    <img src="[imagen]">
    <h3>[titulo]</h3>
    <p>[descripcion]</p>
    <button onclick="editarNoticia([index])">Editar</button>
    <button onclick="eliminarNoticia([index])">Eliminar</button>
</div>
```
Los botones Editar y Eliminar llaman a sus funciones pasando el indice de la noticia en el array.

### agregarNoticia(e) (lineas 7, 9-25)
1. Previene el envio del formulario
2. Obtiene titulo, descripcion y URL de imagen
3. **Valida la URL**: usa `new URL(imagen)` dentro de un try-catch. Si la URL no es valida (por ej. "texto_sin_formato"), lanza un error, captura la excepcion y muestra alert "La URL de la imagen no es valida" sin guardar
4. Si pasa la validacion: obtiene el array de noticias, agrega la nueva, guarda en localStorage y refresca la lista
5. Resetea el formulario

### eliminarNoticia(index) (lineas 50-57)
1. Obtiene el array de noticias
2. Elimina el elemento en la posicion `index` con `splice(index, 1)`
3. Guarda el array actualizado en localStorage
4. Vuelve a renderizar la lista

### editarNoticia(index) (lineas 59-69)
1. Obtiene el array y la noticia en la posicion `index`
2. Llena el formulario con los datos de esa noticia (titulo, descripcion, imagen)
3. Elimina la noticia original del array (para que al guardar se cree una nueva version)

### Logout (lineas 72-75)
```js
sessionStorage.removeItem("admin");
window.location.href = "index.html";
```
Al hacer clic en "Cerrar sesion": elimina la sesion de sessionStorage y redirige al portal principal.

---

## CLIMA DE ROSARIO (feature separada)

Dentro de la carpeta `clima-feature/` esta el codigo del clima, listo para agregar manualmente.

### clima.js — como funciona
```js
fetch("https://wttr.in/Rosario?format=j1")
```
wttr.in es una API gratuita que devuelve datos meteorologicos actuales en formato JSON. No requiere API key ni registro. Rosario se pasa como parametro en la URL.

Lo que muestra:
- **Temperatura** en grados Celsius (`temp_C`)
- **Descripcion** del clima ej: "Despejado", "Lluvia ligera" (`weatherDesc[0].value`)
- **Humedad** porcentaje (`humidity`)
- **Viento** en km/h (`windspeedKmph`)

### Como agregarlo al portal
1. Copiar `clima.js` a `js/clima.js`
2. En `index.html`: agregar `<section id="clima">` con su `h2` y `#climaInfo` antes de `#noticias`
3. En `index.html`: agregar `<script src="js/clima.js"></script>` antes de `app.js`
4. En `styles.css`: agregar estilos para `#clima` (card blanca con sombra, igual que las otras secciones)
5. En `styles.css`: agregar `#clima` al dark mode

---

## CREDENCIALES DE PRUEBA

| Campo | Valor |
|-------|-------|
| Usuario | `emilys` |
| Contrasena | `emilyspass` |

Son credenciales de prueba de https://dummyjson.com — un usuario real de su API de ejemplo.

---

## ALMACENAMIENTO EN EL NAVEGADOR

El portal usa dos tipos de almacenamiento del navegador:

### localStorage (persiste aunque cierres el navegador)
| Clave | Contenido |
|-------|-----------|
| `noticias` | Array JSON con todas las noticias (titulo, descripcion, imagen) |
| `theme` | String "dark" o "light" — ultima preferencia de tema |

### sessionStorage (se borra al cerrar la pestana/navegador)
| Clave | Contenido |
|-------|-----------|
| `admin` | Objeto JSON con datos del usuario autenticado (id, username, token, etc.) |

---

## APIs EXTERNAS

| API | URL | Uso |
|-----|-----|-----|
| Bluelytics | `api.bluelytics.com.ar/v2/latest` | Cotizacion del dolar blue argentino (compra/venta) |
| DummyJSON | `dummyjson.com/auth/login` | Autenticacion de prueba con usuario/contrasena |
| wttr.in | `wttr.in/Rosario?format=j1` | Clima actual de Rosario (feature separada) |

---

## COMO SUBIR CAMBIOS A GITHUB

Cuando hagas cambios (por ejemplo, agregar el clima) y quieras subirlos al repositorio remoto, segui estos pasos:

### 1. Ver el estado actual
```bash
git status
```
Muestra que archivos se modificaron, cuales son nuevos y cuales estan sin seguimiento.

### 2. Agregar los archivos modificados
```bash
git add .
```
El punto (`.`) agrega todos los archivos que aparecen como modificados o nuevos.

Si queres agregar solo archivos especificos:
```bash
git add index.html css/styles.css js/clima.js
```

### 3. Crear un commit
```bash
git commit -m "Agrega clima de Rosario al portal"
```
El mensaje debe describir brevemente lo que hiciste.

### 4. Subir los cambios a GitHub

Para subir a la rama `dev` (recomendado):
```bash
git push origin main:dev
```

Para subir directo a `main`:
```bash
git push origin main
```

### 5. Hacer el merge desde GitHub

1. Entra a https://github.com/maximoortenzi/PortaldeNoticiasVF
2. Hace clic en "Compare & pull request" (si subiste a dev)
3. Revisa los cambios y crea el Pull Request de `dev` a `main`
4. Hace clic en "Merge pull request" y "Confirm merge"

### Resumen rapido (todo junto)
```bash
git add .
git commit -m "Agrega clima de Rosario"
git push origin main:dev
```
Despues entras a GitHub y mergeas el Pull Request.
