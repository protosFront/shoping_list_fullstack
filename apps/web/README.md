# Web (Nuxt)

## Запуск из корня репозитория
```bash
npm run web:install
npm run web:dev
```

Dev-сервер будет доступен на `http://localhost:3000`.
Для теста на мобильном в той же сети запусти `npm run web:dev:host` и открой `http://<IP_ПК>:3000`.

## Запуск из `apps/web`
```bash
npm install
npm run dev
```
Для теста на мобильном в той же сети: `npm run dev:host`, затем `http://<IP_ПК>:3000`.

## Сборка и предпросмотр (из `apps/web`)
```bash
npm run build
npm run preview
```
