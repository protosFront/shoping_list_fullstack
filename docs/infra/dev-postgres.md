# dev-postgres.md — PostgreSQL в Docker Compose (dev)

## Назначение
Поднять локальную PostgreSQL для разработки так, чтобы:
- запуск был воспроизводимый (одинаково на любом ПК)
- данные сохранялись между перезапусками (Docker volume)
- была проверка готовности сервиса (`healthy`)
- секреты не попадали в репозиторий (локальный `infra/.env`)

---

## Что получаем
- Postgres запускается из образа `postgres:16-alpine`
- данные хранятся в Docker volume `pgdata`
- доступ к БД с этого ПК: `localhost:${POSTGRES_PORT}`  
- внутри docker-сети (для будущего API): `postgres:5432`

---

## Пререквизиты
- Docker Desktop запущен (Windows + WSL2)
- Команды доступны:

```bash
docker version
docker compose version
```

## Запуск всегда делаем с явным env-файлом:
docker compose --env-file infra/.env -f infra/docker-compose.dev.yml up -d

## Проверить готовность (Ожидаем, что сервис postgres имеет статус healthy)
docker compose -f infra/docker-compose.dev.yml ps

## Логи 
docker compose -f infra/docker-compose.dev.yml logs -f postgres

## Остановить (данные сохранятся)
docker compose -f infra/docker-compose.dev.yml down

## Полный сброс БД (удалит данные!)
docker compose -f infra/docker-compose.dev.yml down -v
