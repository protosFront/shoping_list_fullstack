# Shopping List Fullstack

## Документация
- Runbook (как запускать dev): `docs/Runbook.md`
- Контекст проекта: `docs/PROJECT_CONTEXT.md`
- API docs: `docs/api/README.md`

## Быстрый старт (dev)
См. `docs/Runbook.md`.

## Скрипты
- `npm run dev` — запуск dev окружения (Docker Compose).
- `npm run dev:ps` — статус сервисов.
- `npm run dev:logs` — логи базы.
- `npm run dev:down` — остановка dev (данные сохраняются).
- `npm run dev:reset` — сброс dev (удаляет данные БД).
- `npm run dev:restart` — перезапуск dev.

## Структура репозитория
- `apps/` — приложения (frontend/backend и т.п.).
- `packages/` — общие пакеты/модули.
- `infra/` — инфраструктура и docker-compose.
- `docs/` — документация проекта.
