<template>
    <div class="space-y-6">
        <RouterLink to="/courses" class="inline-flex items-center gap-1 text-sm text-gray-700 hover:underline">
            ← Back to Courses
        </RouterLink>

        <LoadingSpinner v-if="bookStore.loading" />

        <div v-else-if="course" class="bg-white border border-gray-300 rounded-md p-6 space-y-4">
            <h1 class="text-3xl font-bold font-comfortaa">{{ course.title }}</h1>
            <div class="text-sm text-gray-600">Category: {{ course.category }}</div>
            <div class="text-gray-700">By {{ course.author }}</div>
            <hr class="border-gray-200" />
            <div>
                <h2 class="text-lg font-semibold mb-2">Description</h2>
                <p class="text-gray-700 leading-relaxed">
                    {{ course.description }}
                </p>
            </div>
        </div>

        <div v-else class="bg-white/70 border border-white/50 rounded-xl p-6">
            <div class="text-gray-700">Course not found.</div>
        </div>
    </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute, RouterLink } from "vue-router";
import { useBookStore } from "@/stores/store";
import LoadingSpinner from "@/shared/LoadingSpinner.vue";

const route = useRoute();
const bookStore = useBookStore();

const course = computed(() =>
    bookStore.courses.find((c) => c._id === route.params.courseId),
);

</script>
