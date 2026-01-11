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

## API base URL (runtimeConfig)
Дефолт задан в `apps/web/nuxt.config.ts` как `runtimeConfig.public.apiBaseUrl`.
`NUXT_PUBLIC_API_BASE_URL` переопределяет дефолт и доступна в браузере (public) — Nuxt сам мапит `NUXT_PUBLIC_*` в `runtimeConfig.public`.
В dev Nuxt автоматически читает env из `apps/web/.env`.
Важно: `.env.example` не читается Nuxt, нужен реальный `apps/web/.env` и перезапуск dev-сервера после изменений.

### Настройка
```bash
cp apps/web/.env.example apps/web/.env
```

### Использование в коде
```ts
const { public: { apiBaseUrl } } = useRuntimeConfig()
```

Важно: `runtimeConfig.public` доступен в браузере, `runtimeConfig` (private) — только на сервере; секреты на клиент не выносим.

## Сборка и предпросмотр (из `apps/web`)
```bash
npm run build
npm run preview
```
