# Fase 06: API y Base de Datos (Backend)

## Objetivo
Conectar nuestra aplicación a una base de datos real y crear los "pasillos" (API) por donde viajarán los datos.

## Razonamiento del Mentor
Usaremos **Railway** o **Atlas** para el hosting de MongoDB. La ventaja de Next.js es que podés manejar la API en el mismo proyecto (`/api/`). Mantendremos la conexión a la base de datos en un archivo separado (`lib/mongodb.js`) para evitar múltiples conexiones innecesarias durante el desarrollo.

---

## Pasos Detallados

### 1. Configuración de MongoDB
- Crea una base de datos gratuita en [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
- Guarda tu `MONGODB_URI` en un archivo llamado `.env.local` en la raíz (NUNCA lo subas a GitHub).

### 2. Singleton de Conexión
Crea `app/lib/mongodb.ts` (o `src/lib/mongodb.ts`).
- Implementa el patrón "Singleton" para evitar múltiples conexiones a MongoDB.

Ejemplo:
```ts
import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) throw new Error('MONGODB_URI is required');

let cached = globalThis.mongoose;
if (!cached) {
  cached = globalThis.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI).then(m => m);
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;
```

### 3. Primer Endpoint de API
Crea `app/api/products/route.ts`.
- Usa los tipos `NextRequest` y `NextResponse` de `next/server`.

Ejemplo de endpoint:
```ts
import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Product from '@/models/Product';

export async function GET(req: NextRequest) {
  await dbConnect();
  const products = await Product.find();
  return NextResponse.json(products);
}

export async function POST(req: NextRequest) {
  await dbConnect();
  const data = await req.json();
  if (!data.name || !data.category) {
    return NextResponse.json({ error: 'name and category are required' }, { status: 400 });
  }
  const product = await Product.create(data);
  return NextResponse.json(product, { status: 201 });
}
```

---

## Checkpoint de Verificación
- [ ] La consola muestra "Conectado a MongoDB" al iniciar la app.
- [ ] Al acceder a `http://localhost:3000/api/products` ves un JSON (aunque sea un array vacío por ahora).

## Notas de Seguridad
- Usa siempre variables de entorno.
- Nunca expongas datos sensibles en el frontend.
