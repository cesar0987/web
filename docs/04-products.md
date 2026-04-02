# Fase 04: Catálogo y Modelado de Datos

## Objetivo
Definir cómo se verán y qué datos tendrán nuestros productos en la base de datos y en la interfaz.

## Razonamiento del Mentor
Usamos **Mongoose** (MongoDB) porque es extremadamente flexible para una ferretería, donde los productos pueden tener campos muy variados (medidas, pesos, marcas, etc.). Empezamos definiendo el "Esquema" (Schema) que es el contrato de cómo lucen los datos.

---

## Pasos Detallados

### 1. Definición del Modelo e Interfaces
Crea el archivo `src/models/Product.ts`.
- **Interface**: Definí un `interface IProduct` que extienda de `mongoose.Document`.
- **Esquema**: Implementá el esquema usando la interfaz para tipado estricto.

### 2. Creación del ProductoCard.tsx
- Ubicación: `src/features/productos/ProductoCard.tsx`.
- **Tipado**: Definí `interface ProductCardProps` para los datos que recibe.

### 3. El Grid de Productos
Crea `ProductoGrid.tsx` para manejar la visualización.

---

## Checkpoint de Verificación
- [ ] Los productos se ven en un formato de grilla responsiva (ej. 1 columna en móvil, 3 o 4 en desktop).
- [ ] Las imágenes mantienen una proporción consistente (para que la grilla no se vea desordenada).

## Datos del Producto
- **nombre**
- **descripción** (nueva recomendación)
- **imagen**
- **categoría**
- **stock**
- **Etiquetas de búsqueda**
