<template>
	<div class="w-full max-w-md mx-auto my-8">
		<div v-for="(item, index) in accordionItems" :key="index" class="border border-gray-200 rounded-lg mb-2 overflow-hidden">
			<!-- Header -->
			<button @click="toggleAccordion(index)" class="w-full flex justify-between items-center p-4 bg-gray-100 hover:bg-gray-200 transition-all duration-300">
				<span class="font-semibold text-left">{{ item.title }}</span>
				<svg
					:class="{ 'rotate-180': activeIndex === index }"
					class="w-5 h-5 transition-transform duration-300 shrink-0"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
				</svg>
			</button>

			<!-- Smooth animated content -->
			<transition @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave" @leave="leave">
				<div v-show="activeIndex === index" class="bg-white overflow-hidden">
					<div class="p-4 leading-relaxed text-gray-700">
						<p>{{ item.content }}</p>
					</div>
				</div>
			</transition>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue'

const accordionItems = ref([
	{
		title: 'Davlat gerbi',
		content: 'O‘zbekiston Respublikasining davlat gerbi 1992-yil 2-iyulda qabul qilingan. Gerbda quyosh, bug‘doy boshoqlari, paxta, Humo qushi va daryo tasvirlari joy olgan.'
	},
	{
		title: 'Davlat bayrog‘i',
		content: 'Davlat bayrog‘i 1991-yil 18-noyabrda qabul qilingan. Bayroq moviy, oq va yashil ranglardan iborat bo‘lib, ularning orasida qizil chiziqlar mavjud.'
	},
	{
		title: 'Davlat madhiyasi',
		content: 'Davlat madhiyasi 1992-yil 10-dekabrda qabul qilingan. Matni Abdulla Oripov tomonidan yozilgan, musiqasi Mutal Burhonov tomonidan bastalangan.'
	}
])

const activeIndex = ref(null)

const toggleAccordion = (index) => {
	activeIndex.value = activeIndex.value === index ? null : index
}

// Smooth height animation
const beforeEnter = (el) => {
	el.style.height = '0'
	el.style.opacity = '0'
}
const enter = (el) => {
	el.style.transition = 'height 0.4s ease, opacity 0.3s ease'
	el.style.height = el.scrollHeight + 'px'
	el.style.opacity = '1'
}
const beforeLeave = (el) => {
	el.style.height = el.scrollHeight + 'px'
	el.style.opacity = '1'
}
const leave = (el) => {
	el.style.transition = 'height 0.4s ease, opacity 0.3s ease'
	el.style.height = '0'
	el.style.opacity = '0'
}
</script>
