---
description: Architectural constraints — Next.js App Router, MongoDB/Mongoose, Clean Code
alwaysApply: true
scope: architecture
---

# Architecture Rules (Next.js/MERN)

## Principios Generales
- **Separación de Capas**: Client components vs. Server components.
- **Data First**: Definir modelos Mongoose antes que componentes visuales.
- **Single Responsibility**: Componentes pequeños y enfocados.

## Estructura del Proyecto (App Router)
```
src/
├── app/               ← Routes, Layouts y API endpoints (.tsx, .ts)
├── components/        
│   ├── ui/            ← Componentes base (.tsx)
│   ├── layout/        ← Navbar.tsx (Fixed), Footer.tsx
│   └── shared/        ← Modal.tsx, Loader.tsx
├── features/          
│   └── productos/     ← Interfaces, ProductoCard.tsx, ProductoGrid.tsx
├── lib/               ← Configuración de MongoDB, utilidades (.ts)
├── models/            ← Esquemas e Interfaces de Mongoose (.ts)
└── hooks/             ← Custom React Hooks (.ts)
```

## Reglas de Componentes
- **Navbar**: Debe ser siempre `fixed`.
- **Modo Oscuro**: No se implementará.
- **Búsqueda**: Implementar con botón (no real-time/debounce) para optimizar carga.
- **Precios**: No mostrar precios en la Homepage/Catálogo inicial.

## Reglas de Datos (Mongoose)
- Definir esquemas con validaciones estrictas.
- Usar `timestamps: true` en todos los modelos.
- Exportar modelos usando el patrón de verificación de caché:
  `export const Product = mongoose.models.Product || mongoose.model('Product', ProductSchema);`

## Estilos (Tailwind CSS)
- Usar clases de Tailwind para el 90% de los estilos.
- Evitar inline styles.
- Mantener una paleta de colores coherente con la marca "Terracota".

## API Routes
- Manejar errores con bloques try/catch consistentes.
- Validar el body de los requests antes de procesar datos.
- Usar códigos de estado HTTP correctos (200, 201, 400, 404, 500).
