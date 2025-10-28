<script setup lang="ts">
import Highlighter from 'vue-highlight-words'

import dayjs from 'dayjs'

interface Props {
	item: {
		id: number
		name: string
		result: string
		date: string
		file: string
	}
	search: string
}
defineProps<Props>()
</script>

<template>
	<div
		class="relative overflow-hidden flex flex-col justify-between z-1 shrink-0 w-full h-[400px] rounded-[28px] p-6 border-2 border-white bg-white shadow-card group hover:shadow-cardHover transition-300 bg-no-repeat bg-[length:424px_389px] bg-[bottom_-44px_left_-4px]"
		:style="{ backgroundImage: `linear-gradient(179.87deg, rgba(255, 255, 255, 0) 52.73%, #FFFFFF 82.4%), url(${item.file})` }"
	>
		<div class="flex flex-col gap-2">
			<Highlighter
				class="text-2xl leading-130 uppercase font-bold group-hover:text-red transition-300 whitespace-pre-line"
				highlight-class-name="bg-[#FFCD55] rounded-lg"
				:search-words="[search || '']"
				:text-to-highlight="item.name.replace(' ', '\n')"
			/>
			<span class="text-base leading-140 text-gray-5">{{ dayjs(item.date).format('DD MMMM YYYY') }}</span>
		</div>
		<div class="flex-y-center flex-col backdrop-blur-[4px] text-center gap-4 px-8 py-5 border rounded-2xl border-gray-1 max-w-[131px] w-full group-hover:bg-blue transition-300">
			<h3 class="text-lg leading-[13px] font-bold text-blue group-hover:text-white transition-300">{{ $t('score') }}</h3>
			<h1 class="text-[40px] leading-[28px] uppercase font-extrabold group-hover:text-white transition-300">{{ item.result }}</h1>
		</div>
	</div>
</template>
