# 05. PWA (MVP Scope)

## PWA v1 (входит в MVP)
Цель: приложение устанавливается на устройство и работает как standalone. Кешируем только статику.

Функции:
- Web App Manifest (name, icons, start_url, display=standalone).
- Service Worker:
  - кеширование app shell (HTML/JS/CSS/иконки)
  - runtime caching для API
- UX:
  - показать подсказку “Установить” (если доступно) — опционально
  - приложение открывается как отдельное (standalone)
- Offline queue для items:
  - операции add/update/delete пишутся в IndexedDB
  - при появлении сети отправляются на API
  - конфликты решаются last-write-wins или по времени

## Критерии готовности PWA v1
- Lighthouse показывает installable.
- На iOS/Android можно добавить на домашний экран (ограничения платформы учитываем).
- Приложение запускается в standalone и отображает интерфейс.
- работает офлайн
- синхронизируется при взаимодействии всех участников списка (WS)
