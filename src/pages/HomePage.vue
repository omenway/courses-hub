<template>
    <div class="space-y-10">
        <section class="bg-white/70 border border-white/50 rounded-xl p-6">
            <h1 class="text-3xl font-bold font-comfortaa">Courses Hub</h1>
            <p class="text-gray-700 mt-2 max-w-2xl">
                Welcome To Courses Hub! Browse our courses and feel free to check them whenever you want.
            </p>
        </section>

        <section class="space-y-4">
            <div class="flex items-end justify-between gap-4">
                <h2 class="text-2xl font-medium font-comfortaa">Latest Courses</h2>
                <RouterLink class="underline text-sm text-gray-700" to="/courses">
                    View all
                </RouterLink>
            </div>

            <LoadingSpinner v-if="bookStore.loading" />

            <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <BookCard
                    v-for="course in bookStore.latestCourses"
                    :key="course._id"
                    :title="course.title"
                    :author="course.author"
                    :description="course.category"
                    :course-id="course._id"
                    :purchased="bookStore.isPurchased(course._id)"
                    :in-cart="bookStore.isInCart(course._id)"
                    @click="bookStore.addToCart(course)"
                />
            </div>
        </section>

        <section class="space-y-4">
            <h2 class="text-2xl font-medium font-comfortaa">Highest Rated Courses</h2>

            <LoadingSpinner v-if="bookStore.loading"/>

            <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <BookCard
                    v-for="course in bookStore.highestRatedCourses"
                    :key="course._id"
                    :title="course.title"
                    :author="course.author"
                    :description="course.category"
                    :course-id="course._id"
                    :purchased="bookStore.isPurchased(course._id)"
                    :in-cart="bookStore.isInCart(course._id)"
                    @click="bookStore.addToCart(course)"
                />
            </div>
        </section>

        <section class="space-y-4">
            <h2 class="text-2xl font-medium font-comfortaa">Some Reviews of Our Courses</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <ReviewCard
                   name="Maha"
                   title="Clear and helpful course"
                   body="The course was easy to follow and the lessons were explained in a simple way. It felt organized and beginner-friendly."
                />
                <ReviewCard
                   name="Fahad"
                   title="Good learning experience"
                   body="I liked the structure of the course and how the topics were presented step by step. It made learning feel smooth and practical."
                />
                <ReviewCard
                   name="Sara"
                   title="Well organized content"
                   body="The course content was clear and the overall flow was good. It was a nice learning experience and easy to keep up with."
                />
            </div>
        </section>
    </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { useBookStore } from "@/stores/store";

import BookCard from "@/components/BookCard.vue";
import LoadingSpinner from "@/shared/LoadingSpinner.vue";
import ReviewCard from "@/shared/ReviewCard.vue";

const bookStore = useBookStore();

</script>

