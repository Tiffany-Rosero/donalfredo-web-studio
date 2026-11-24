/*
  Datos generales del sitio, en un solo lugar.
  Salen del brief (pack/brief.md): secciones 1, 6, 7, 8 y 10.
  Encabezado, pie de página y <head> leen de aquí: si cambias algo, cambia en todo el sitio.
*/

export const sitio = {
  nombre: "Embutidos “Don Alfredo”",
  descripcion:
    "Embutidos Don Alfredo: tradición y alta calidad ecuatoriana en embutidos para hogares y negocios gastronómicos. El sabor de la tradición en tu mesa.",
  correo: "provembutidos01@gmail.com",
  pie: "© 2026 Embutidos Don Alfredo. Todos los derechos reservados.",
  animacion: "sutil" as "ninguna" | "sutil" | "marcada",
};

/*
  Tipo de menú (sección 7 del brief):
  - "barra": enlaces siempre visibles (en celular bajan a otra línea si no caben).
  - "desplegable": botón "Menú" en celular y tablet; barra desde computadora.
  - "desplegable-siempre": botón "Menú" en todas las pantallas.
  fijo: true = el encabezado queda pegado arriba al bajar.
*/
export const encabezado = {
  menu: "desplegable" as "barra" | "desplegable" | "desplegable-siempre",
  fijo: true,
};

/* Menú principal: un enlace por página del mapa del sitio (sección 8 del brief). */
export const menu: { texto: string; href: string }[] = [
  { texto: "Inicio", href: "/" },
  { texto: "Nosotros", href: "/nosotros" },
  { texto: "Productos", href: "/productos" },
  { texto: "Recetas", href: "/recetas" },
  { texto: "Contacto", href: "/contacto" },
];

/* Redes sociales (sección 10 del brief). Vacío = no se muestran. */
export const redes: { nombre: string; href: string }[] = [
  { nombre: "Facebook", href: "https://www.facebook.com/profile.php?id=100093854029699" },
  {
    nombre: "Instagram",
    href: "https://www.instagram.com/embutidosdonalfredo_ec?xtok=dXJhcWR5d2MwYmRy",
  },
];
