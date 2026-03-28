<template>
    <div class="space-y-4 text-center">
        <h1 class="text-4xl font-bold font-comfortaa">404</h1>
        <p class="text-gray-700">
            this page doesnt exits - go to
            <RouterLink class="underline text-blue-600 hover:text-blue-700" to="/">
                home page
            </RouterLink>
        </p>
    </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

