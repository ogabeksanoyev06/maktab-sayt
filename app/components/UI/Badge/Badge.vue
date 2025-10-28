<template>
	<button :class="['inline-flex items-center justify-center gap-1 rounded-md border px-2 py-1 text-xs font-medium transition-colors', variantClasses]">
		<span class="truncate">
			<slot />
		</span>
	</button>
</template>

<script setup lang="ts">
interface Props {
	variant?: 'default' | 'secondary' | 'outline' | 'destructive'
}

const props = withDefaults(defineProps<Props>(), {
	variant: 'secondary'
})

const variantClasses = computed(() => {
	switch (props.variant) {
		case 'default':
			return 'bg-primary text-primary-foreground hover:bg-primary/90 border-transparent'
		case 'secondary':
			return 'bg-secondary text-secondary-foreground hover:bg-secondary/80 border-transparent'
		case 'outline':
			return 'border border-input text-foreground bg-accent hover:text-accent-foreground'
		case 'destructive':
			return 'bg-destructive text-destructive-foreground hover:bg-destructive/90 border-transparent'
		default:
			return 'bg-secondary text-secondary-foreground hover:bg-secondary/80 border-transparent'
	}
})
</script>
