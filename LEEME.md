# Módulo 5 · Actitudes y aptitudes en el entorno hospitalario

Presentación de Hospital Florence (Hosperation), con 35 diapositivas en React + Vite.

## Ver en tu compu
```
npm install
npm run dev
```
Abre la dirección que aparece en la terminal.

**Controles**
- Flechas o barra espaciadora para avanzar y retroceder.
- **F** para pantalla completa.
- La dirección termina en `#número`, así que al recargar regresas a la misma diapositiva.

## Archivos
- `src/slides/index.js`: el orden de las diapositivas. Ahí se reacomodan o se quitan.
- `src/slides/s1…s6_*.jsx`: el contenido de cada bloque.
- `src/index.css`: los colores y tipografías de la marca.
- `public/lluvia-input.html` y `public/lluvia-display.html`: la lluvia de ideas por QR. Usa el mismo Apps Script de los otros módulos, con la sesión `actitudes-aptitudes-m5`.
- `public/imprimible.html`: el ejercicio imprimible, del que sale el PDF.
- **Video de YouTube:** se cambia en `VIDEO_ID`, dentro de `src/slides/s1_apertura.jsx`.

## Publicar
Pendiente de revisión. Se sube al proyecto de Vercel de consultoria.hosperation.com.
Los QR toman solos el dominio donde esté publicada.
