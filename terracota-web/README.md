# Terracota Web

Casa matriz: `https://github.com/cesar0987/web`

Proyecto de e-commerce para ferretería (Terracota Construcciones) con Next.js + TypeScript + Tailwind + MongoDB.

## Estructura del proyecto
- `.antigravity/rules/`: Reglas de arquitectura, git y mentoría.
- `docs/`: Guías de setup, layout, homepage, catálogo, API, búsqueda y deploy.
- `src/`: Código principal: `app/`, `components/`, `features/`, `lib/`, `models/`, `hooks/`.

## Reglas clave (Antigravity)
- App Router + `src/`.
- Navbar fijo, no dark mode, no precios en homepage.
- Mongoose con `timestamps: true`, valida body en API.
- Conventional commits (`feat`, `fix`, `docs`, `refactor`, `perf`, `test`, `chore`).

## Cómo iniciar
```bash
npm install
npm run dev
```
Abrir `http://localhost:3000`.

## .env.local
Agregar:
```bash
MONGODB_URI=tu_mongo_uri
```

## Lint de commits
Archivo: `.commitlint.config.js`
- `header-max-length`: 50
- `subject-case`: lower-case
- `type-enum`: feat, fix, docs, refactor, perf, test, chore

## Comandos de mantenimiento
- `npm run lint`
- `npm run build`
- `npm run start`

## Despliegue
- Vercel, Railway u otro provider.
- Añadir `MONGODB_URI` en variables de entorno.
- Confirmar que `docs/00-antigravity.md` checklist se cumple antes de cada PR.

