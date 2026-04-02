---
description: Strict Git commit conventions — Conventional Commits spec (MERN)
alwaysApply: true
scope: repository
---

# Git & Commit Conventions (Next.js/MERN)

## Formato Obligatorio

```
<type>(<scope>): <subject>

<body>
```

**Ejemplos correctos:**
```
feat(productos): implement Mongoose interface for tools
fix(layout): resolve overlap issue in Navbar.tsx
refactor(ui): convert Button.tsx to compound component
docs(roadmap): update step 04 with TS interfaces
test(api): add types for product search endpoint
```

## Reglas del Subject (primera línea)
- **Máximo 50 caracteres**
- **Idioma: inglés**
- **Modo imperativo** (add, fix, update, remove)
- **Sin punto final**
- **Minúscula** después del scope

## Body (cuerpo del commit)
- Separado del subject con una línea en blanco
- Explica el **por qué**, no el qué.
- Puede referenciar el roadmap: `Based on docs/04-products.md`

## Tipos Permitidos
| Tipo | Cuándo usar |
|------|-------------|
| `feat` | Nueva funcionalidad |
| `fix` | Corrección de un bug |
| `docs` | Solo cambios de documentación (docs/, README) |
| `refactor` | Cambio de código sin cambiar comportamiento |
| `perf` | Mejora de rendimiento |
| `test` | Agregar o corregir tests |
| `chore` | Tareas de mantenimiento (deps, config) |

## Scopes del Proyecto
Usar la carpeta o módulo afectado:
| Scope | Área |
|-------|------|
| `ui` | Componentes base (Button, Card, etc.) |
| `layout` | Navbar, Footer, Layout principal |
| `shared` | Componentes transversales (Modal, Loader) |
| `productos` | Lógica de productos (features/productos) |
| `api` | Endpoints de Next.js API Routes |
| `model` | Esquemas de Mongoose |
| `docs` | Documentación en docs/ |
| `config` | Archivos de configuración (next.config, tailwind) |

## Flujo de Trabajo Git
1. Revisar el roadmap en `docs/`.
2. Implementar cambios granulares.
3. Correr `npm test` (si aplica) antes de hacer commit.
4. Commit con mensaje en formato Conventional Commits.
5. Nunca `git push --force`.
