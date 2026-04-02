# Fase 02: Layout y Estructura Global

## Objetivo
Definir la "caja" de la aplicación. Un layout bien estructurado asegura que el usuario tenga una navegación consistente en todas las páginas.

## Razonamiento del Mentor
En el App Router, el archivo `app/layout.js` envuelve a todas las páginas. Aquí es donde definiremos el **Navbar** (que decidiste dejar fijo) y el **Footer**. Usar el Navbar fijo (`fixed`) es ideal para una ferretería porque los usuarios suelen querer volver al buscador o a las categorías rápidamente mientras hacen scroll por largas listas de materiales.

---

## Pasos Detallados

### 1. Creación de Componentes de Layout
Crearemos los archivos base en la carpeta `src/components/layout/`.

- **Navbar.tsx**: Debe contener el logo de "Terracota Construcciones".
  - **Tip de Estilo**: Usá `fixed top-0 w-full z-50`.
- **Footer.tsx**: Información de contacto.

### 2. Configuración de Fuentes
- Se configura en `src/app/layout.tsx`.

### 3. Integración en el Layout Principal
Modificá `src/app/layout.tsx` para incluir tus nuevos componentes. Usá los tipos de React (`React.ReactNode`) para el children.

**Estructura sugerida:**
```tsx
// src/app/layout.tsx
import type { Metadata } from "next";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        <main className="pt-20 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
```

---

## Checkpoint de Verificación
- [ ] El Navbar se mantiene en la parte superior al hacer scroll.
- [ ] No existe el "Modo Oscuro" (se aplicó el fondo claro definido).
- [ ] El contenido de las páginas (`children`) no queda tapado por el Navbar.

## Notas Técnicas
- **Navbar**: Fixed.
- **Dark Mode**: No implementado.
- **Fuentes**: Configuradas vía `next/font`.
