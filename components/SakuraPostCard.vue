<script setup lang="ts">
import type { Post } from 'valaxy'
import { computed } from 'vue'
import { useThemeConfig } from 'valaxy-theme-sakura/composables/index.ts'

const props = defineProps<{
  post: Post
  position: 'left' | 'right'
  cols: number
}>()
const themeConfig = useThemeConfig()
const cover = computed(() => props.post.cover || themeConfig.value.postList?.defaultImage)
const imageCard = computed(() => themeConfig.value.ui.postList?.image)
</script>

<template>
  <article class="sakura-card sakura-post-card blog-post-card" :class="[position, { group: cols > 1 }]">
    <SakuraImageCard v-if="cover" :to="post.path" :src="cover" :alt="post.title" v-bind="imageCard" />
    <div class="post-card-content" :class="{ 'has-cover': cover }">
      <slot><SakuraPostCardInfo :post /></slot>
    </div>
  </article>
</template>

<style scoped>
.blog-post-card {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  width: 100%;
  min-width: 0;
  overflow: hidden;
  box-sizing: border-box;
  color: var(--sakura-color-text);
  background: var(--sakura-post-card-bg);
  border: 1px solid var(--sakura-color-divider);
  border-radius: var(--sakura-post-card-rd);
}
.blog-post-card > .sakura-image-card {
  position: relative;
  min-width: 0;
  min-height: 0;
  width: 100%;
  aspect-ratio: 16 / 9;
}
.blog-post-card :deep(.blog-image-link) { position: absolute; inset: 0; }
.post-card-content {
  display: flex;
  flex-direction: column;
  min-width: 0;
  min-height: 0;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  overflow-wrap: anywhere;
}
@media (min-width: 768px) {
  .blog-post-card:not(.group) {
    grid-template-columns: minmax(0, 55fr) minmax(0, 45fr);
    grid-template-rows: minmax(0, 1fr);
    height: var(--sakura-post-card-height, 250px);
  }
  .blog-post-card.left:not(.group) { grid-template-columns: minmax(0, 45fr) minmax(0, 55fr); }
  .blog-post-card.left:not(.group) > .sakura-image-card { grid-column: 2; grid-row: 1; }
  .blog-post-card.left:not(.group) > .post-card-content { grid-column: 1; grid-row: 1; }
  .blog-post-card.right:not(.group) { text-align: right; }
  .blog-post-card:not(.group) > .sakura-image-card {
    width: 100%;
    height: 100%;
    aspect-ratio: auto;
  }
  .blog-post-card:not(.group) > .post-card-content { padding: 20px 39px; }
  .blog-post-card:not(.group) > .post-card-content.has-cover {
    width: 100%;
  }
}
</style>
