<template>
	<section class="bg-white py-8 md:py-16 overflow-hidden">
		<div class="container">
			<h2 class="title-style text-center max-w-screen-md mx-auto mb-10">Foydali havolalar</h2>
			<div class="relative z-0">
				<Swiper v-bind="settings" ref="swiperRef" class="!overflow-visible">
					<SwiperSlide v-for="item in items" class="!h-auto">
						<a :href="item.url" target="_blank" rel="noopener noreferrer" class="flex flex-col gap-5 items-center text-center !shadow-card p-4 rounded">
							<img :src="item.icon" :alt="item.title" class="max-w-[80%]" />
							<p class="font-medium !leading-130">{{ item.title }}</p>
						</a>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	</section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'

const settings = {
	modules: [Autoplay],
	spaceBetween: 12,
	loop: true,
	autoplay: {
		delay: 3000,
		disableOnInteraction: false
	},
	breakpoints: {
		0: {
			slidesPerView: 1.1,
			spaceBetween: 8,
			centeredSlides: true
		},
		640: {
			slidesPerView: 2.2,
			spaceBetween: 10
		},
		768: {
			slidesPerView: 3,
			spaceBetween: 12
		},
		1024: {
			slidesPerView: 4,
			spaceBetween: 16
		},
		1280: {
			slidesPerView: 5,
			spaceBetween: 20
		}
	}
}

const items = [
	{
		id: 1178,
		category_id: 4,
		title: 'O`zbekiston Respublikasi hukumat portali',
		target: '_blank',
		url: 'https://www.gov.uz/',
		icon: 'https://api-portal.gov.uz/uploads/165/2025/05/05/8409869e-4fb0-7ed2-0106-39cac6b30c50_widgets_.jpg'
	},
	{
		id: 1179,
		category_id: 4,
		title: 'Yagona interaktiv davlat xizmatlari portali',
		target: '_blank',
		url: 'https://my.gov.uz/uz',
		icon: 'https://api-portal.gov.uz/uploads/165/2025/05/05/4fef8734-5d8c-17c8-5339-3022358a580a_widgets_.png'
	},
	{
		id: 1180,
		category_id: 4,
		title: "O'zbekiston Respublikasi ochiq ma'lumotlar portali",
		target: '_blank',
		url: 'https://data.gov.uz/uz',
		icon: 'https://api-portal.gov.uz/uploads/165/2025/05/05/e68c4960-1411-3db3-a900-03ee21e1e874_widgets_.png'
	},
	{
		id: 1181,
		category_id: 4,
		title: 'Identifikatsiyalashning Yagona Tizimi',
		target: '_blank',
		url: 'https://id.egov.uz/oz',
		icon: 'https://api-portal.gov.uz/uploads/165/2025/05/05/a1554c95-e59d-4596-e605-7cddc52e2aaf_widgets_.png'
	}
]
</script>
