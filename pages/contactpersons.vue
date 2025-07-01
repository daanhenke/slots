<script setup lang="ts">
import ContactPersonSnippet from "~/components/snippets/ContactPersonSnippet.vue";

const { users } = useUserStore()
</script>

<template>
  <div v-for="user in users">
    <ContactPersonSnippet :contact-person="user" />
  </div>
</template>

<style scoped>

</style>
