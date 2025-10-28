<script setup lang="ts">
interface Props {
	icon: string
	title: string
	time: string
}
defineProps<Props>()
</script>

<template>
	<div class="bg-white border-2 border-white flex flex-col items-center gap-4 sm:gap-6 text-center rounded-3xl shadow-card p-4		 sm:p-[40px_28px_28px_28px]">
		<div class="flex items-center gap-1">
			<img :src="icon" :alt="title" class="sm:w-[80px] sm:h-[80px] w-12 h-12 aspect-square object-contain" />
		</div>

		<div class="flex flex-col items-center gap-2">
			<h3 class="text-lg sm:text-xl font-bold leading-130">{{ title }}</h3>
			<div class="flex-center border border-gray-2 bg-white px-6 py-2 rounded-full">
				<span class="text-base font-medium leading-130">{{ time }}</span>
			</div>
		</div>
	</div>
</template>
