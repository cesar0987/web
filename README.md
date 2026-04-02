# Terracota Web

Proyecto de e-commerce para ferretería (Terracota Construcciones) con Next.js + TypeScript + Tailwind + MongoDB (MERN style).

## Estructura del proyecto
- `.antigravity/rules/`: Reglas de arquitectura, git y mentoría.
- `docs/`: Guías de setup, layout, homepage, catálogo, API, búsqueda y deploy.
- `src/`: Código principal (p.ej. `app/`, `components/`, `features/`, `lib/`, `models/`, `hooks/`).

## Reglas cargadas
- `architecture.md`: App Router, Mongoose, clean code, components, UI y API.
- `git.md`: Conventional Commits + scopes + workflow.
- `global.md`: Normas de comportamiento de mentor AI y filosofía de desarrollo.
- `mentor.md`: Estructura de respuestas y no entregar código completo de golpe.

## Uso recomendado
1. Clonar repo
2. `npm install`
3. Crear `.env.local`:
   - `MONGODB_URI=your_mongo_uri`
4. `npm run dev`

## Commit & Push
- Commit message form:
  `feat(productos): add search filter`
- Ejecutar PR con la checklist de `docs/00-antigravity.md`.

## Configuración de lint de commits
- Archivo: `.commitlint.config.js`
- Reglas:
  - `header-max-length`: 50
  - `subject-case`: lower-case
  - `type-enum`: feat, fix, docs, refactor, perf, test, chore

## Ejecución de pruebas y deploy
- `npm run lint`
- `npm run build`
- `npm run start`
- Deploy en Vercel (configurar `MONGODB_URI` en variables de entorno)

## Notes
Este proyecto recomienda seguir siempre la ruta de documentación incremental (Fase 01-08) antes de tirar features grandes.