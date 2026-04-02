# Fase 01: Setup del Proyecto

## Objetivo
Inicializar el entorno de desarrollo y establecer una base limpia siguiendo las mejores prácticas de Next.js.

## Razonamiento del Mentor
Comenzamos con `create-next-app` porque nos proporciona una configuración de **Tailwind CSS** y **ESLint** lista para usar. Usaremos el **App Router** porque es el estándar moderno de Next.js que permite una mejor gestión de componentes de servidor y layouts anidados.

---

## Pasos Detallados

### 1. Inicialización de la Carpeta Raíz
**Comando:**
```bash
npx create-next-app@latest .
```

> [!IMPORTANT]
> **Opciones a elegir (MERN + TS):**
> - TypeScript? **Yes** (Mejor elección para arquitectura senior)
> - ESLint? **Yes**
> - Tailwind CSS? **Yes**
> - `src/` directory? **Yes**
> - App Router? **Yes**
> - Alias `@/*`? **No**

### 2. Limpieza del Boilerplate
- **Archivo:** `src/app/page.tsx`
  - Limpiá el componente y dejá solo un `<h1>Hola Terracota</h1>`.
- **Archivo:** `src/app/globals.css`
  - Mantené las directivas `@tailwind`, eliminá el resto.

### 3. Estructura de Carpetas (TypeScript)
**Comandos sugeridos:**
```bash
mkdir -p src/components/ui src/components/layout src/components/shared src/features/productos src/lib src/models src/types
```
*(Hemos agregado `src/types` para tus interfaces globales)*.

---

## Checkpoint de Verificación
- [ ] Verificá que exista el archivo `tsconfig.json` en la raíz.
- [ ] Comprobá que las extensiones sean `.tsx` para componentes y `.ts` para lógica.
- [ ] Revisá `.antigravity/rules/architecture.md` para validar la estructura y reglas de estilo.
- [ ] Revisá `.antigravity/rules/git.md` para usar Conventional Commits en el próximo commit.

## Decisiones Tomadas
- **Lenguaje**: **TypeScript (TSX/TS)**.
