<script setup lang="ts">
interface Props {
	img: string
	number: string
	text: string
	isLast: boolean
}
defineProps<Props>()
</script>

<template>
	<div class="flex gap-4 sm:gap-6 max-sm:shadow max-sm:p-4 max-sm:rounded-3xl">
		<div class="flex flex-col gap-6 flex-1">
			<div class="w-full h-0.5 bg-gray-5 opacity-20 hidden sm:block"></div>
			<div class="flex flex-col items-start gap-4 sm:gap-9 flex-1">
				<img :src="img" :alt="text" class="sm:size-16 size-12 aspect-square object-contain" />
				<div class="flex flex-col items-start gap-2">
					<h3 class="text-4xl md:text-6xl font-bold">{{ number }}</h3>
					<p class="text-sm sm:text-base !leading-130">{{ text }}</p>
				</div>
			</div>
		</div>
		<div class="w-0.5 items-stretch bg-gray-5 opacity-20 mt-6 hidden sm:block" v-if="!isLast"></div>
	</div>
</template>
