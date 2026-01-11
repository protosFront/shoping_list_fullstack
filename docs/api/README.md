# API Docs (Dev)

Короткая инструкция, как поднять API локально. Детали по env: `env-and-config.md`.

## Команды
```bash
cp apps/api/.env.example apps/api/.env
npm run api:dev
```
Если запускаешь из `apps/api`, команда: `npm run dev`.

## Переменные
Файл: `apps/api/.env`
- `API_HOST`
- `API_PORT`
- `CORS_ORIGIN`

## Проверка
```bash
curl -i http://127.0.0.1:3001/health
```
Ожидаем `200` и тело `{ "ok": true }`.
