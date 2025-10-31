<template>
	<section class="bg-white py-8 md:py-16 overflow-hidden">
		<h2 class="text-xl md:text-3xl font-medium mb-6 container">{{ title }}</h2>
		<div class="relative">
			<div class="container">
				<Swiper v-bind="settings" class="!overflow-visible">
					<SwiperSlide v-for="key in 6" :key class="pt-4 pb-8 	!h-full cursor-pointer group">
						<slot />
					</SwiperSlide>
				</Swiper>
			</div>
			<div class="w-full max-w-80 min-h-60 h-full bg-gradient-to-r from-white/70 to-transparent absolute left-0 top-0 hidden md:block z-10"></div>
			<div class="w-full max-w-80 min-h-60 h-full bg-gradient-to-r from-transparent to-white/70 absolute right-0 top-0 hidden md:block z-10"></div>
			<div class="container bg-transparent absolute-center z-50 h-10 w-full">
				<div class="slider-button absolute left-4 md:left-2">
					<button
						class="slider-button-prev hover:text-white size-10 rounded-full bg-white border border-gray-200 hover:bg-primary transition-300 cursor-pointer hover:border-primary grid place-items-center"
					>
						<Icon name="lucide:chevron-left" />
					</button>
				</div>
				<div class="slider-button absolute right-4 md:right-2">
					<button
						class="slider-button-next size-10 hover:text-white rounded-full bg-white border border-gray-200 hover:bg-primary transition-300 cursor-pointer hover:border-primary grid place-items-center"
					>
						<Icon name="lucide:chevron-right" />
					</button>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import 'swiper/css'

defineProps<{
	title: string
	items: object[]
}>()

const settings = {
	spaceBetween: 10,
	slidesPerView: 4,
	// centeredSlides: true,
	navigation: {
		nextEl: '.slider-button-next',
		prevEl: '.slider-button-prev'
	},
	modules: [Navigation],
	breakpoints: {
		0: {
			slidesPerView: 1.2,
			spaceBetween: 8
		},
		640: {
			slidesPerView: 2,
			spaceBetween: 10
		},
		1024: {
			slidesPerView: 3,
			spaceBetween: 12
		},
		1280: {
			slidesPerView: 4,
			spaceBetween: 16
		}
	}
}
</script>

<style scoped></style>
