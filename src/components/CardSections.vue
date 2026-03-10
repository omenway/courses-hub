<template>
  <RoundedCard>
    <div v-if="$slots.header" class="p-4 text-medium font-bold border-b border-gray-300">
      <slot name="header"></slot>
    </div>

    <div :class="{ 'p-4 text-medium border-b border-gray-300': $slots.footer }">
      <slot></slot>
    </div>

    <div v-if="$slots.footer" class="p-4 text-medium">
      <slot name="footer"></slot>
    </div>
  </RoundedCard>
</template>

<script setup>
import RoundedCard from './RoundedCard.vue'
</script>
