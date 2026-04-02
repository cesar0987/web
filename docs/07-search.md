# Fase 07: Buscador y Filtros

## Objetivo
Optimizar la experiencia del usuario permitiéndole encontrar exactamente lo que necesita entre cientos de SKU.

## Razonamiento del Mentor
Decidiste que la búsqueda sea **con botón** y no en tiempo real. Esto es una gran idea: reduce la carga del servidor y evita que la base de datos haga consultas por cada letra que el usuario presiona. Usaremos los "Search Params" de la URL (ej. `?search=cemento`) para que el usuario pueda compartir el link de sus resultados.

---

## Pasos Detallados

### 1. El Input de Búsqueda
Ubicá un buscador en el Navbar o en la cabecera de la lista de productos.
- Usa una etiqueta `<form>` de HTML normal para manejar el envío al presionar Enter.

### 2. Filtros por Categoría
Un listado lateral o superior con las categorías principales (Herramientas, Electricidad, Plomería, etc.).

### 3. Lógica de Filtrado (API)
Actualizá tu API Route (`src/app/api/products/route.ts`).

---

## Checkpoint de Verificación
- [ ] Al escribir algo y dar Enter (o clic al botón), la URL cambia a `?search=lo-buscado`.
- [ ] Al hacer clic en una categoría, solo se muestran los productos de ese rubro.

## UX
- **Feedback**: Si no hay resultados, mostrá un mensaje amigable: "No encontramos lo que buscas, ¡podés consultarnos por WhatsApp!".