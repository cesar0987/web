# Fase 08: Despliegue en Producción

## Objetivo
Publicar la aplicación en internet para que tus clientes puedan empezar a usarla.

## Razonamiento del Mentor
Para un proyecto de Next.js, **Vercel** es la opción nativa y más sencilla. Ofrece HTTPS gratis de por vida y un despliegue automático cada vez que hagas un `git push`. Por ahora, usaremos el dominio `.vercel.app` gratuito hasta que estemos listos para el dominio oficial `terracota...`.

---

## Pasos Detallados

### 1. Preparación de Producción
- Asegurate de que `npm run build` funcione localmente sin errores de linting.

### 2. Despliegue en Vercel
- Crea una cuenta en [Vercel](https://vercel.com).
- Importa tu repositorio de GitHub.
- **IMPORTANTE**: Carga tu `MONGODB_URI` en la sección "Environment Variables" del panel de Vercel.

### 3. Validación Final
- Revisá que las imágenes carguen correctamente en producción.
- Verificá que el botón de WhatsApp funcione en móviles.

---

## Checkpoint de Verificación
- [ ] El sitio es accesible desde cualquier navegador fuera de tu red local.
- [ ] La base de datos se conecta correctamente (podés ver los productos reales).

## Mantenimiento
- Para actualizar la web, solo tenés que hacer commit de tus cambios y subirlos a tu rama principal. Vercel se encarga del resto.