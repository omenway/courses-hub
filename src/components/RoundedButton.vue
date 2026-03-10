<template>
  <div>
    <button
      class="border border-gray-200 rounded-full px-3 py-1 hover:bg-blue-400 hover:text-white transition-colors duration-200 bg-blue-500 text-black-800"
      @click="$emit('click')"
    >
      <slot></slot>
    </button>
  </div>
</template>

<script setup>
import { defineEmits } from 'vue'
defineEmits(['click'])
</script>
