<script setup lang="ts">
interface Props {
	img: string
	title: string
	subtitle: string
	route: string
	imgGray: string
	link: string
}
defineProps<Props>()
</script>

<template>
	<NuxtLinkLocale
		:to="link"
		class="bg-white border-2 border-white rounded-2xl md:rounded-3xl flex flex-col items-start gap-5 md:gap-9 p-5 md:p-7 shadow-card group transition-300 md:min-h-[360px] h-full hover:shadow-[0_30px_50px_10px_rgba(39,48,56,0.11)] hover:-translate-y-2.5"
	>
		<div class="relative">
			<img :src="img" :alt="title" class="size-10 md:size-16 aspect-square object-contain transition-300 md:opacity-0 md:group-hover:opacity-100" />
			<img :src="imgGray" :alt="title" class="size-10 md:size-16 aspect-square object-contain transition-300 absolute inset-0 opacity-0 md:opacity-100 md:group-hover:opacity-0" />
		</div>
		<div class="flex flex-col items-start gap-2">
			<h3 class="text-2xl md:text-[28px] leading-130 font-bold">{{ title }}</h3>
			<p class="text-sm md:text-base leading-140 text-gray-5">{{ subtitle }}</p>
		</div>
		<div class="flex items-center gap-1 group overflow-hidden mt-auto">
			<span
				class="text-base font-bold text-blue text-nowrap md:w-0 md:opacity-0 md:-translate-x-full transition-300 md:group-hover:w-full md:group-hover:opacity-100 md:group-hover:translate-x-0"
			>
				{{ $t('learn_more') }}
			</span>
			<span class="icon-arrow md:text-[#93979B] text-blue text-2xl left-6 transition-colors duration-300 md:group-hover:text-blue"></span>
		</div>
	</NuxtLinkLocale>
</template>
