<template>
  <section>
    <h1>Ping /health</h1>

    <button type="button" @click="onPing" :disabled="status === 'pending'">
      {{ status === 'pending' ? 'Pinging...' : 'Ping /health' }}
    </button>

    <p v-if="status === 'pending'">Loading...</p>
    <p v-else-if="isOk">OK</p>
    <p v-else-if="status === 'error'">
      ERROR: {{ error?.statusCode ?? 'n/a' }} {{ error?.statusMessage ?? error?.message ?? '' }}
    </p>
    <p v-else-if="status === 'success'">ERROR: unexpected response</p>
    <p v-else>No request yet.</p>
  </section>
</template>

<script setup lang="ts">
const { public: { apiBaseUrl } } = useRuntimeConfig()
const baseUrl = computed(() => String(apiBaseUrl || '').replace(/\/$/, ''))
const healthUrl = computed(() => `${baseUrl.value}/health`)

const { data, error, status, refresh } = useFetch(healthUrl, {
  server: false,
  immediate: false
})

const isOk = computed(() => {
  if (status.value !== 'success') return false
  const value = data.value
  if (!value || typeof value !== 'object') return false
  const record = value as Record<string, unknown>
  return record.ok === true
})

const onPing = () => {
  void refresh()
}

onMounted(() => {
  onPing()
})
</script>
