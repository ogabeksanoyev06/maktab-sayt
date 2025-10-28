<script setup lang="ts">
interface Props {
	img: string
	title: string
	subtitle: string
}
defineProps<Props>()
</script>

<template>
	<div class="flex flex-col items-center gap-9">
		<div class="relative z-0 w-full aspect-[278/287]">
			<img :src="img" :alt="title" class="absolute left-1/2 -translate-x-1/2 -top-6 min-w-[calc(100%+112px)] h-[calc(100%+104px)]" />
		</div>
		<div class="flex flex-col items-center text-center relative z-1">
			<h3 class="text-2xl sm:text-[28px] font-bold leading-130">{{ title }}</h3>
			<p class="text-sm sm:text-base leading-140 text-gray-5">{{ subtitle }}</p>
		</div>
	</div>
</template>
