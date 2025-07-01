<script setup lang="ts">
/*
  Instead of computing the url here, which could get tricky
  and has nothing to do with a circular image we do so in the
  component which already has the data to compute the url
 */
defineProps<{
  src: string
  alias: string
}>()
</script>

<template>
<div class="person-icon">
  <img :src="src" :alt="alias" :title="alias" />
</div>
</template>

<style scoped>
.person-icon {
  img {
    @apply aspect-ratio-square rounded-full;
  }
}
</style>
