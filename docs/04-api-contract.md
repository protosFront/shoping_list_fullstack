# 04. Контракт API (MVP)

## Общие правила
- Все приватные ручки требуют авторизации.
- Формат успешных ответов: JSON.
- Формат ошибки (единый):
  - code: string
  - message: string
  - details?: any
  - requestId: string

## Auth
### POST /auth/register
Вход: { email, password }
Выход: { user, accessToken? } + refresh cookie (httpOnly)
Ошибки: 409 email exists, 422 validation

### POST /auth/login
Вход: { email, password }
Выход: { user, accessToken? } + refresh cookie
Ошибки: 401 invalid credentials, 422 validation

### POST /auth/refresh
Вход: refresh cookie
Выход: { accessToken } (и/или обновление refresh)
Ошибки: 401 invalid/expired

### POST /auth/logout
Действие: очистка refresh cookie
Выход: 204

### GET /me
Выход: { id, email }
Ошибки: 401

## Lists
### GET /lists
Выход: [{ id, title, access: "owner"|"editor"|"viewer", ownerId, updatedAt }]
Содержит owned + shared.

### POST /lists
Вход: { title }
Выход: { id, title }
Ошибки: 422

### PATCH /lists/:id
Вход: { title }
Доступ: только Owner
Выход: { id, title }
Ошибки: 403, 404, 422

### DELETE /lists/:id
Доступ: только Owner
Выход: 204
Ошибки: 403, 404

## Items
### GET /lists/:id/items
Доступ: Owner/Editor/Viewer (read)
Выход: [{ id, title, qty, unit, isDone, createdAt, updatedAt }]
Ошибки: 403, 404

### POST /lists/:id/items
Доступ: Owner/Editor
Вход: { title, qty?, unit? }
Выход: { id, ... }
Ошибки: 403, 404, 422

### PATCH /items/:id
Доступ: Owner/Editor
Вход (частично): { title?, qty?, unit?, isDone? }
Выход: { id, ... }
Ошибки: 403, 404, 422

### DELETE /items/:id
Доступ: Owner/Editor
Выход: 204
Ошибки: 403, 404

## Sharing / Members / Invites
### GET /lists/:id/members
Доступ: Owner
Выход: [{ userId, email, role, addedAt }]
Ошибки: 403, 404

### POST /lists/:id/invites
Доступ: Owner
Вход: { email, role: "viewer"|"editor" }
Выход: { inviteId, email, role, status, expiresAt }
Ошибки: 403, 404, 409 already member, 422

### GET /lists/:id/invites
Доступ: Owner
Выход: [{ inviteId, email, role, status, expiresAt, createdAt }]

### POST /invites/:inviteId/accept
Доступ: авторизованный пользователь с email, совпадающим с invite.email
Выход: { listId, role }
Ошибки: 403, 404, 409, 410 expired, 422

### POST /invites/:inviteId/decline
Доступ: как accept
Выход: 204 (перевод в declined или удаление; решение: declined опционально, можно delete)
Ошибки: 403, 404, 410

### PATCH /lists/:id/members/:userId
Доступ: Owner
Вход: { role: "viewer"|"editor" }
Выход: { userId, role }
Ошибки: 403, 404, 422

### DELETE /lists/:id/members/:userId
Доступ: Owner
Выход: 204
Ошибки: 403, 404
