<script setup lang="ts">
import Highlighter from 'vue-highlight-words'

import dayjs from 'dayjs'

interface Props {
	item: {
		id: number
		name: string
		score: number
		math: number
		english: number
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
		<div class="flex-center gap-2.5 md:max-w-[230px] backdrop-blur-[4px] text-center py-2 px-2.5 border rounded-2xl border-gray-1 w-full group-hover:bg-blue transition-300">
			<div class="flex flex-col items-center text-center gap-1 px-0.5 py-1.5 flex-1">
				<h4 class="text-sm leading-130 font-medium text-blue group-hover:text-white transition-300">{{ $t('math') }}</h4>
				<h3 class="text-lg leading-130 font-bold uppercase group-hover:text-white transition-300">{{ item.math }}</h3>
			</div>
			<div class="h-[37px] w-px bg-[#1C232933] group-hover:bg-white transition-300"></div>
			<div class="flex flex-col items-center text-center gap-1 px-0.5 py-1.5 flex-1">
				<h4 class="text-sm leading-130 font-medium text-blue group-hover:text-white transition-300">{{ $t('english') }}</h4>
				<h3 class="text-lg leading-130 font-bold uppercase group-hover:text-white transition-300">{{ item.english }}</h3>
			</div>
		</div>
	</div>
</template>
