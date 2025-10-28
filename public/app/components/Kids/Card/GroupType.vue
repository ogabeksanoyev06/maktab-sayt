<script setup lang="ts">
interface Props {
	img: string
	title: string
	subtitle: string
	grades: string
}
defineProps<Props>()
</script>

<template>
	<div class="bg-white flex flex-col gap-4 md:gap-9 items-start rounded-3xl border-2 border-white p-5 md:p-7 shadow-card">
		<img :src="img" :alt="title" class="md:size-16 size-12 aspect-square flex-shrink-0" />
		<div class="flex flex-col gap-2">
			<h3 class="text-xl sm:text-2xl md:text-[28px] font-bold !leading-130">{{ title }}</h3>
			<p class="text-sm sm:text-base !leading-140">{{ subtitle }}</p>
		</div>
		<span class="bg-[#0154F81F] text-blue text-sm sm:text-base font-bold !leading-[11px] p-2 rounded-lg">{{ grades }} grades</span>
	</div>
</template>
