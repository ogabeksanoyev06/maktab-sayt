<script setup lang="ts">
import dayjs from 'dayjs'

interface Props {
	item: {
		id: number
		name: string
		date: string
		univerlogo: string
		title: string
		value: string
	}
}
defineProps<Props>()
</script>

<template>
	<div
		class="bg-white border-2 border-white rounded-3xl shadow-card p-4 sm:p-8 flex flex-col justify-between relative z-1 h-[360px] overflow-hidden hover:shadow-cardHover transition-300"
	>
		<div class="absolute bottom-0 right-0 z-[-1] h-full flex-shrink-0">
			<img src="/images/result-user.png" alt="" class="w-full h-full object-contain" />
		</div>
		<div class="flex flex-col gap-6">
			<div class="h-12 max-w-[144px] w-full flex items-start">
				<img :src="item.univerlogo" :alt="item.name" class="h-full w-full object-contain" />
			</div>
			<div class="flex flex-col">
				<h2 class="text-3xl sm:text-[32px] font-bold !leading-120 uppercase">
					<span class="block">{{ item.name.split(' ')[0] }}</span>
					<span class="block">{{ item.name.split(' ').slice(1).join(' ') }}</span>
				</h2>
				<span class="font-medium leading-140">{{ dayjs(item.date).format('D MMMM YYYY') }}</span>
			</div>
		</div>
		<div class="flex-center-between bg-blue px-3.5 py-2.5 rounded-xl w-full">
			<p class="font-medium leading-140 text-white">{{ item.title }}:</p>
			<h3 class="text-xl sm:text-2xl font-bold leading-120 uppercase text-white">{{ item.value }}</h3>
		</div>
	</div>
</template>
