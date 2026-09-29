<script setup lang="ts">
import { computed } from 'vue'
import ThemeImageCard from 'valaxy-theme-sakura/components/SakuraImageCard.vue'

const props = defineProps<{ src?: string | string[] }>()
const base = import.meta.env.BASE_URL.replace(/\/$/, '')
function withBase(src: string) {
  return base && src.startsWith('/') && !src.startsWith('//') && !src.startsWith(`${base}/`)
    ? `${base}${src}`
    : src
}
const source = computed(() => Array.isArray(props.src)
  ? props.src.map(withBase)
  : withBase(props.src || ''))
</script>

<template>
  <ThemeImageCard :src="source">
    <slot />
  </ThemeImageCard>
</template>
