# Задача M1-dev-skeleton


## 1. Структура репо (монорепо)
- root
 |-- apps
   |--- api
   |--- web
 |-- packages
   |--- shared
 |-- docs
 |-- infra


## 2. Docker Compose для dev

### Цель: поднять dev-инфру так, чтобы БД стартовала предсказуемо и проект можно было запускать “в два движения”.
 - Минимум по Docker Compose:
 - PostgreSQL сервис
 - volume для данных
 - healthcheck (чтобы завязанные сервисы не стартовали “в пустоту”)
 - .env.example / переменные окружения (без секретов в репе)
 - понятные команды запуска (в идеале в корневых scripts/Makefile)
 
### FLOW
  1. docker compose up -d поднимает PostgreSQL без ошибок и она healthy. +
  2. Есть артефакты в репе: +
    - /infra/docker-compose.dev.yml +
    - .env.example +
    - короткий runbook в docs/ “как запустить dev” (1 экран текста). +
  3. Нет “демо-грехов”: +
    - .env в .gitignore +
    - никаких паролей/токенов в коммитах. +

### ЧЕК-ЛИСТ
  - Список изменённых общих файлов (3–10 строк: что именно трогал)
  - Команды запуска:
    - docker compose ...
    - (если есть) npm/pnpm dev и что он делает
  - Где лежит runbook в docs/ и что в нём.