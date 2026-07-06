# Clima en Rosario

## Archivos

- `clima.js` → copiar a `js/clima.js`
- `agregar-a-index.html` → HTML a agregar en `index.html`
- `agregar-a-styles.css` → CSS a agregar en `styles.css`

## Pasos

1. Copiar `clima.js` a `js/clima.js`
2. En `index.html`, antes del section `#noticias` agregar:

```html
<section id="clima">
    <h2>Clima en Rosario</h2>
    <div id="climaInfo">Cargando...</div>
</section>
```

3. En `index.html` agregar `<script src="js/clima.js"></script>` antes de `app.js`

4. En `css/styles.css` agregar:

```css
#clima{
    width:90%;
    margin:20px auto;
    background:white;
    padding:20px;
    border-radius:12px;
    box-shadow:0 2px 10px rgba(0,0,0,0.1);
}

#clima h2{
    margin-bottom:15px;
}

#clima p{
    margin-bottom:5px;
}
```

5. Para dark mode, agregar `#clima,` en la misma línea que los otros selectores dentro de `.dark`:

```css
.dark #dolar,
.dark #conversor,
.dark #clima,
```
