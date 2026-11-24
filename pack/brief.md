Archivo: brief.md
# Brief de la marca

> **Estudiante:** este archivo lo genera la IA (fase 2) a partir de tu plan aprobado. Revísalo antes de usar Cline: todo lo que dice aquí es lo que se va a construir.
> Si algo dice `POR DEFINIR`, decídelo tú y pídele a la IA que lo actualice.
>
> **Agente:** este brief es la única fuente de decisiones de diseño y contenido.
> Si un campo que necesitas dice `POR DEFINIR` o está vacío, **detente y pregunta**: no inventes, no busques en otros archivos, no supongas.
> Copia los textos tal cual están escritos (no los reescribas ni "mejores").

## 1. Marca

| Campo | Decisión |
| --- | --- |
| Nombre de la marca | Embutidos “Don Alfredo” |
| Tipo | real |
| Qué hace, en una frase | producción y comercialización de embutidos de alta calidad |
| Para quién es (público) | dirigida a hogares, emprendedores y negocios gastronómicos, principalmente a hombres y mujeres de entre 20 y 60 años que buscan productos con buen sabor y tradición |
| Personalidad (3 adjetivos) | tradicional, cercana y confiable |
| Eslogan | El sabor de la tradición en tu mesa. |
| Descripción para Google (máx. 155 caracteres) | Embutidos Don Alfredo: tradición y alta calidad ecuatoriana en embutidos para hogares y negocios gastronómicos. El sabor de la tradición en tu mesa. |

## 2. Referencias

Qué tomar de cada sitio de referencia (las capturas están en el plan, `pack/plan.pdf`).

| Ref | Sitio | Detalle que tomamos | Dónde se aplica |
| --- | --- | --- | --- |
| 1a | LA QUERCIA | Presenta sus productos de forma elegante y gastronómica, utilizando fotografías que hacen que los embutidos se vean apetitosos y transmiten una imagen de calidad, tradición y cuidado por los detalles. | Usada en la página de inicio y en las secciones del catálogo de productos. |
| 1b | PEDERSON'S NATURAL | Organiza sus productos en diferentes categorías dentro del sitio web, facilitando que los usuarios encuentren rápidamente el tipo de embutido que buscan. | Usada en el en la sección «Nuestros productos» de Don Alfredo. |
| 2a | LA QUERCIA | Combina fotografías con textos breves que presentan los productos de manera clara y atractiva, evitando sobrecargar visualmente la página y facilitando la comprensión de la información. | Lo aplicaré en “Nuestros productos - Fichas de productos |
| 2b | PEDERSON'S NATURAL | Resalta sus productos más destacados e incorpora reseñas de clientes, permitiendo que los visitantes conozcan las opiniones de otros compradores y tengan mayor confianza al elegir un producto. | Lo aplicaré en la página de inicio, mediante una sección de productos destacados |

## 3. Paleta de color

Exactamente estos 7 colores, en hex (`#1a1a1a`). No se agregan otros.
`npm run verificar` exige contraste 4.5:1 o más en: `texto` sobre `fondo` y `superficie`, `texto-suave` sobre `fondo`, `marca-contraste` sobre `marca`.

| Token | Hex | Para qué se usa |
| --- | --- | --- |
| `fondo` | #FFFBF5 | Fondo principal de la página y secciones de contenido |
| `superficie` | #790B10 | Fondos alternativos, detalles y secciones destacadas |
| `texto` | #171313 | Textos principales y encabezados |
| `texto-suave` | #E94B16 | Botones secundarios, etiquetas y elementos interactivos |
| `borde` | #F58220 | Íconos, detalles gráficos y llamadas de atención |
| `marca` | #B51218 | Elementos principales de identidad, botones y encabezados destacados |
| `marca-contraste` | #FFFFFF | Subtítulos, descripciones y especificaciones; Tipografía en blanco sobre botones principales y fondos destacados |

## 4. Tipografías

Archivos (`.woff2`, `.woff`, `.ttf` u `.otf`) en `pack/fuentes/`. Solo fuentes con licencia libre.

| Uso | Nombre de la fuente | Archivo(s) en `pack/fuentes/` | Grosores |
| --- | --- | --- | --- |
| Títulos | Bebas Neue | Bebas Neue-Regular.woff2 | 400 |
| Texto | Roboto | Roboto-VariableFont_wdth,wght.woff2, Roboto-Italic-VariableFont_wdth,wght.woff2 | 100..900 |

## 5. Forma

| Decisión | Opciones | Decisión |
| --- | --- | --- |
| Esquinas (`radio`) | `0px` recto · `4px` · `8px` · `16px` · `9999px` píldora | 16px |
| Grosor de borde | `0px` sin borde · `1px` · `2px` · `3px` | 1px |
| Sombra | `none` · suave `0 4px 12px rgb(0 0 0 / 0.12)` · dura `4px 4px 0 0 <hex de borde>` | 0 4px 12px rgb(0 0 0 / 0.12) |
| Ancho máximo del contenido | `max-w-3xl` estrecho · `max-w-5xl` medio · `max-w-7xl` ancho | max-w-7xl |

## 6. Animación

| Decisión | Opciones | Decisión |
| --- | --- | --- |
| Intensidad | `ninguna` · `sutil` · `marcada` | sutil |

## 7. Logo y menú

| Decisión | Opciones | Decisión |
| --- | --- | --- |
| Logo (archivo en `pack/logos/` + texto alternativo) | o "sin logo, solo nombre" | `pack/logos/Logoprincipal.svg` + Embutidos Don Alfredo |
| Tipo de menú | `barra` (enlaces siempre visibles) · `desplegable` (botón "Menú" en celular y tablet, barra en computadora) · `desplegable-siempre` (botón en todas las pantallas) | desplegable |
| Encabezado fijo arriba al bajar | `sí` · `no` | sí |

## 8. Mapa del sitio

Una fila por página. La primera es Inicio.

| Página | Ruta | Archivo | Texto en el menú | Título de la pestaña |
| --- | --- | --- | --- | --- |
| Inicio | `/` | `src/pages/index.astro` | Inicio | Inicio |
| Nosotros | `/nosotros` | `src/pages/nosotros.astro` | Nosotros | Nosotros |
| Productos | `/productos` | `src/pages/productos.astro` | Productos | Productos |
| Recetas | `/recetas` | `src/pages/recetas.astro` | Recetas | Recetas |
| Contacto | `/contacto` | `src/pages/contacto.astro` | Contacto | Contacto |

## 9. Contenido por página

### Página: Inicio (`/`)

#### Sección: Portada (Hero)

- **id:** hero
- **Título:** El sabor de la tradición en tu mesa.
- **Texto:** Descubre nuestros embutidos, elaborados para acompañar tus comidas y compartir momentos especiales en familia.
- **Elementos** (lista: título + descripción de cada uno, o "ninguno"):
  - Carrusel del hero con 3 puntos (indicadores 01-02-03)
- **Imágenes** (archivo en `pack/imagenes/` + texto alternativo, o "ninguna"): `pack/imagenes/portada_embutidos.jpg` + Fotografía gastronómica de diferentes embutidos presentados en una mesa.
- **Botones** (texto → destino, o "ninguno"):
  - Conoce nuestros productos → `/productos`
  - Contáctanos → `/contacto`
- **Disposición** (celular / computadora):
  - Celular: HERO oscuro centrado con título "El sabor de la tradición en tu mesa", texto descriptivo, botón "Conoce nuestros productos" y botón "Contáctanos".
  - Computadora: bloque dividido; a la izquierda texto con título, subtítulo, botones y paginación "01-02-03"; a la derecha espacio para FOTO (`portada_embutidos.jpg`). Arco curvo en la base del hero.
- **Referencia aplicada** (1a, 1b, 2a, 2b o "ninguna"): 1a

#### Sección: Productos destacados

- **id:** productos-destacados
- **Título:** Nuestros productos destacados.
- **Texto:** Encuentra una variedad de embutidos ideales para disfrutar en tus comidas y preparar tus recetas favoritas.
- **Elementos** (lista: título + descripción de cada uno, o "ninguno"):
  - Salchicha Delgada: La favorita de todos
  - Salchicha Mediana: Ideal para tu día a día
  - Salchicha Gruesa: La que rinde más
- **Imágenes** (archivo en `pack/imagenes/` + texto alternativo, o "ninguna"):
  - `pack/imagenes/producto_destacado_01.png` + Fotografía del primer embutido.
  - `pack/imagenes/producto_destacado_02.png` + Fotografía del segundo embutido.
  - `pack/imagenes/producto_destacado_03.png` + Fotografía del tercer embutido.
- **Botones** (texto → destino, o "ninguno"): Ver catálogo completo → `/productos`
- **Disposición** (celular / computadora):
  - Celular: encabezado "Productos" con tarjetas apiladas en vertical con foto, título y texto. Onda en la base de las tarjetas de producto.
  - Computadora: título superior, texto y fila horizontal de tarjetas de productos destacados con esquinas redondeadas y onda en la base; botón "Ver catálogo completo".
- **Referencia aplicada** (1a, 1b, 2a, 2b o "ninguna"): 2b

#### Sección: Identidad de marca / Sobre Nosotros

- **id:** sobre-nosotros-resumen
- **Título:** Tradición que se comparte.
- **Texto:** En Embutidos Don Alfredo buscamos llevar sabor y tradición a cada hogar, ofreciendo productos que acompañan los momentos más especiales.
- **Elementos** (lista: título + descripción de cada uno, o "ninguno"): ninguno
- **Imágenes** (archivo en `pack/imagenes/` + texto alternativo, o "ninguna"): `pack/imagenes/portada_embutidos.jpg` + Fotografía representativa de la tradición de Don Alfredo
- **Botones** (texto → destino, o "ninguno"): Conócenos → `/nosotros`
- **Disposición** (celular / computadora):
  - Celular: bloque apilado en un panel color vino con texto claro centrado y botón "Conócenos".
  - Computadora: bloque dividido en dos columnas; a la izquierda contenedor para FOTO, a la derecha panel rectangular vino con título, texto y botón "Conócenos".
- **Referencia aplicada** (1a, 1b, 2a, 2b o "ninguna"): ninguna

#### Sección: Ideas deliciosas (Recetas resumen)

- **id:** recetas-resumen
- **Título:** Ideas deliciosas
- **Texto:** Descubre recetas fáciles y rápidas con nuestros embutidos.
- **Elementos** (lista: título + descripción de cada uno, o "ninguno"): ninguno
- **Imágenes** (archivo en `pack/imagenes/` + texto alternativo, o "ninguna"): `pack/imagenes/Mortadela Receta.jpeg` + Fotografía de receta de mortadela
- **Botones** (texto → destino, o "ninguno"): Ver recetas → `/recetas`
- **Disposición** (celular / computadora):
  - Celular: bloque con título "Ideas deliciosas", texto y botón "Ver recetas" apilados.
  - Computadora: contenedor dividido horizontalmente; texto y botón a la izquierda, recuadro para FOTO a la derecha.
- **Referencia aplicada** (1a, 1b, 2a, 2b o "ninguna"): ninguna

---

### Página: Nosotros (`/nosotros`)

#### Sección: Quiénes somos

- **id:** quienes-somos
- **Título:** Conoce nuestra historia.
- **Texto:** Embutidos Don Alfredo es una empresa ecuatoriana dedicada a la producción y comercialización de embutidos de alta calidad. Nuestro propósito es llevar sabor y tradición a cada hogar, ofreciendo productos que formen parte de las comidas y momentos especiales de nuestros clientes.
- **Elementos** (lista: título + descripción de cada uno, o "ninguno"): ninguno
- **Imágenes** (archivo en `pack/imagenes/` + texto alternativo, o "ninguna"): `pack/imagenes/portada_embutidos.jpg` + Fotografía sobre la empresa y tradición Don Alfredo
- **Botones** (texto → destino, o "ninguno"): Conocer más → `#nuestra-esencia`
- **Disposición** (celular / computadora):
  - Celular: FOTO arriba a ancho completo y panel color vino debajo con texto claro centrado.
  - Computadora: FOTO a la izquierda y panel rectangular vino a la derecha con título, texto y botón en crema.
- **Referencia aplicada** (1a, 1b, 2a, 2b o "ninguna"): ninguna

#### Sección: Nuestra esencia (Valores)

- **id:** nuestra-esencia
- **Título:** Lo que nos representa.
- **Texto:** Valores que guían nuestro trabajo diario en cada producto.
- **Elementos** (lista: título + descripción de cada uno, o "ninguno"):
  - Tradición: Buscamos conservar el valor de los sabores que acompañan nuestras comidas.
  - Calidad: Nos enfocamos en ofrecer productos que respondan a las expectativas de nuestros clientes.
  - Cercanía: Queremos formar parte de los hogares y negocios que confían en nuestros productos.
- **Imágenes** (archivo en `pack/imagenes/` + texto alternativo, o "ninguna"): ninguna
- **Botones** (texto → destino, o "ninguno"): ninguno
- **Disposición** (celular / computadora):
  - Celular: título "Lo que nos representa" y 3 elementos/valores apilados con detalles gráficos en crema y vino.
  - Computadora: título superior y 3 columnas horizontales para Tradición, Calidad y Cercanía.
- **Referencia aplicada** (1a, 1b, 2a, 2b o "ninguna"): ninguna

---

### Página: Productos (`/productos`)

#### Sección: Catálogo de productos

- **id:** catalogo
- **Título:** Descubre nuestros productos.
- **Texto:** Explora nuestra variedad de embutidos y encuentra las opciones ideales para tus comidas y preparaciones favoritas.
- **Elementos** (lista: título + descripción de cada uno, o "ninguno"):
  - Categoría Especialidades de la casa (Descripción: La salchicha roja destaca por su sabor tradicional, textura jugosa y color característico, ideal para compartir en familia y disfrutar en diferentes preparaciones.):
    - Salchicha Delgada: La favorita de todos (Imagen: `pack/imagenes/producto_destacado_01.png`)
    - Salchicha Mediana: Ideal para tu día a día (Imagen: `pack/imagenes/producto_destacado_02.png`)
    - Salchicha Gruesa: La que rinde más (Imagen: `pack/imagenes/producto_destacado_03.png`)
  - Categoría Sabores únicos (Descripción: El dúo perfecto para compartir.):
    - Boton: Un clásico en tu mesa (Imagen: `pack/imagenes/Boton.png`)
    - Chorizo de la casa: El sabor tradicional que encanta a todos. (Imagen: `pack/imagenes/Chorizo.png`)
  - Categoría Mortadela (Descripción: Suavidad y sabor):
    - Mortadela: La favorita de la casa (Imagen: `pack/imagenes/Mortadela.png`)
  - Filtros: Todos · Especialidades de la casa · Sabores únicos · Mortadela
- **Imágenes** (archivo en `pack/imagenes/` + texto alternativo, o "ninguna"):
  - `pack/imagenes/producto_destacado_01.png` + Fotografía de Salchicha Delgada
  - `pack/imagenes/producto_destacado_02.png` + Fotografía de Salchicha Mediana
  - `pack/imagenes/producto_destacado_03.png` + Fotografía de Salchicha Gruesa
  - `pack/imagenes/Boton.png` + Fotografía de Boton
  - `pack/imagenes/Chorizo.png` + Fotografía de Chorizo de la casa
  - `pack/imagenes/Mortadela.png` + Fotografía de Mortadela
- **Botones** (texto → destino, o "ninguno"): Consultar producto → `https://wa.me/593962868133`
- **Disposición** (celular / computadora):
  - Celular: título "Descubre nuestros productos", descripción, botones de filtro deslizables horizontalmente y tarjetas de productos apiladas a 1 columna con onda en la base y botón con flecha a WhatsApp.
  - Computadora: cabecera con título y descripción; barra con botones de filtro interactivos; cuadrícula con tarjetas de producto con esquinas redondeadas, onda en la base y botón «Consultar producto» hacia WhatsApp.
- **Referencia aplicada** (1a, 1b, 2a, 2b o "ninguna"): 1a, 1b, 2a

---

### Página: Recetas (`/recetas`)

#### Sección: Ideas de preparación

- **id:** recetas-catalogo
- **Título:** RECETAS Ideas deliciosas para tu mesa
- **Texto:** Descubre recetas fáciles y rápidas con nuestros embutidos.
- **Elementos** (lista: título + descripción de cada uno, o "ninguno"):
  - Sánduche de mortadela:
    - Descripción: Descubre nuevas formas de disfrutar tu mortadela en deliciosos sándwiches
    - Imagen: `pack/imagenes/Mortadela Receta.jpeg`
    - Modal Ingredientes: 1. Pan artesanal crujiente por fuera y suave por dentro. 2. Mortadela en rodajas finas 3. Aderezo de albahaca 4. Rodajas finas de tomate maduro y hojas frescas de lechuga 5. Opcional: Un toque de aceite de oliva y pimienta negra recién molida.
    - Modal Preparación: **Tostar el pan**: Abre el pan por la mitad y, si lo deseas, dóralo ligeramente en una sartén sin aceite hasta que esté tibio y crujiente. **Untar la base**: Coloca una capa generosa de aderezo. **Armar las capas**: Dobla las rodajas de mortadela delicadamente formando ondas o pliegues para darle altura y una presentación atractiva al sándwich. **Agregar los vegetales**: Acomoda las rodajas de tomate sobre la mortadela y coloca la lechuga. **Cerrar y servir**: Coloca la tapa del pan. Para darle un acabado profesional y elegante, puedes atravesarlo con un palillo de bambú decorativo. ¡Listo para disfrutar!
  - Salchichas a la parrilla:
    - Descripción: Disfruta unas deliciosas salchichas rojas a la parrilla, perfectas para compartir.
    - Imagen: `pack/imagenes/Salchicha Parilla.jpeg`
    - Modal Ingredientes: 1. Salchicha Roja 2. Parilla 3. Carbón 4. Pinza
    - Modal Preparación: **Limpieza**: Antes de comenzar, asegúrate de que la rejilla de la parrilla esté limpia y aceitada para evitar que las salchichas se peguen. **Preparación del fuego**: Si usas carbón, distribúyelo para crear una zona de calor directo (fuego medio-bajo) y una zona de calor indirecto (sin carbón debajo). Si usas gas, enciende los quemadores a fuego medio-bajo. **Cocción inicial**: Coloca las salchichas en la zona de calor directo. Cocínalas durante unos 10-15 minutos en total, dándoles la vuelta con unas pinzas cada 3-4 minutos para que se doren uniformemente por todos lados. No las pinches con un tenedor, ya que esto dejará escapar los jugos y las resecará. **Servir**: Retíralas de la parrilla y déjalas reposar durante unos minutos antes de servirlas.
  - Choripan:
    - Descripción: El clásico choripán, con todo el sabor de nuestro chorizo.
    - Imagen: `pack/imagenes/Choripan Receta.jpeg`
    - Modal Ingredientes: 1. Pan: Pan baguette de corteza crujiente y miga suave. 2. Chorizo de la casa 3. Chimichurri fresco hecho con perejil, ajo, aceite de oliva, vinagre, un toque de ají picante y especias. 4. Opcional: Un toque de cebolla roja encurtida o rodajas finas de tomate para realzar la frescura.
    - Modal Preparación: **Asar los chorizos**: Cocina los chorizos a la parrilla a fuego medio-bajo, dándoles la vuelta constantemente para que se doren de forma uniforme por fuera y queden jugosos por dentro, cuidando de no pincharlos para que conserven todos sus jugos. **Preparar el pan**: Abre el pan por la mitad (sin cortarlo por completo) y tuéstalo ligeramente en la parrilla o sartén. **Armar el choripán**: Coloca el chorizo recién salido de la parrilla dentro del pan. **Agregar el chimichurri**: Baña generosamente el chorizo con el chimichurri fresco para que los jugos se mezclen con el pan y los sabores resalten al máximo. **Presentación**: Sírvelo caliente, opcionalmente acompañado de unas ramitas de romero o tomates cherry.
- **Imágenes** (archivo en `pack/imagenes/` + texto alternativo, o "ninguna"):
  - `pack/imagenes/Mortadela Receta.jpeg` + Fotografía de Sánduche de mortadela
  - `pack/imagenes/Salchicha Parilla.jpeg` + Fotografía de Salchichas a la parrilla
  - `pack/imagenes/Choripan Receta.jpeg` + Fotografía de Choripan
- **Botones** (texto → destino, o "ninguno"): Ver receta → abre modal con la receta completa
- **Disposición** (celular / computadora):
  - Celular: cabecera con título "Ideas deliciosas para tu mesa", tarjetas de recetas en 1 columna vertical con foto, descripción y botón "Ver receta" que abre el modal.
  - Computadora: cabecera centrada; cuadrícula de 3 columnas con tarjetas de recetas (foto, título, texto) y botón rojo "Ver receta" centrado en cada tarjeta que despliega modal accesible.
- **Referencia aplicada** (1a, 1b, 2a, 2b o "ninguna"): ninguna

---

### Página: Contacto (`/contacto`)

#### Sección: Información y Formulario

- **id:** contacto-formulario
- **Título:** ¡Estamos para atenderte!
- **Texto:** ¿Tienes alguna consulta sobre nuestros productos? Escríbenos, estaremos encantados de ayudarte. Estamos en Quito, Ecuador.
- **Elementos** (lista: título + descripción de cada uno, o "ninguno"):
  - Formulario con campos: Nombre, Correo, Mensaje
  - WhatsApp: 096 286 8133
  - Ubicación: J Gutiérrez S9-125, Quito, Ecuador 170121
  - Correo: provembutidos01@gmail.com
- **Imágenes** (archivo en `pack/imagenes/` + texto alternativo, o "ninguna"): ninguna
- **Botones** (texto → destino, o "ninguno"):
  - Enviar mensaje → botón de envío del formulario
  - Escríbenos por WhatsApp → `https://wa.me/593962868133`
  - Enviar correo → `mailto:provembutidos01@gmail.com`
- **Disposición** (celular / computadora):
  - Celular: título "Contacto", datos de contacto apilados y formulario en 1 columna con botón rojo.
  - Computadora: bloque dividido en 2 columnas; a la izquierda datos de contacto directos (WhatsApp, ubicación, correo) y a la derecha formulario con inputs y botón rojo.
- **Referencia aplicada** (1a, 1b, 2a, 2b o "ninguna"): ninguna

#### Sección: Canales Sociales

- **id:** contacto-redes
- **Título:** Redes Sociales
- **Texto:** Síguenos en nuestras redes sociales y mantente al día con nuestras novedades.
- **Elementos** (lista: título + descripción de cada uno, o "ninguno"):
  - Facebook → https://www.facebook.com/profile.php?id=100093854029699
  - Instagram → https://www.instagram.com/embutidosdonalfredo_ec?xtok=dXJhcWR5d2MwYmRy
- **Imágenes** (archivo en `pack/imagenes/` + texto alternativo, o "ninguna"): ninguna
- **Botones** (texto → destino, o "ninguno"):
  - Facebook → `https://www.facebook.com/profile.php?id=100093854029699`
  - Instagram → `https://www.instagram.com/embutidosdonalfredo_ec?xtok=dXJhcWR5d2MwYmRy`
- **Disposición** (celular / computadora):
  - Celular: título y enlaces a redes apilados y centrados.
  - Computadora: franja horizontal centrada con título y botones a redes sociales.
- **Referencia aplicada** (1a, 1b, 2a, 2b o "ninguna"): ninguna

## 10. Contacto y pie de página

| Campo | Decisión |
| --- | --- |
| Correo | provembutidos01@gmail.com |
| Redes (nombre → enlace) | Facebook → https://www.facebook.com/profile.php?id=100093854029699, Instagram → https://www.instagram.com/embutidosdonalfredo_ec?xtok=dXJhcWR5d2MwYmRy |
| Texto del pie | © 2026 Embutidos Don Alfredo. Todos los derechos reservados. |