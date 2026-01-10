# 03. Модель данных (Data Model / ERD)

## Сущности

### users
- id (uuid, pk)
- email (text, unique)
- password_hash (text)
- created_at (timestamp)
- updated_at (timestamp)

### lists
- id (uuid, pk)
- owner_id (uuid, fk -> users.id, index)
- title (text)
- created_at
- updated_at

### items
- id (uuid, pk)
- list_id (uuid, fk -> lists.id, index)
- title (text)
- qty (numeric, nullable)
- unit (text, nullable)
- is_done (boolean, default false, index)
- created_at
- updated_at

### list_members
- id (uuid, pk) либо составной ключ (list_id, user_id) — решение: **уникальный составной** (проще)
- list_id (uuid, fk -> lists.id, index)
- user_id (uuid, fk -> users.id, index)
- role (enum: viewer/editor)
- created_at
- updated_at
Ограничения:
- unique(list_id, user_id)

### list_invites
- id (uuid, pk)
- list_id (uuid, fk -> lists.id, index)
- email (text, index)
- role (enum: viewer/editor)
- token (text, unique) — для подтверждения/идентификации
- status (enum: pending/accepted/revoked/expired)
- expires_at (timestamp)
- created_at
- updated_at
Ограничения:
- unique(list_id, email, status=pending) (логически; физически можно: unique(list_id, email) и хранить один активный invite)

## Доступ к списку (правило)
Пользователь имеет доступ к списку, если:
- lists.owner_id = user.id
ИЛИ
- существует list_members где (list_id = lists.id и user_id = user.id)

## Важные индексы
- lists(owner_id)
- items(list_id), items(is_done)
- list_members(list_id, user_id) unique + index
- list_invites(list_id), list_invites(email), list_invites(token)

## Каскады
- Удаление списка удаляет items, members, invites (on delete cascade).
