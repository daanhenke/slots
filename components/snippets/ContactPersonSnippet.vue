<script setup lang="ts">
import {getContactPersonImageUrl} from '~/lib/url-helpers'
import type {ContactPerson} from "~/lib/types";
import PersonSnippet from "~/components/snippets/PersonSnippet.vue";

const props = defineProps<{
  contactPerson: ContactPerson
}>()

const contactPersonImageUrl = computed(() => getContactPersonImageUrl(props.contactPerson))

const alias = computed(() => {
  if (!props.contactPerson.firstName || !props.contactPerson.lastName) return props.contactPerson.emailAddress
  return `${props.contactPerson.firstName} ${props.contactPerson.lastName}`
})
</script>

<template>
  <PersonSnippet :alias="alias" :image-url="contactPersonImageUrl">
    <!-- Overriding the details slot for a slightly different name -->
    <template v-slot:details>
      <div class="details">
        <PersonIcon class="contact-person-icon" :src="contactPersonImageUrl" :alias="alias"  />
        <h2 :style="{'color': contactPerson.favoriteColor}">{{ alias }}</h2>
      </div>
    </template>

    <!-- Everything else -->
    <h2>Contact Info:</h2>
    <div class="contact-info">
      <div>
        <label>Email:</label>
        <span>{{ contactPerson.emailAddress }}</span>
      </div>
      <div v-if="contactPerson.phoneNumber">
        <label>Phone Number:</label>
      <span>{{ contactPerson.phoneNumber }}</span>
    </div>
    </div>
  </PersonSnippet>
</template>

<style scoped>
.contact-info {
  @apply flex flex-col;

  div {
    @apply flex;
    &:not(:last-child) { @apply mr-1 }

    label { @apply mr-4; }
  }
}
</style>
