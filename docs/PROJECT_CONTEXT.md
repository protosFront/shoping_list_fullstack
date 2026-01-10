# PROJECT CONTEXT — Shopping List Fullstack Demo

## Цель
Полноценное full-stack демо: Nuxt frontend + Fastify backend + PostgreSQL DB.
Показать качество инженерии: auth, роли, шаринг, миграции, Swagger, Docker, деплой на VPS с HTTPS.
Домен простой (список покупок), реализация зрелая.

## Стек
- Frontend: Nuxt 3 + TypeScript (+ Tailwind минимально)
- Backend: Fastify + TypeScript
- DB: PostgreSQL + Prisma (migrate + seed)
- Infra: Docker Compose (dev/prod), Caddy reverse proxy (HTTPS)
- API docs: Swagger/OpenAPI
- Wow-features (MVP): Sharing (viewer/editor) + PWA installable + offline mode

## Сущности
- users
- lists (owner_id)
- items (list_id)
- list_members (role: viewer/editor)
- list_invites (email, role, token, status, expires_at)

## Права (сводка)
- Owner: полный доступ + members/invites
- Editor: CRUD items, read list
- Viewer: read-only

## Sharing flow (MVP)
Invite by email -> пользователь логин/регистрация -> видит мои invites -> accept -> membership создан -> список доступен.

## PWA scope (MVP)
Installable + cache app shell. Оффлайн-синк.

## Roadmap (high level)
M0 docs/spec -> M1 dev env skeleton -> M2 backend foundation -> M3 DB schema -> M4 auth
-> M5 frontend foundation -> M6 lists CRUD -> M7 items CRUD -> M8 sharing -> M9 PWA
-> M10 hardening+tests -> M11 deploy VPS+HTTPS

## Текущий статус
M0/ Сейчас заполняем docs (M0) и фиксируем решения как источник правды (выполено)

M1/
1. Зафиксировать структуру репо на текущем этапе: монорепо (выполнено)
2. Docker compose для dev (в работе)
