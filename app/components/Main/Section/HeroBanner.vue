<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/effect-fade'
import { Autoplay, EffectFade } from 'swiper/modules'

const progress = ref(0)
const activeIndex = ref(0)
const swiperRef = ref(null)

const settings = {
	modules: [Autoplay, EffectFade],
	spaceBetween: 0,
	loop: true,
	autoplay: {
		delay: 3000,
		disableOnInteraction: false
	},
	onAutoplayTimeLeft(swiper, time, progressRatio) {
		progress.value = 1 - progressRatio
		activeIndex.value = swiper.realIndex
	}
}
</script>

<template>
	<div class="bg-gray-100 h-screen">
		<section class="w-full h-screen object-cover absolute top-0 left-0 z-0">
			<Swiper v-bind="settings" ref="swiperRef" class="!absolute inset-0 z-0 !w-full">
				<SwiperSlide v-for="n in 5">
					<img class="w-full h-full object-cover pointer-events-none" src="https://tmci.uz/files/common/slideritem/tmci_home_page-2025-06-18_100502.webp" />
				</SwiperSlide>
			</Swiper>
		</section>
		<section class="relative w-full h-full flex items-end overflow-hidden">
			<div class="overlay-all"></div>
			<div class="overlay-left"></div>
			<div class="overlay-glow-effect w-full md:w-1/2 h-screen object-cover absolute top-1/2 md:top-0 left-0 z-3"></div>
			<img alt="Images of overlay" class="hidden lg:inline-block overlay-full w-1/2 h-screen object-cover absolute top-0 right-0 z-2" src="/images/home/bg-logo.webp" />
			<div class="container relative z-20 bottom-[60px] lg:bottom-[100px]">
				<h1 class="text-2xl lg:text-[48px] leading-120 font-extrabold text-white max-w-[600px] mb-3">3-Maktab — Yangi Avlod Yetakchilarini Tarbiyalaydi</h1>
				<p class="text-base opacity-80 text-white max-w-[600px]">
					Biz o‘quvchilarga zamonaviy bilim, ma’naviy qadriyatlar va mustaqil fikrlash ko‘nikmalarini beramiz. Har bir bola o‘z iste’dodini namoyon qilib, kelajak yetakchisiga
					aylanadi.
				</p>
			</div>

			<div class="absolute bottom-[20px] left-1/2 -translate-x-1/2 flex gap-2 z-20">
				<div v-for="n in 5" :key="n" class="relative h-1 w-12 rounded-full bg-white overflow-hidden">
					<div
						class="absolute top-0 left-0 h-full bg-[#1C23294D] transition-[width] duration-[100ms] ease-linear"
						:style="{
							width: activeIndex === n - 1 ? `${progress * 100}%` : activeIndex > n - 1 ? '100%' : '0%'
						}"
					></div>
				</div>
			</div>
		</section>
	</div>
</template>

<style scoped>
.overlay-all {
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	background: linear-gradient(214deg, #171719 18.43%, #171719 18.44%, #17171985 30.05%, #1717197a 46.14%, #171719cc 62.4%, #171719 88.87%);
}
.overlay-left {
	height: 100%;
	width: 50%;
	left: 0;
	position: absolute;
	top: 0;
	background: linear-gradient(90deg, #171719, #171719a3 0.01%, #17171900);
}

.overlay-glow-effect {
	background: #181e97;
	border-radius: 560px;
	filter: blur(600px);
	left: -1000px;
	opacity: 100%;
	top: 533px;
}
</style>
