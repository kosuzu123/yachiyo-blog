<template>
  <div class="flex-center flex-col">
    <button type="button" title="赞助暂未开放" aria-label="赞助暂未开放" aria-disabled="true" @click.prevent>
      <div i-ri-heart-line class="animation-hvr-bounce-in color-red-400" />
    </button>
    <!-- Preserve the original collapsed panel's spacing without loading QR codes. -->
    <div class="sponsor-placeholder" aria-hidden="true" />
  </div>
</template>

<style scoped>
.sponsor-placeholder { height: 0; margin-block: 1rem; }
</style>
