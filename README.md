# Shopping List Fullstack

## Документация
- Runbook (как запускать dev): `docs/Runbook.md`
- Контекст проекта: `docs/PROJECT_CONTEXT.md`
- API docs: `docs/api/README.md`

## Быстрый старт (dev)
1) Установить зависимости отдельно:
   - `npm run api:install`
   - `npm run web:install`
2) Запустить инфраструктуру (Postgres):
   - `npm run infra:up`
3) Запустить API:
   - `npm run api:dev`
4) Запустить Web (Nuxt):
   - `npm run web:dev`

Подробности см. `docs/Runbook.md`.

## Скрипты
- `npm run api:install` - установка зависимостей API (apps/api).
- `npm run web:install` - установка зависимостей Web (apps/web).
- `npm run api:dev` - dev только API.
- `npm run web:dev` - dev только Web.
- `npm run infra:up` - запуск инфраструктуры (Docker Compose).
- `npm run infra:ps` - статус сервисов.
- `npm run infra:logs:db` - логи базы.
- `npm run infra:down` - остановка dev (данные сохраняются).
- `npm run infra:reset` - сброс dev (удаляет данные БД).
- `npm run infra:restart` - перезапуск dev.

## Структура репозитория
- `apps/` — приложения (frontend/backend и т.п.).
- `packages/` — общие пакеты/модули.
- `infra/` — инфраструктура и docker-compose.
- `docs/` — документация проекта.
