<template>
	<button
		:class="[
			'inline-flex items-center justify-center gap-2 rounded border whitespace-nowrap text-base font-medium cursor-pointer transition-all duration-300 active:scale-95 select-none disabled:opacity-60 disabled:cursor-not-allowed',
			sizeClasses,
			variantClasses,
			mainClass
		]"
		:disabled="disabled || loading"
	>
		<template v-if="loading">
			<Icon name="lucide:loader" class="animate-spin shrink-0" />
		</template>

		<template v-else>
			<Icon v-if="iconLeft" :name="iconLeft" class="shrink-0" />
			<slot v-if="text">{{ text }}</slot>
			<Icon v-if="icon" :name="icon" class="shrink-0" />
		</template>
	</button>
</template>

<script setup>
const props = defineProps({
	variant: { type: String, default: 'primary' },
	size: { type: String, default: 'md' },
	text: { type: String, default: 'Button' },
	icon: String,
	iconLeft: String,
	disabled: Boolean,
	loading: Boolean,
	mainClass: [String, Array, Object]
})

const sizeClasses = computed(() => {
	switch (props.size) {
		case 'sm':
			return 'px-3 py-1.5'
		case 'lg':
			return 'px-6 py-3'
		default:
			return 'px-6 py-2'
	}
})

const variants = {
	primary: 'bg-primary text-primary-foreground border-transparent hover:bg-primary/90 focus:ring-2 focus:ring-primary/30',
	secondary: 'bg-secondary text-secondary-foreground border border-border hover:bg-secondary/80 focus:ring-2 focus:ring-secondary/20',
	outline: 'bg-transparent text-foreground border border-primary hover:bg-primary hover:text-white focus:ring-2 focus:ring-primary/30',
	destructive: 'bg-destructive text-destructive-foreground border-transparent hover:bg-destructive/90 focus:ring-2 focus:ring-destructive/40',
	ghost: 'bg-transparent text-foreground hover:bg-muted/50 border-transparent focus:ring-2 focus:ring-muted/30'
}

const variantClasses = computed(() => variants[props.variant] || variants.primary)
</script>

<style scoped></style>
