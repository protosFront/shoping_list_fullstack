# 01. Права доступа (Permissions)

## Роли
- Owner — владелец списка (lists.owner_id).
- Editor — участник с правом редактирования товаров.
- Viewer — участник только для просмотра.

## Общие правила
- Права проверяются на **backend** всегда.
- UI может скрывать кнопки, но это НЕ защита.
- Ошибки:
  - 401 Unauthorized — нет авторизации/сессии
  - 403 Forbidden — авторизован, но нет прав
  - 404 Not Found — ресурс не существует (или скрыт по политике)

## Матрица прав

### Списки (List)
- Owner:
  - create ✅
  - read ✅
  - update title ✅
  - delete ✅
- Editor:
  - read ✅
  - update title ❌
  - delete ❌
- Viewer:
  - read ✅
  - update ❌
  - delete ❌

### Товары (Item)
- Owner:
  - create ✅
  - read ✅
  - update ✅
  - delete ✅
- Editor:
  - create ✅
  - read ✅
  - update ✅
  - delete ✅
- Viewer:
  - read ✅
  - create ❌
  - update ❌
  - delete ❌

### Участники (Members)
- Owner:
  - list members ✅
  - add member ✅ (через invite)
  - change role ✅
  - remove member ✅
- Editor: всё ❌
- Viewer: всё ❌

### Приглашения (Invites)
- Owner:
  - create invite ✅
  - revoke invite ✅
  - view invites for list ✅
- Editor: ❌
- Viewer: ❌
- Invitee (приглашённый пользователь):
  - view my pending invites ✅
  - accept invite ✅
  - decline invite ✅

## Важные нюансы MVP
- Владелец всегда имеет доступ к списку независимо от memberships.
- Editor/Viewer получают доступ только через `list_members`.
- Viewer не может менять `is_done` — только чтение.
