# Fase 04: Catálogo y Modelado de Datos

## Objetivo
Definir cómo se verán y qué datos tendrán nuestros productos en la base de datos y en la interfaz.

## Razonamiento del Mentor
Usamos **Mongoose** (MongoDB) porque es extremadamente flexible para una ferretería, donde los productos pueden tener campos muy variados (medidas, pesos, marcas, etc.). Empezamos definiendo el "Esquema" (Schema) que es el contrato de cómo lucen los datos.

---

## Pasos Detallados

### 1. Definición del Modelo e Interfaces
Crea el archivo `app/models/Product.ts` (o `src/models/Product.ts` si estás usando `src/`).
- **Interface**: Definí un `interface IProduct` que incluya los campos `name`, `description`, `image`, `category`, `stock` y `tags`.
- **Esquema**: Implementá el esquema con Mongoose y `timestamps: true`.

Ejemplo:
```ts
import mongoose from 'mongoose';

export interface IProduct {
  name: string;
  description: string;
  image: string;
  category: string;
  stock: number;
  tags?: string[];
}

const ProductSchema = new mongoose.Schema<IProduct>({
  name: { type: String, required: true },
  description: { type: String, required: false },
  image: { type: String, required: false },
  category: { type: String, required: true },
  stock: { type: Number, required: true, min: 0 },
  tags: { type: [String], required: false },
}, { timestamps: true });

export default mongoose.models.Product || mongoose.model('Product', ProductSchema);
```

### 2. Creación del ProductoCard.tsx
- Ubicación: `app/features/productos/ProductoCard.tsx`.
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
