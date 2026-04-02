# Fase 00: Convenciones Antigravity

## Objetivo
Anclar el flujo de trabajo del proyecto a las reglas definidas en `.antigravity/rules` y hacerlas fáciles de encontrar.

## ¿Qué revisar antes de cada PR?
1. `.antigravity/rules/architecture.md`  (estructura, clean code, API, UI)
2. `.antigravity/rules/git.md`          (commit message, scopes, workflow)
3. `.antigravity/rules/global.md`       (comportamiento del agente / team policy)
4. `.antigravity/rules/mentor.md`       (cultura de peer review / coaching)

## Checklist rápido
- [ ] Estructura: App Router + `src/` carpetas (`components`, `features`, `lib`, `models`, `hooks`)
- [ ] Mongoose: esquemas con `timestamps: true` y validaciones estrictas
- [ ] UI: Navbar `fixed`, no dark mode, no precios en Homepage
- [ ] Git: Conventional Commits + subject en inglés + <50 chars
- [ ] Docs: cada milestone está reflejada en `docs/0X-*.md` y se vincula desde este documento

## Nota
Si se añaden nuevas reglas en `.antigravity/rules`, actualiza este archivo con el mapa corres-pondiente y agrega el checkpoint en `docs/01-setup.md` (o fase correspondiente).