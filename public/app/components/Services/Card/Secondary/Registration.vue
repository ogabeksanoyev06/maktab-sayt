<script setup lang="ts">
interface Props {
	img: string
	title: string
	subtitle: string
}
defineProps<Props>()
</script>

<template>
	<div class="bg-white border-2 border-white rounded-3xl flex flex-col items-center text-center gap-4 sm:gap-9 sm:p-7 p-5 shadow-card">
		<img :src="img" :alt="title" class="sm:w-16 sm:h-16 w-12 h-12 aspect-square flex-shrink-0" />
		<div class="flex flex-col items-center text-center gap-2">
			<h3 class="text-xl sm:text-2xl !leading-130 font-bold">{{ title }}</h3>
			<p class="sm:text-base !leading-140 text-gray-5">{{ subtitle }}</p>
		</div>
	</div>
</template>
