<script setup lang="ts">
interface Props {
	item: {
		id: number
		statistic_section: {
			id: number
			title: string
			slug: string
		}
		title: string
		value: string
		extra?: string
	}
	isLast: boolean
}
defineProps<Props>()
</script>

<template>
	<div class="flex gap-6 max-md:shadow-card max-md:p-4 max-md:rounded-3xl">
		<div class="flex flex-col gap-6 flex-1">
			<div class="w-full h-0.5 bg-gray-5 opacity-20 md:block hidden"></div>
			<div class="flex flex-col items-start gap-6 md:gap-12 pl-3">
				<p class="border border-red px-3 py-2 rounded-full font-medium">
					{{ item.title }}
				</p>
				<div class="flex flex-col gap-2">
					<h1 class="text-3xl md:text-6xl font-bold">{{ item.value }}</h1>
					<span>{{ item.extra }}</span>
				</div>
			</div>
		</div>
		<div class="w-0.5 items-stretch bg-gray-5 opacity-20 mt-6 md:block hidden" v-if="!isLast"></div>
	</div>
</template>
