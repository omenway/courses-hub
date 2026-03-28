<template>
    <AppHeader />

    <main class="app-main">
        <div class="max-w-6xl mx-auto px-4 py-6">
            <RouterView />
        </div>
    </main>

    <AppFooter />
</template>

<script setup>
import { RouterView } from "vue-router";
import AppHeader from "@/shared/AppHeader.vue";
import AppFooter from "@/shared/AppFooter.vue";
import { onMounted } from "vue";
import { useBookStore } from "@/stores/store";
const bookStore = useBookStore();
onMounted(() => {
    bookStore.fetchCourses();
});
</script>
