<template>
  <CardSections class="bg-white border border-gray-300 rounded-md">
    <template #header>{{ title }}</template>
    <template #default>{{ price }}</template>
    <template #footer>
      <p class="mb-4">{{ description }}</p>
      <RoundedButton @click="$emit('click')"> Enroll Now </RoundedButton>
    </template>
  </CardSections>
</template>

<script setup>
import CardSections from './CardSections.vue'
import RoundedButton from './RoundedButton.vue'
import { defineProps, defineEmits } from 'vue'

defineProps({
  title: String,
  price: String,
  description: String,
})

defineEmits(['click'])
</script>
