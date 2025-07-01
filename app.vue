<script setup lang="ts">
import '@unocss/reset/tailwind.css'
const headerLinks = [
  { name: 'Users', to: '/users' },
  { name: 'Contact Persons', to: '/contactpersons' },
]
</script>

<template>
  <header>
    <ul>
      <li v-for="link in headerLinks">
        <NuxtLink :to="link.to">
          {{ link.name }}
        </NuxtLink>
      </li>
    </ul>
  </header>
  <NuxtPage />
</template>

<style>
body, #__nuxt {
  @apply min-h-screen relative flex flex-col;
}

header {
  ul {
    @apply flex justify-center py-4;

    li {
      @apply text-light underline-light underline px-8 py-1 bg-dark-1 rounded-lg;
      &:not(:last-child) {
        @apply mr-2;
      }
    }
  }
}
</style>
