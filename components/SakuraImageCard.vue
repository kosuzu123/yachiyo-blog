<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  src?: string | string[]
  to?: string
  alt?: string
  scale?: number | string
  rotate?: number | string
}>(), { to: '', alt: '封面', scale: 1.2, rotate: 0 })
const base = import.meta.env.BASE_URL.replace(/\/$/, '')
function withBase(src: string) {
  return base && src.startsWith('/') && !src.startsWith('//') && !src.startsWith(`${base}/`)
    ? `${base}${src}`
    : src
}
const source = computed(() => withBase(Array.isArray(props.src) ? props.src[0] || '' : props.src || ''))
</script>

<template>
  <div class="sakura-image-card blog-image-card" :style="{ '--cover-scale': scale, '--cover-rotate': `${rotate}deg` }">
    <AppLink class="blog-image-link" :to="to" :aria-label="alt">
      <img v-if="source" :key="source" :src="source" :alt="alt" loading="eager" decoding="async" class="sakura-image-card-img">
    </AppLink>
    <div v-if="$slots.default" class="blog-image-overlay"><slot /></div>
  </div>
</template>

<style scoped>
.blog-image-card { position: relative; overflow: hidden; }
.blog-image-link { display: block; width: 100%; height: 100%; }
.sakura-image-card-img { display: block; width: 100%; height: 100%; object-fit: cover; transition: transform 0.45s ease; }
.blog-image-card:hover .sakura-image-card-img { transform: scale(var(--cover-scale)) rotate(var(--cover-rotate)); }
.blog-image-overlay { position: absolute; inset: 0; pointer-events: none; }
</style>
