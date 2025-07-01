<script setup lang="ts">
import SnippetContainer from "~/components/snippets/SnippetContainer.vue"
import { getUserImage } from '~/lib/url-helpers'
import type {User} from "~/lib/types";
import PersonSnippet from "~/components/snippets/PersonSnippet.vue";

const props = defineProps<{
  user: User
}>()

const userImageUrl = computed(() => getUserImage(props.user))
const alias = computed(() => {
  if (!props.user.firstName || !props.user.lastName) return props.user.emailAddress
  return `${props.user.firstName} ${props.user.lastName}`
})

const nope = () => alert('Nope!')
</script>

<template>
  <PersonSnippet :alias="alias" :image-url="userImageUrl">
    <!-- Buttons / actions -->
    <template v-slot:buttons>
      <button @click="nope">Nuke</button>
      <button @click="nope">Reset Password</button>
      <button @click="nope">Make SuperAdmin!</button>
    </template>

    <!-- Everything here goes in the default / unnamed <slot /> -->
    <h2>Fans:</h2>
    <div class="fans">
      <PersonIcon class="fan-icon" v-for="i in '123456'" :key="i" :src="userImageUrl" :alias="alias" />
    </div>
  </PersonSnippet>
</template>

<style scoped>
.details {
  @apply flex items-center w-full;

  h2 { @apply pl-4; }
}

.fans {
  @apply flex;

  .fan-icon {
    @apply w-6 transition-width;

    &:hover { @apply w-8; }

    &:not(:first-child) { @apply ml--3 }

    &:not(:last-child) { @apply mr-1 }
  }
}
</style>
