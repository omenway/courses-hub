import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useBookingStore = defineStore('booking', () => {
  const bookings = ref([])
  const loading = ref(false)

  const fetchBookings = async () => {
    try {
      loading.value = true
      const response = await fetch('http://localhost:3001/bookings')
      bookings.value = await response.json()
    } catch (error) {
      console.error('Error fetching bookings:', error)
    } finally {
      loading.value = false
    }
  }

  const registerCourse = async (course) => {
    const newBooking = {
      id: Date.now(),
      title: course.title,
      price: course.price,
      description: course.description,
      status: 'confirmed',
    }

    try {
      const response = await fetch('http://localhost:3001/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newBooking),
      })

      if (!response.ok) {
        throw new Error('Failed to register course')
      }

      bookings.value.push(newBooking)
    } catch (error) {
      console.error('Error registering course:', error)
    }
  }

  const removeBooking = async (id) => {
    try {
      const response = await fetch(`http://localhost:3001/bookings/${id}`, {
        method: 'DELETE',
      })

      if (!response.ok) {
        throw new Error('Failed to delete booking')
      }

      bookings.value = bookings.value.filter((b) => b.id !== id)
    } catch (error) {
      console.error('Error removing booking:', error)
    }
  }

  return {
    bookings,
    loading,
    fetchBookings,
    registerCourse,
    removeBooking,
  }
})
