<script setup lang="ts">
interface Props {
	img: string
	title: string
	subtitle: string
}
defineProps<Props>()
</script>

<template>
	<div class="flex flex-col items-center gap-6 max-w-[290px] w-full">
		<img :src="img" :alt="title" class="w-[50px] h-[50px] aspect-square object-contain" />
		<div class="flex flex-col items-center gap-1 text-center">
			<h3 class="text-2xl leading-130 font-bold">{{ title }}</h3>
			<p class="text-sm leading-130 text-gray-5">{{ subtitle }}</p>
		</div>
	</div>
</template>
