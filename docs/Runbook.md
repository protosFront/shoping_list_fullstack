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

## 2) Запуск DEV
```bash
npm run dev
```

## 3) Проверка статуса
```bash
npm run dev:ps
```
Ожидаем, что сервис `postgres` имеет статус `healthy`.

## Полезные команды
Логи базы:
```bash
npm run dev:logs
```

Остановить dev (данные сохранятся):
```bash
npm run dev:down
```

Сбросить dev (удалит данные БД):
```bash
npm run dev:reset
```

Перезапуск:
```bash
npm run dev:restart
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
Перезапусти Docker Desktop и повтори `npm run dev`.
