<script setup lang="ts">
interface Props {
	pauseOnHover?: boolean
	reverse?: boolean
	orientation?: 'horizontal' | 'vertical'
	repeat?: number
	overlay?: boolean
	gap?: string
	speed?: number
}

const props = withDefaults(defineProps<Props>(), {
	pauseOnHover: false,
	reverse: false,
	orientation: 'horizontal',
	repeat: 4,
	overlay: true,
	gap: '1rem',
	speed: undefined
})

const baseSpeed = 30

const adjustedSpeed = computed(() => {
	return props.speed ? `${props.speed}s` : `${baseSpeed * props.repeat}s`
})

const direction = computed(() => (props.orientation === 'horizontal' ? 'animate-marquee-x' : 'animate-marquee-y'))

const reverseDir = computed(() => (props.reverse ? 'reverse' : ''))
</script>

<template>
	<div class="relative overflow-hidden w-full" :style="{ '--gap': props.gap, '--speed': adjustedSpeed }">
		<div v-if="props.overlay" class="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-white via-transparent to-white"></div>
		<div class="flex w-max" :style="{ gap: props.gap }" :class="[direction, reverseDir, { 'hover:paused': props.pauseOnHover }]">
			<slot v-for="i in props.repeat" :key="i" />
		</div>
	</div>
</template>

<style scoped>
@keyframes marquee-x {
	from {
		transform: translate3d(0, 0, 0);
	}
	to {
		transform: translate3d(calc(-50% - var(--gap)), 0, 0);
	}
}

@keyframes marquee-y {
	from {
		transform: translate3d(0, 0, 0);
	}
	to {
		transform: translate3d(0, calc(-50% - var(--gap)), 0);
	}
}

.animate-marquee-x {
	animation: marquee-x var(--speed) linear infinite;
	display: flex;
}

.animate-marquee-y {
	animation: marquee-y var(--speed) linear infinite;
	flex-direction: column;
}

.reverse {
	animation-direction: reverse;
}

.animate-marquee-x.hover\:paused:hover,
.animate-marquee-y.hover\:paused:hover {
	animation-play-state: paused;
}
</style>
