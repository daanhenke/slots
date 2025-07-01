<script setup lang="ts">
import UserSnippet from "~/components/snippets/UserSnippet.vue";

const { users } = useUserStore()
</script>

<template>
  <div v-for="user in users">
    <UserSnippet :user="user" />
  </div>
</template>

<style scoped>

</style>
