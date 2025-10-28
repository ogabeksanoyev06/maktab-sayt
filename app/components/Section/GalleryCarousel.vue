<template>
	<div class="relative overflow-hidden">
		<div class="absolute z-2 h-full w-full linear-gradient inset-0 pointer-events-none"></div>
		<div class="container relative z-1">
			<Swiper v-bind="settings" class="!overflow-visible z-0">
				<SwiperSlide v-for="(item, i) in [...items, ...items]" :key="i" class="cursor-pointer relative aspect-[287/332]">
					<div class="w-full h-full overflow-hidden relative">
						<UIImage :src="item.url" class="w-full h-full object-cover overflow-hidden" v-if="item.media_type === 'image'" />
						<video v-else :src="item.url" class="w-full h-full object-cover" autoplay loop playsinline />
						<div class="image-overlay absolute top-0 w-full h-full z-1"></div>
					</div>
					<div></div>
				</SwiperSlide>
			</Swiper>
			<button
				class="slider-gallery-button-prev max-xl:hidden w-8 h-8 lg:w-12 lg:h-12 group rounded-full flex items-center justify-center shrink-0 bg-white border border-gray-200 absolute -translate-y-1/2 top-1/2 left-0 -translate-x-1/2 z-1 cursor-pointer"
			>
				<Icon name="lucide:move-left" />
			</button>
			<button
				class="slider-gallery-button-next max-xl:hidden w-8 h-8 lg:w-12 lg:h-12 group rounded-full flex items-center justify-center shrink-0 bg-white border border-gray-200 absolute -translate-y-1/2 top-1/2 right-0 translate-x-1/2 z-1 cursor-pointer"
			>
				<Icon name="lucide:move-right" />
			</button>
		</div>
	</div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import 'swiper/css'

interface Item {
	media_type: string
	url: string
}

const props = defineProps<{
	items: Item[]
}>()

const settings = {
	spaceBetween: 12,
	slidesPerView: 5,
	loop: true,
	centeredSlides: true,
	navigation: {
		nextEl: '.slider-gallery-button-next',
		prevEl: '.slider-gallery-button-prev'
	},
	modules: [Navigation],
	breakpoints: {
		0: {
			slidesPerView: 1.1,
			spaceBetween: 8,
			centeredSlides: false
		},
		640: {
			slidesPerView: 3,
			spaceBetween: 10
		},
		1024: {
			slidesPerView: 4,
			spaceBetween: 12
		},
		1280: {
			slidesPerView: 4.2,
			spaceBetween: 12
		}
	}
}
</script>

<style scoped>
.linear-gradient {
	background: linear-gradient(90deg, hsla(0, 0%, 100%, 0.28), transparent 19.5%, transparent 50%, transparent 81.5%, hsla(0, 0%, 100%, 0.28));
}
.image-overlay {
	background: linear-gradient(180deg, #31313252, #313132eb);
}
</style>
