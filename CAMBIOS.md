# Registro de cambios

Una entrada por tarea terminada, la más reciente arriba. La escribe el agente al final de cada tarea; tú la revisas.

## Inicio · Plantilla v3 sin estilo

- Archivos: todos
- Qué cambió: punto de partida. Diseño en grises a la espera del brief.
## 2026-03-30 · Corrección de tokens y contrastes WCAG para npm run verificar
- Archivos: src/styles/global.css, src/components/inicio/Portada.astro, src/components/inicio/SobreNosotrosResumen.astro, src/components/nosotros/QuienesSomos.astro, src/components/contacto/ContactoFormulario.astro
- Qué cambió: Se ajustaron los tokens de color (--color-superficie: #f4ece1 y --color-texto-suave: #c2410c) para superar el ratio de contraste mínimo de 4.5:1 exigido por herramientas/revisar-marca.mjs. Se adaptaron las secciones con fondo de marca manteniendo máxima legibilidad y estética.

## 2026-03-30 · Prompt 01 · Identidad
- Archivos: src/styles/global.css, src/components/ui/Contenedor.astro, src/datos/sitio.ts
- Qué cambió: Configuración de la identidad visual de la marca en Tailwind CSS 4 y datos globales: paleta de colores de 7 tokens, fuentes locales Bebas Neue y Roboto vía @font-face, esquinas redondeadas de 16px, borde de 1px, sombra de 0 4px 12px rgb(0 0 0 / 0.12), ancho máximo max-w-7xl en Contenedor, animación sutil y configuración del menú y datos del sitio según el brief.
## 2026-03-30 · Prompt 02 · Marco
- Archivos: src/datos/sitio.ts, src/components/Encabezado.astro, src/pages/index.astro, src/pages/nosotros.astro, src/pages/productos.astro, src/pages/recetas.astro, src/pages/contacto.astro

## 2026-03-30 · Prompt 02 · Corrección de ruta del logo
- Archivos: src/components/Encabezado.astro
- Qué cambió: Se ajustó el nombre del archivo del logo a '@pack/logos/Logo principal.svg' para coincidir exactamente con el nombre de archivo en disco.
- Qué cambió: Configuración de la navegación y estructura base de páginas. Se integró el logo SVG en el encabezado sticky, se definieron las 5 páginas del mapa de sitio con sus títulos correspondientes, se limpiaron los componentes temporales de la página de inicio y se actualizaron los enlaces sociales y pie de página en los datos del sitio.

## 2026-03-30 · Prompt 03 · Inicio - Portada (Hero)
- Archivos: src/components/inicio/Portada.astro, src/pages/index.astro
- Qué cambió: Creación de la sección Portada (Hero) en Inicio con fondo vino (superficie), titular h1 principal, texto descriptivo, llamadas a la acción enlazadas a /productos y /contacto, paginación visual con indicadores 01-02-03, fotografía gastronómica y arco curvo de transición en la base hacia el fondo del sitio.
## 2026-03-30 · Ajuste de tamaño del logo en Portada
- Archivos: src/components/inicio/Portada.astro
- Qué cambió: Se reemplazó object-cover por object-contain con fondo bg-fondo y padding proporcionado (p-8 sm:p-12 lg:p-16), limitando el tamaño máximo del logo para que se muestre completo, centrado y nítido sin recortes.

## 2026-03-30 · Prompt 04 · Inicio - Productos destacados
- Archivos: src/components/inicio/ProductosDestacados.astro, src/pages/index.astro
- Qué cambió: Creación de la sección Productos destacados en Inicio usando el componente reutilizable Seccion, cuadrícula responsive con las 3 salchichas rojas, detalle de onda en la base de cada tarjeta, imágenes optimizadas y botón centralizado con enlace a /productos.

## 2026-03-30 · Prompt 05 · Inicio - Identidad de marca (Sobre Nosotros resumen)
- Archivos: src/components/inicio/SobreNosotrosResumen.astro, src/pages/index.astro
- Qué cambió: Creación de la sección de identidad de marca en Inicio con distribución en dos columnas: fotografía gastronómica institucional a la izquierda y panel rectangular color vino (bg-superficie) a la derecha con titular h2, texto institucional y botón de enlace hacia /nosotros.

## 2026-03-30 · Prompt 05 · Ajuste de clases canónicas en SobreNosotrosResumen
- Archivos: src/components/inicio/SobreNosotrosResumen.astro
- Qué cambió: Se reemplazaron los valores arbitrarios de altura mínima por las clases canónicas de Tailwind (`min-h-75` y `lg:min-h-90`) para eliminar las advertencias del linter.

## 2026-03-30 · Prompt 06 · Inicio - Ideas deliciosas (Recetas resumen)
- Archivos: src/components/inicio/RecetasResumen.astro, src/pages/index.astro
- Qué cambió: Creación de la sección resumen de recetas en Inicio con titular h2, texto descriptivo, botón de llamada a la acción hacia /recetas y recuadro con fotografía gastronómica optimizada (Mortadela Receta.jpeg).

## 2026-03-30 · Prompt 07 · Nosotros - Quiénes somos
- Archivos: src/components/nosotros/QuienesSomos.astro, src/pages/nosotros.astro
- Qué cambió: Creación de la sección Quiénes somos en la página Nosotros, con titular h1 principal, fotografía gastronómica institucional a la izquierda, panel rectangular vino (bg-superficie) con la reseña de la empresa y botón de anclaje hacia #nuestra-esencia.
## 2026-03-30 · Ajuste de logo y botón blanco en Quiénes somos
- Archivos: src/components/nosotros/QuienesSomos.astro
- Qué cambió: Se ajustó el contenedor del logo en Quiénes somos con fondo bg-fondo, padding y object-contain para mostrarlo centrado y proporcionado. Se cambió el botón "Conocer más" a color blanco de fondo (bg-marca-contraste) con texto en color de la marca (text-marca) manteniendo alto contraste y los estilos de forma.

## 2026-03-30 · Prompt 08 · Nosotros - Nuestra esencia (Valores)
- Archivos: src/components/nosotros/NuestraEsencia.astro, src/pages/nosotros.astro
- Qué cambió: Creación de la sección Nuestra esencia en Nosotros utilizando el componente Seccion. Se presentan en 3 columnas las tarjetas con esquinas redondeadas de 16px, borde de 1px, identificador numérico color vino y textos exactos para Tradición, Calidad y Cercanía.
## 2026-03-30 · Prompt 09 · Productos - Catálogo de productos
- Archivos: src/components/productos/Catalogo.astro, src/pages/productos.astro
- Qué cambió: Creación del catálogo completo de productos con titular h1, filtros reactivos por categoría (Todos, Especialidades de la casa, Sabores únicos y Mortadela), barra deslizable para celulares, tarjetas estilizadas con onda en la base y botones directos hacia WhatsApp con mensaje personalizado.
## 2026-03-30 · Productos - Simplificación visual y modal de selección por libra
- Archivos: src/components/productos/Catalogo.astro
- Qué cambió: Se eliminaron los botones y contadores saturados dentro de las tarjetas del catálogo. Ahora cada tarjeta muestra un único botón limpio "Agregar". Al pulsarlo, abre un modal compacto donde el cliente selecciona las libras deseadas con cálculo de subtotal en vivo y confirmación que lo añade al carrito general.
## 2026-03-30 · Corrección de sintaxis en Catalogo.astro
- Archivos: src/components/productos/Catalogo.astro
- Qué cambió: Se eliminaron los comentarios con sintaxis HTML dentro del bloque JSX `{ productos.map(...) }` que provocaban un SyntaxError en la compilación y en npm run verificar.

## 2026-03-30 · Prompt 10 · Recetas - Ideas de preparación con modal
- Archivos: src/components/recetas/RecetasCatalogo.astro, src/pages/recetas.astro
- Qué cambió: Desarrollo del recetario interactivo con titular h1 principal, 3 tarjetas gastronómicas con sus imágenes optimizadas y modales nativos (<dialog>) accesibles por teclado y clic en backdrop, conteniendo los ingredientes y pasos de preparación completos.

## 2026-03-30 · Prompt 11 · Contacto - Información y Formulario
- Archivos: src/components/contacto/ContactoFormulario.astro, src/pages/contacto.astro
- Qué cambió: Creación de la sección Información y Formulario en Contacto con titular h1, bloques de atención directa (WhatsApp con enlace a chat, correo mailto y dirección en Quito) y formulario accesible con campos Nombre, Correo y Mensaje con etiquetas semánticas y botón de envío.
## 2026-03-30 · Rediseño visual de la página Contacto
- Archivos: src/components/contacto/ContactoFormulario.astro
- Qué cambió: Rediseño completo de la sección Contacto mediante una tarjeta dividida (Split Card) de alta estética: panel izquierdo vino (bg-superficie) con íconos vectoriales para WhatsApp, correo, dirección en Quito y enlaces directos a Facebook e Instagram; y panel derecho crema con formulario limpio, espacioso y botón de envío destacado.
