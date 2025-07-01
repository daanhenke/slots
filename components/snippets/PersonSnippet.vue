<script setup lang="ts">
import SnippetContainer from "~/components/snippets/SnippetContainer.vue"
defineProps<{
  alias: string
  imageUrl: string
}>()
</script>

<template>
<SnippetContainer>
  <!-- Overriding a slot with default implementation -->
  <slot name="details">
    <div class="details">
      <PersonIcon :src="imageUrl" :alias="alias"  />
      <h2>{{ alias }}</h2>
    </div>
  </slot>

  <!-- All unbound content goes here -->
  <slot />

  <!-- Rebinding a slot -->
  <template v-slot:buttons>
    <slot name="buttons" />
  </template>
</SnippetContainer>
</template>

<style>
.details {
  @apply flex items-center w-full mb-2;

  h2 { @apply pl-4; }

  .person-icon { @apply w-12; }
}
</style>
