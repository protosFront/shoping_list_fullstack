# Runbook · Как запустить DEV

## Требования
- Docker Desktop (Windows + WSL2) запущен.
- Node.js + npm установлены.

Проверка:
```bash
docker compose version
npm -v
```

## 1) Один раз: создать локальный env
Из корня репозитория:
```bash
cp infra/.env.example infra/.env
```

Открой `infra/.env` и поменяй `POSTGRES_PASSWORD` на свой dev-пароль.

## 2) Установка зависимостей (раздельные node_modules)
Из корня репозитория:
```bash
npm run api:install
npm run web:install
```

## 3) Запуск инфраструктуры (Postgres)
```bash
npm run infra:up
```

## 4) Запуск приложений (разные терминалы)
```bash
npm run api:dev
npm run web:dev
```

## 5) Проверка статуса
```bash
npm run infra:ps
```
Ожидаем, что сервис `postgres` имеет статус `healthy`.

## Полезные команды
Логи базы:
```bash
npm run infra:logs:db
```

Остановить dev (данные сохранятся):
```bash
npm run infra:down
```

Сбросить dev (удалит данные БД):
```bash
npm run infra:reset
```

Перезапуск:
```bash
npm run infra:restart
```

## Если Docker “не видит” движок
Ошибка вида: `...dockerDesktopLinuxEngine... The system cannot find the file specified`

Решение:
1) Убедись, что Docker Desktop запущен.
2) Переключи контекст:
```bash
docker context use desktop-linux
```
3) Если не помогло (PowerShell):
```powershell
wsl --shutdown
```
Перезапусти Docker Desktop и повтори `npm run infra:up`.
