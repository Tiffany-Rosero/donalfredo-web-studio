Archivo: prompts.md
# Prompts

## Prompt 01 · Identidad · Paleta, tipografías, forma y animación

**Tarea:** Configurar en los tokens globales de la plantilla los colores de la marca, las tipografías locales, los radios de esquina, sombras, ancho máximo de contenedor y nivel de animación.
**Datos:** brief, secciones 3 (Paleta de color), 4 (Tipografías), 5 (Forma) y 6 (Animación).
**Pega estos archivos (versión actual, con su ruta):**
- `src/styles/global.css`
- `src/components/ui/Contenedor.astro`
- `src/datos/sitio.ts`
**Devuélveme completos:**
- `src/styles/global.css` (REEMPLAZA)
- `src/components/ui/Contenedor.astro` (REEMPLAZA)
- `src/datos/sitio.ts` (REEMPLAZA)
**Borrar:** nada
**Terminado cuando:**
- Los colores `--color-fondo` (#FFFBF5), `--color-superficie` (#790B10), `--color-texto` (#171313), `--color-texto-suave` (#E94B16), `--color-borde` (#F58220), `--color-marca` (#B51218) y `--color-marca-contraste` (#FFFFFF) están declarados en `@theme`.
- Las fuentes Bebas Neue y Roboto están cargadas con `@font-face` desde `../../pack/fuentes/` con sus formatos woff2.
- El radio es `16px`, borde `1px`, sombra `0 4px 12px rgb(0 0 0 / 0.12)`, ancho `max-w-7xl` y animación `sutil`.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

---

## Prompt 02 · Marco · Datos del sitio, navegación y páginas base

**Tarea:** Configurar los datos de la marca, enlaces de navegación, encabezado con logo SVG, pie de página, crear las páginas del mapa del sitio vacías con su título y limpiar secciones de plantilla en Inicio.
**Datos:** brief, secciones 1 (Marca), 7 (Logo y menú), 8 (Mapa del sitio) y 10 (Contacto y pie de página).
**Pega estos archivos (versión actual, con su ruta):**
- `src/datos/sitio.ts`
- `src/pages/index.astro`
- `src/components/Encabezado.astro`
**Devuélveme completos:**
- `src/datos/sitio.ts` (REEMPLAZA)
- `src/components/Encabezado.astro` (REEMPLAZA)
- `src/pages/index.astro` (REEMPLAZA)
- `src/pages/nosotros.astro` (NUEVO)
- `src/pages/productos.astro` (NUEVO)
- `src/pages/recetas.astro` (NUEVO)
- `src/pages/contacto.astro` (NUEVO)
**Borrar:**
- `src/components/inicio/Portada.astro`
- `src/components/inicio/Comprobacion.astro`
- `src/components/inicio/Pasos.astro`
**Terminado cuando:**
- El encabezado muestra el logo `pack/logos/Logoprincipal.svg`, es fijo y el menú desplegable tiene Inicio, Nosotros, Productos, Recetas y Contacto.
- Cada página carga su respectivo título en la pestaña del navegador (`Inicio`, `Nosotros`, `Productos`, `Recetas`, `Contacto`).
- El pie de página muestra el texto de derechos reservados y enlaces a Facebook e Instagram.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

---

## Prompt 03 · Inicio · Sección Portada (Hero)

**Tarea:** Construir la sección de Portada (Hero) en Inicio con carrusel visual/indicadores, titular principal, texto, botones de llamada a la acción y fotografía gastronómica.
**Datos:** brief, sección 9, Página Inicio, Sección Portada (Hero).
**Pega estos archivos (versión actual, con su ruta):**
- `src/pages/index.astro`
**Devuélveme completos:**
- `src/components/inicio/Portada.astro` (NUEVO)
- `src/pages/index.astro` (REEMPLAZA)
**Borrar:** nada
**Disposición:** celular: HERO centrado con título "El sabor de la tradición en tu mesa", texto descriptivo, botones "Conoce nuestros productos" y "Contáctanos" apilados; computadora: bloque dividido en dos columnas con texto, botones e indicadores "01-02-03" a la izquierda, y fotografía gastronómica a la derecha con arco curvo en la base.
**Referencia:** 1a (Presenta sus productos de forma elegante y gastronómica transmitiendo calidad y tradición).
**Terminado cuando:**
- La sección cuenta con `<h1>` único que contiene "El sabor de la tradición en tu mesa.".
- Se importa la imagen `@pack/imagenes/portada_embutidos.jpg` mediante `<Image />`.
- Los botones enlazan correctamente a `/productos` y `/contacto`.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

---

## Prompt 04 · Inicio · Sección Productos destacados

**Tarea:** Crear la sección de productos destacados mostrando la variedad de salchichas rojas con tarjetas estilizadas, onda en la base y acceso directo al catálogo.
**Datos:** brief, sección 9, Página Inicio, Sección Productos destacados.
**Pega estos archivos (versión actual, con su ruta):**
- `src/pages/index.astro`
**Devuélveme completos:**
- `src/components/inicio/ProductosDestacados.astro` (NUEVO)
- `src/pages/index.astro` (REEMPLAZA)
**Borrar:** nada
**Disposición:** celular: encabezado "Nuestros productos destacados." con tarjetas apiladas en vertical con foto, título, texto y onda en la base; computadora: título superior, texto introductorio y fila horizontal de 3 tarjetas de productos con esquinas redondeadas, onda en la base y botón "Ver catálogo completo" abajo.
**Referencia:** 2b (Resalta sus productos más destacados para generar confianza y rápida elección).
**Terminado cuando:**
- Se muestran las 3 tarjetas de producto (Salchicha Delgada, Salchicha Mediana, Salchicha Gruesa) con sus imágenes importadas desde `@pack/imagenes/`.
- El botón "Ver catálogo completo" dirige a `/productos`.
- Se aplica el detalle visual de onda en la base de las tarjetas.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

---

## Prompt 05 · Inicio · Sección Identidad de marca (Sobre Nosotros resumen)

**Tarea:** Crear la sección de identidad de marca en Inicio con foto gastronómica y panel color vino con el mensaje institucional y botón de acceso a Nosotros.
**Datos:** brief, sección 9, Página Inicio, Sección Identidad de marca / Sobre Nosotros.
**Pega estos archivos (versión actual, con su ruta):**
- `src/pages/index.astro`
**Devuélveme completos:**
- `src/components/inicio/SobreNosotrosResumen.astro` (NUEVO)
- `src/pages/index.astro` (REEMPLAZA)
**Borrar:** nada
**Disposición:** celular: bloque apilado en un panel color vino con texto claro centrado y botón "Conócenos"; computadora: bloque dividido en dos columnas; a la izquierda contenedor para FOTO (`portada_embutidos.jpg`), a la derecha panel rectangular vino con título, texto y botón "Conócenos".
**Referencia:** ninguna
**Terminado cuando:**
- El bloque utiliza el color de fondo vino (`bg-superficie`) y texto en alto contraste (`text-marca-contraste`).
- El botón "Conócenos" conduce a la ruta `/nosotros`.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

---

## Prompt 06 · Inicio · Sección Ideas deliciosas (Recetas resumen)

**Tarea:** Crear la sección resumen de recetas en Inicio que invite a conocer las preparaciones de Don Alfredo y dirija a la página de recetas.
**Datos:** brief, sección 9, Página Inicio, Sección Ideas deliciosas (Recetas resumen).
**Pega estos archivos (versión actual, con su ruta):**
- `src/pages/index.astro`
**Devuélveme completos:**
- `src/components/inicio/RecetasResumen.astro` (NUEVO)
- `src/pages/index.astro` (REEMPLAZA)
**Borrar:** nada
**Disposición:** celular: bloque con título "Ideas deliciosas", texto y botón "Ver recetas" apilados; computadora: contenedor dividido horizontalmente; texto y botón a la izquierda, recuadro para FOTO (`Mortadela Receta.jpeg`) a la derecha.
**Referencia:** ninguna
**Terminado cuando:**
- Se muestra la fotografía de receta y el botón enlaza a `/recetas`.
- Todo el bloque respeta los radios y estilos de la marca.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

---

## Prompt 07 · Nosotros · Sección Quiénes somos

**Tarea:** Construir la sección principal de la página Nosotros con fotografía institucional, descripción de la empresa y botón que navegue hacia los valores.
**Datos:** brief, sección 9, Página Nosotros, Sección Quiénes somos.
**Pega estos archivos (versión actual, con su ruta):**
- `src/pages/nosotros.astro`
**Devuélveme completos:**
- `src/components/nosotros/QuienesSomos.astro` (NUEVO)
- `src/pages/nosotros.astro` (REEMPLAZA)
**Borrar:** nada
**Disposición:** celular: FOTO arriba a ancho completo y panel color vino debajo con texto claro centrado y botón "Conocer más"; computadora: FOTO a la izquierda y panel rectangular vino a la derecha con título, texto y botón en crema.
**Referencia:** ninguna
**Terminado cuando:**
- La sección cuenta con `<h1>` con el texto "Conoce nuestra historia.".
- El panel utiliza fondo vino (`bg-superficie`) con tipografía legible en blanco/crema.
- El botón "Conocer más" desplaza hacia `#nuestra-esencia`.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

---

## Prompt 08 · Nosotros · Sección Nuestra esencia (Valores)

**Tarea:** Implementar la sección de valores de la marca en Nosotros destacando Tradición, Calidad y Cercanía.
**Datos:** brief, sección 9, Página Nosotros, Sección Nuestra esencia (Valores).
**Pega estos archivos (versión actual, con su ruta):**
- `src/pages/nosotros.astro`
**Devuélveme completos:**
- `src/components/nosotros/NuestraEsencia.astro` (NUEVO)
- `src/pages/nosotros.astro` (REEMPLAZA)
**Borrar:** nada
**Disposición:** celular: título "Lo que nos representa" y 3 elementos/valores apilados con detalles gráficos en crema y vino; computadora: cabecera superior y 3 columnas horizontales para Tradición, Calidad y Cercanía con tarjetas redondeadas.
**Referencia:** ninguna
**Terminado cuando:**
- Se listan los tres valores con sus títulos y descripciones exactas del brief.
- Se incluyen contenedores con esquinas de 16px y borde de 1px.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

---

## Prompt 09 · Productos · Sección Catálogo de productos

**Tarea:** Construir el catálogo completo de productos con filtros interactivos por categoría (Todos, Especialidades de la casa, Sabores únicos, Mortadela), fichas técnicas con onda en la base y botón directo para consultar por WhatsApp.
**Datos:** brief, sección 9, Página Productos, Sección Catálogo de productos.
**Pega estos archivos (versión actual, con su ruta):**
- `src/pages/productos.astro`
**Devuélveme completos:**
- `src/components/productos/Catalogo.astro` (NUEVO)
- `src/pages/productos.astro` (REEMPLAZA)
**Borrar:** nada
**Disposición:** celular: título "Descubre nuestros productos.", descripción, barra de filtros deslizable horizontalmente y tarjetas a 1 columna con botón hacia WhatsApp; computadora: cabecera con títulos y descripción, barra de filtros centrada y cuadrícula de 3 a 4 columnas con las tarjetas de productos, onda en la base y botón «Consultar producto» con flecha.
**Referencia:** 1a, 1b, 2a (Fotografías gastronómicas apetitosas, organización por categorías y fichas claras con textos breves).
**Terminado cuando:**
- La sección cuenta con `<h1>` con el texto "Descubre nuestros productos.".
- Se muestran los 6 productos organizados en sus 3 categorías (Especialidades de la casa, Sabores únicos y Mortadela) con sus imágenes correspondientes.
- Los filtros permiten alternar la vista entre categorías de forma reactiva.
- Cada botón «Consultar producto» redirige a WhatsApp (`https://wa.me/593962868133`) con un mensaje personalizado.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

---

## Prompt 10 · Recetas · Sección Ideas de preparación con modal

**Tarea:** Desarrollar el recetario interactivo con tarjetas de preparación y un modal accesible para ver los ingredientes y pasos detallados de cada receta.
**Datos:** brief, sección 9, Página Recetas, Sección Ideas de preparación.
**Pega estos archivos (versión actual, con su ruta):**
- `src/pages/recetas.astro`
**Devuélveme completos:**
- `src/components/recetas/RecetasCatalogo.astro` (NUEVO)
- `src/pages/recetas.astro` (REEMPLAZA)
**Borrar:** nada
**Disposición:** celular: cabecera con título "RECETAS Ideas deliciosas para tu mesa", tarjetas de recetas en 1 columna vertical con foto, descripción y botón "Ver receta"; computadora: cabecera centrada, cuadrícula de 3 columnas de recetas y botón rojo en cada tarjeta que abre un modal con ingredientes numerados y preparación por pasos.
**Referencia:** ninguna
**Terminado cuando:**
- La sección cuenta con `<h1>` con el texto "RECETAS Ideas deliciosas para tu mesa".
- Se muestran las 3 recetas (Sánduche de mortadela, Salchichas a la parrilla, Choripan) con sus respectivas fotos (`Mortadela Receta.jpeg`, `Salchicha Parilla.jpeg`, `Choripan Receta.jpeg`).
- Al pulsar "Ver receta", se abre un modal accesible (vía `<dialog>` o script nativo) que muestra ingredientes y pasos con botón de cierre funcional y cierre con tecla Escape.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

---

## Prompt 11 · Contacto · Sección Información y Formulario

**Tarea:** Crear la sección de contacto con datos directos (WhatsApp, dirección en Quito y correo electrónico) y formulario semántico de mensajes.
**Datos:** brief, sección 9, Página Contacto, Sección Información y Formulario.
**Pega estos archivos (versión actual, con su ruta):**
- `src/pages/contacto.astro`
**Devuélveme completos:**
- `src/components/contacto/ContactoFormulario.astro` (NUEVO)
- `src/pages/contacto.astro` (REEMPLAZA)
**Borrar:** nada
**Disposición:** celular: título "¡Estamos para atenderte!", datos de contacto apilados y formulario en 1 columna vertical con botón de envío rojo; computadora: bloque de dos columnas; a la izquierda datos de contacto (WhatsApp con enlace directo, correo mailto y dirección física), a la derecha formulario con etiquetas visibles e inputs estilizados.
**Referencia:** ninguna
**Terminado cuando:**
- La sección cuenta con `<h1>` con el texto "¡Estamos para atenderte!".
- Los campos del formulario (Nombre, Correo, Mensaje) tienen sus `<label>` asociados y foco visible.
- Los botones de acceso directo a WhatsApp y correo funcionan correctamente.