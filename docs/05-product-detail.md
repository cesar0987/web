# Fase 05: Detalle de Producto y Conversión

## Objetivo
Brindar toda la información técnica del material y facilitar el contacto directo para la venta.

## Razonamiento del Mentor
La página de detalle es donde se cierra la venta. Al no mostrar precios, es CRÍTICO que el botón de WhatsApp sea el elemento más visible. Usaremos **Dynamic Routing** de Next.js (`[id]`) para que cada producto tenga su propia URL única, lo cual es excelente para SEO y para que los clientes compartan el enlace.

---

## Pasos Detallados

### 1. Rutas Dinámicas
Crea la estructura `src/app/productos/[id]/page.tsx`.
- Esta página recibirá el `id` del producto y deberá buscarlo en tu (futura) base de datos.

### 2. El "Botón Mágico" de WhatsApp
Crea un helper o componente que genere el enlace de WhatsApp.
- **Estructura del mensaje**: "Hola Terracota, me interesa el producto: [Nombre del Producto]. ¿Tienen stock?".
- **Tip**: Usa el API de WhatsApp: `https://wa.me/tu_numero?text=mensaje_codificado`.

### 3. Galería de Imágenes
Si un producto tiene varias fotos (ej. una herramienta desde distintos ángulos), implementá un visor simple.

---

## Checkpoint de Verificación
- [ ] Al hacer clic en un producto del grid, se abre su página de detalle específica.
- [ ] El botón de WhatsApp abre correctamente la app/web con el mensaje pre-cargado.
- [ ] Los metadatos de la página muestran el nombre del producto en el título de la pestaña.

## Estrategia de Venta
- **CTA**: "Consultar Disponibilidad por WhatsApp".
- **Info técnica**: Mostrar dimensiones, marca y materiales si están disponibles en el modelo.
