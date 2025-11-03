<script setup>
import { useWindowScroll } from '@vueuse/core'

const modelValue = defineModel(Boolean)

const props = defineProps({
	isTransparent: Boolean
})

const { y } = useWindowScroll()

const isWhiteMode = computed(() => {
	if (!props.isTransparent) return false
	return y.value < 80
})

function toggleMenu() {
	modelValue.value = !modelValue.value
}
</script>

<template>
	<button class="flex-center rounded-xl w-9 h-9 lg:!hidden transition-300" @click="toggleMenu">
		<transition name="fade-sm" mode="out-in">
			<Icon name="lucide:x" class="!size-6" v-if="modelValue" key="close" :class="isWhiteMode ? 'text-white' : 'text-foreground'" />
			<Icon name="lucide:menu" class="!size-6" v-else key="menu" :class="isWhiteMode ? 'text-white' : 'text-foreground'" />
		</transition>
	</button>
</template>
