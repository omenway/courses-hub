<template>
  <div class="p-4 space-y-8">
    <h1 class="text-4xl font-bold font-mono">Courses Hub</h1>
    <h2 class="text-2xl font-medium font-mono">All Courses</h2>

    <div v-if="loading" class="flex flex-col justify-center items-center py-6 text-gray-500">
      <div class="animate-[pulse_0.7s_ease-in-out_infinite]">
        <div
          class="w-8 h-8 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin mb-2"
        ></div>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <CourseItem
        v-for="course in courses"
        :key="course.id"
        :title="course.title"
        :price="course.price"
        :description="course.description"
        @click="bookingStore.registerCourse(course)"
      ></CourseItem>
    </div>

    <h2 class="text-2xl font-medium font-mono">Your Courses</h2>

    <div
      v-if="bookingStore.loading"
      class="flex flex-col justify-center items-center py-6 text-gray-500"
    >
      <div class="animate-[pulse_0.7s_ease-in-out_infinite]">
        <div
          class="w-8 h-8 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin mb-2"
        ></div>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <BookingItem
        v-for="booking in bookingStore.bookings"
        :key="booking.id"
        :booking="booking"
      ></BookingItem>
    </div>
  </div>
</template>

<script setup>
import CourseItem from './components/CourseItem.vue'
import BookingItem from './components/BookingItem.vue'
import { ref, onMounted } from 'vue'
import { useBookingStore } from './stores/store.js'

const bookingStore = useBookingStore()
const courses = ref([])
const loading = ref(false)

const fetchCourses = async () => {
  try {
    loading.value = true
    const response = await fetch('http://localhost:3001/courses')
    courses.value = await response.json()
  } catch (error) {
    console.error('Error fetching courses:', error)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchCourses()
  bookingStore.fetchBookings()
})
</script>
