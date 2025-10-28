<template>
    <div>
        <h1>Error</h1>
        <p>{{ error.message }}</p>
    </div>
</template>

<script setup>
const props = defineProps({
    error: {
        type: Object,
        required: true
    }
})
</script>