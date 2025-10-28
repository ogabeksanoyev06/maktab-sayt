<script setup lang="ts">
interface Props {
	img: string
	title: string
	subtitle: string
}
defineProps<Props>()
</script>

<template>
	<div class="bg-white border-2 border-white rounded-3xl flex flex-col items-start gap-6 md:gap-9 p-5 md:p-7 shadow-card">
		<img :src="img" :alt="title" class="md:w-16 md:h-16 w-12 h-12 aspect-square object-contain" />
		<div class="flex flex-col items-start gap-1 sm:gap-2">
			<h3 class="text-xl md:text-2xl leading-130 font-bold">{{ title }}</h3>
			<p class="md:text-base !leading-140 text-gray-5">{{ subtitle }}</p>
		</div>
	</div>
</template>
