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
Crea `src/lib/mongodb.ts`.
- Aquí implementarás el patrón "Singleton" para asegurar que tu app no abra cientos de conexiones a la vez a la base de datos.

### 3. Primer Endpoint de API
Crea `src/app/api/products/route.ts`.
- Usa los tipos `NextRequest` y `NextResponse` de `next/server`.

---

## Checkpoint de Verificación
- [ ] La consola muestra "Conectado a MongoDB" al iniciar la app.
- [ ] Al acceder a `http://localhost:3000/api/products` ves un JSON (aunque sea un array vacío por ahora).

## Notas de Seguridad
- Usa siempre variables de entorno.
- Nunca expongas datos sensibles en el frontend.
