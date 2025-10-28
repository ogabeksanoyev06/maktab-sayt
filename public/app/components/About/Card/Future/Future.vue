<script setup lang="ts">
interface Props {
	item: {
		title: string
		description: string
		image: string
		background_image: string
	}
	index?: number
}

const props = defineProps<Props>()

const gradients = ['linear-gradient(296deg, #0154F8 0%, #013192 100%)', 'linear-gradient(296deg, #FE014D 0%, #57001A 100%)', 'linear-gradient(296deg, #007D5C 0%, #003C29 100%)']

const background = computed(() => gradients[(props.index ?? 0) % gradients.length])
</script>

<template>
	<div class="relative z-5 flex flex-col gap-6 max-w-[578px] w-full rounded-[40px] p-4 sm:p-6 shadow-[0_20px_90px_0_rgba(17,24,30,0.6)] group" :style="{ background }">
		<img :src="item.background_image" alt="" class="absolute top-5 right-5 size-[200px] aspect-square opacity-50 z-[-1]" />
		<div class="size-14 sm:size-[80px] flex-center aspect-square p-3 sm:p-5 glass-card rounded-full">
			<img :src="item.image" alt="" />
		</div>
		<div class="flex flex-col gap-3">
			<h3 class="text-[28px] !leading-130 font-bold text-white">{{ item.title }}</h3>
			<p class="sm:text-base !leading-130 text-white">
				{{ item.description }}
			</p>
		</div>
	</div>
</template>
