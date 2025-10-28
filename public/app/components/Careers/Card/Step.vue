<script setup lang="ts">
interface Props {
	img: string
	title?: string
	subtitle?: string
}

withDefaults(defineProps<Props>(), {
	title: 'Default Title',
	subtitle: 'Default subtitle',
	img: '/svg/level/beginner.svg'
})
</script>

<template>
	<div class="flex flex-col items-center gap-6 w-full">
		<img :src="img" :alt="title" class="sm:w-[50px] sm:h-[50px] w-10 h-10 aspect-square object-contain" />
		<div class="flex flex-col items-center gap-1 text-center">
			<h3 class="text-2xl leading-130 font-bold">{{ title }}</h3>
			<p class="text-sm leading-130 text-gray-5">{{ subtitle }}</p>
		</div>
	</div>
</template>
