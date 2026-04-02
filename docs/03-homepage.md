# Fase 03: Homepage (Landing Page)

## Objetivo
Crear una primera impresión impactante que dirija a los usuarios directamente a ver el catálogo de productos.

## Razonamiento del Mentor
Una ferretería vende confianza y disponibilidad. Tu landing debe centrarse en un **Hero Section** que comunique rápidamente qué vendés (materiales de construcción, herramientas, etc.) y un acceso directo a los productos. Decidiste **no mostrar precios** aquí; esto es estratégico para forzar la interacción por WhatsApp o asegurar que el usuario vea primero el valor del catálogo.

---

## Pasos Detallados

### 1. El Hero Section
Construí una sección con una imagen de alta calidad o un patrón técnico que represente a "Terracota".
- **Título (H1)**: Nombre de la ferretería.
- **Slogan**: Una frase que resuma tu valor (ej. "Todo para tu obra en un solo lugar").
- **Call to Action (CTA)**: Un botón grande que diga "Explorar Catálogo".

### 2. Sección de "Productos Destacados"
Antes de tener la base de datos conectada, usá datos de prueba (mock data) para diseñar el grid.
- **Componente sugerido**: `src/features/productos/ProductoCard.tsx`.
- **Estructura**: Imagen + Título + Categoría. (Recordá: SIN precios).

### 3. Sección de Contacto Rápido
Un footer o sección final que destaque el botón de WhatsApp.

---

## Checkpoint de Verificación
- [ ] El Hero se ve bien en móviles y escritorio (responsive).
- [ ] El botón de la landing lleva a la página (o sección) de productos.
- [ ] No hay precios visibles en ninguna parte de la página.

## Decisiones de Diseño
- **Foco Principal**: El catálogo.
- **Atención**: Botones de contraste alto para los CTAs.
- **Imagen**: Se recomienda usar imágenes reales de los materiales o del local.
