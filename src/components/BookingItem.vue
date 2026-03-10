<template>
  <CardSections class="p-4">
    <div class="flex justify-between items-center">
      <div>{{ booking.title }}</div>
      <div class="flex items-center gap-2">
        <RoundedButton @click="console.log('Reported')">Report Issue</RoundedButton>
        <RoundedButton @click="bookingStore.removeBooking(booking.id)">Remove</RoundedButton>
      </div>
    </div>
  </CardSections>
</template>

<script setup>
import CardSections from './CardSections.vue'
import RoundedButton from './RoundedButton.vue'
import { useBookingStore } from '@/stores/store'

const bookingStore = useBookingStore()

defineProps({
  booking: {
    type: Object,
    required: true,
  },
})
</script>
