# Don Felipe Events

Sitio web tipo aplicación para una empresa de servicio profesional de garzones y atención de eventos en Bolivia.

## Estructura
- `index.html`: único punto de entrada, adaptable a escritorio y móvil.
- `css/styles.css`: identidad visual y diseño responsivo.
- `js/app.js`: navegación, tema, catálogo, selección y cotización por WhatsApp.
- `json/`: catálogos editables de bebidas alcohólicas y servicios.
- `assets/`: icono PWA y recursos gráficos locales.
- `manifest.json` y `sw.js`: instalación PWA y caché offline.
- `semanas/`: organización académica/documental del desarrollo.

## Funcionalidades
1. Navegación entre cinco pantallas sin desplazamiento vertical de página.
2. Diseño responsive con navegación inferior en móviles.
3. Tema oscuro/claro guardado localmente.
4. Catálogo de bebidas con filtros, búsqueda y selección persistente.
5. Formulario de cotización que prepara un mensaje y abre WhatsApp al `+591 71970146`.
6. Acceso directo para llamar y escribir por WhatsApp.
7. Service Worker con caché de recursos locales para uso offline después de la primera carga.

## Ejecutar localmente
Para probar PWA y Service Worker, servir la carpeta con un servidor local (por ejemplo, Live Server de VS Code). Abrir `index.html` directamente con `file://` no permite registrar el Service Worker.

## Publicar en GitHub Pages
1. Subir el contenido de esta carpeta a la raíz de un repositorio.
2. En GitHub, abrir **Settings → Pages**.
3. Seleccionar la rama `main` y carpeta `/ (root)`.
4. Guardar y esperar la publicación.

## Personalización pendiente
Los servicios, disponibilidad, precios, fotografías reales, cobertura específica por ciudad y condiciones comerciales deben confirmarse con la empresa antes de publicarlos como información definitiva. El catálogo actual es una propuesta inicial de bebidas habituales en Bolivia; la disponibilidad se confirma al cotizar.


## Servicio de bebidas alcohólicas
El catálogo contempla cervezas, vinos, espumantes, singani, ron, vodka, whisky, gin y cócteles. La empresa debe confirmar marcas, stock, precios, permisos y condiciones de servicio para cada localidad. Servicio únicamente para mayores de edad y sujeto a la normativa aplicable y consumo responsable.
