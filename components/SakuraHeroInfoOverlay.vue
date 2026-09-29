<script setup lang="ts">
import ThemeHeroInfoOverlay from 'valaxy-theme-sakura/components/SakuraHeroInfoOverlay.vue'

function preventEmptyLink(event: MouseEvent) {
  const target = event.target
  if (target instanceof Element && target.closest('a')?.getAttribute('href') === '')
    event.preventDefault()
}
</script>

<template>
  <ThemeHeroInfoOverlay @click.capture="preventEmptyLink" @auxclick.capture="preventEmptyLink" />
</template>
