<template>
    <button
        type="button"
        :class="[
            'border border-gray-200 rounded-full px-3 py-1 transition-colors duration-200 text-black hover:scale-105',
            disabled
                ? 'border-gray-200 bg-gray-200 text-gray-600 cursor-not-allowed'
                : variant === 'danger'
                  ? 'border-transparent bg-gradient-to-r from-red-400 to-red-600 text-white hover:from-red-500 hover:to-red-600'
                  : 'border-transparent bg-gradient-to-r from-blue-400 to-indigo-400 text-white hover:from-blue-500 hover:to-indigo-500',
            !disabled ? 'hover:scale-[1.02] active:scale-[0.99]' : '',
        ]"
        :disabled="disabled"
        @click="disabled ? null : $emit('click')"
    >
        <slot></slot>
    </button>
</template>

<script setup>
defineEmits(["click"]);

defineProps({
    variant: {
        type: String,
        default: "default",
    },
    disabled: {
        type: Boolean,
        default: false,
    },
});
</script>
