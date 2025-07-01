<script setup lang="ts">

</script>

<template>
<div class="snippet-container">
  <!-- Child content goes at the top -->
  <slot />

  <!-- This div will be empty if no buttons are supplied -->
  <div class="snippet-container-buttons">
    <slot name="buttons" />
  </div>
</div>
</template>

<style>
.snippet-container {
  @apply m-4 bg-gray-2 rounded-lg p-2;

  /* Don't waste space if there's nothing there */
  .snippet-container-buttons { @apply hidden; }
  .snippet-container-buttons:not(:empty) {
    @apply flex mt-4;

    button {
      @apply bg-dark text-light p-2 rounded-lg;

      &:not(:last-child) {
        @apply mr-2;
      }
    }
  }
}
</style>
