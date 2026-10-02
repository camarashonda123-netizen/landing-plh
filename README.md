# Club Playa Honda — Homepage Mockup

Implementación estática del mockup visual aprobado para la nueva portada de Club Playa Honda.

## Estructura
- `index.html` — estructura semántica y contenido.
- `css/style.css` — identidad visual, responsive y componentes.
- `js/main.js` — navegación móvil, reveal animations, parallax y microinteracciones.
- `assets/` — recursos gráficos derivados de la imagen de referencia.
- `design-reference.png` — referencia visual original.

## Animaciones
Se utiliza **GSAP + ScrollTrigger** vía CDN para reveal al entrar en viewport, parallax, hover y microinteracciones. La página respeta `prefers-reduced-motion`.

## Ejecutar
Puedes abrir `index.html` directamente o servir la carpeta con un servidor estático:

```bash
python -m http.server 8080
```

Luego visita `http://localhost:8080`.

## Recursos
Los JPG/PNG incluidos fueron recortados de la imagen de referencia suministrada para reproducir el mockup con alta fidelidad visual. Para producción se recomienda sustituirlos por fotografías originales en alta resolución manteniendo las mismas rutas.
