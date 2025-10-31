<script setup>
const modelValue = defineModel(Boolean)

const props = defineProps({
	isTransparent: Boolean
})
</script>

<template>
	<button class="flex-center border border-border rounded-xl w-9 h-9 lg:!hidden text-foreground" :class="{ '!text-white': props.isTransparent }">
		<transition name="fade-sm" mode="out-in">
			<Icon name="lucide:x" v-if="modelValue" key="close" />
			<Icon name="lucide:menu" v-else key="menu" />
		</transition>
	</button>
</template>
