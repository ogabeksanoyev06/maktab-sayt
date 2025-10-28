<script setup lang="ts">
import dayjs from 'dayjs'
import Highlighter from 'vue-highlight-words'

interface Item {
	id: number
	name: string
	overall: string
	date: string
	file: string
}

interface Props {
	item?: Item
	search?: string
}

const props = withDefaults(defineProps<Props>(), {
	item: () => ({
		id: 0,
		name: 'Usmonov Otabek',
		overall: '8.5',
		date: new Date().toISOString(),
		file: '/images/mockup-sat.png'
	}),
	search: ''
})
</script>

<template>
	<div
		class="relative overflow-hidden flex flex-col justify-between z-1 shrink-0 w-full h-[420px] rounded-[28px] p-6 border-2 border-white bg-white shadow-card group hover:shadow-card-hover transition-300 bg-no-repeat bg-[length:424px_389px] bg-[bottom_-44px_left_-4px]"
		:style="{ backgroundImage: `linear-gradient(179.87deg, rgba(255, 255, 255, 0) 52.73%, #ffffff 82.4%), url(${item.file})` }"
	>
		<div class="flex flex-col gap-2">
			<Highlighter
				class="text-2xl leading-130 uppercase font-bold group-hover:text-red-500 transition-300 whitespace-pre-line"
				highlight-class-name="bg-[#FFCD55] rounded-lg"
				:search-words="[search || '']"
				:text-to-highlight="item.name.replace(' ', '\n')"
			/>
			<span class="text-base leading-140 text-muted-foreground">{{ dayjs(item.date).format('DD MMMM YYYY') }}</span>
		</div>
		<div class="flex flex-col items-center backdrop-blur-[4px] text-center gap-4 px-8 py-5 rounded max-w-[131px] w-full group-hover:bg-primary transition-300">
			<h3 class="text-lg leading-[13px] font-bold text-primary group-hover:text-white transition-300">Natija</h3>
			<h1 class="text-[40px] leading-[28px] uppercase font-extrabold group-hover:text-white transition-300">{{ item.overall }}</h1>
		</div>
	</div>
</template>
