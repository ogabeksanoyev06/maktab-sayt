<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import { Navigation, Scrollbar } from 'swiper/modules'
import { ref } from 'vue'

const swiperInstance = ref(null)
const activeIndex = ref(0)

const settings = {
	modules: [Navigation, Scrollbar],
	spaceBetween: 24,
	scrollbar: {
		el: '.swiper-scrollbar',
		hide: false,
		draggable: true,
		dragSize: 88,
		horizontalClass: 'swiper-scrollbar-horizontal'
	},
	navigation: {
		nextEl: '.s-next',
		prevEl: '.s-prev'
	},
	centeredSlides: true,

	onSwiper: (swiper) => {
		swiperInstance.value = swiper
	},
	onSlideChange: (swiper) => {
		activeIndex.value = swiper.activeIndex
	},
	breakpoints: {
		0: { slidesPerView: 2.1, spaceBetween: 10 },
		1024: { slidesPerView: 1 }
	}
}

const milestones = [
	{ year: 1981, text: 'Maktab tashkil topdi va dastlabki 4 ta sinf faoliyat boshladi.' },
	{ year: 1994, text: 'Yangi o‘quv binosi foydalanishga topshirildi, 600 o‘quvchi uchun joy yaratildi.' },
	{ year: 2006, text: 'O‘quvchilar viloyat fan olimpiadasida faxrli o‘rinlarni egallashdi.' },
	{ year: 2010, text: 'Maktabda kompyuter xonasi va multimedia doskalar joriy qilindi.' },
	{ year: 2014, text: 'Sport majmuasi va kutubxona to‘liq ta’mirdan chiqdi.' },
	{ year: 2019, text: "Maktab 'Eng namunali ta’lim maskani' tanlovida g‘olib bo‘ldi." },
	{ year: 2024, text: 'Raqamli ta’lim platformasi ishga tushirildi va onlayn darslar yo‘lga qo‘yildi.' }
]

const goToSlide = (index) => {
	swiperInstance.value?.slideTo(index)
}
</script>

<template>
	<div class="relative milestone-slider">
		<div class="relative overflow-hidden md:pb-20">
			<Swiper class="max-w-[482px] mx-auto relative z-0 !overflow-visible" v-bind="settings">
				<SwiperSlide
					v-for="(item, i) in milestones"
					:key="i"
					class="max-w-[300px] md:max-w-[max-content] bg-white border border-gray-300 rounded-lg md:rounded-xl p-3 md:p-6 transition-300 !h-auto"
				>
					<h5 class="text-xl md:text-[28px] leading-130 font-extrabold transition-all duration-300" :class="activeIndex === i ? 'text-primary' : ''">
						{{ item.year }}
					</h5>
					<p class="mt-2 text-sm md:text-xl font-medium leading-140 text-dark">
						{{ item.text }}
					</p>
				</SwiperSlide>
			</Swiper>

			<div class="absolute max-md:hidden z-2 right-0 top-0 bg-gradient-to-r from-transparent to-white h-full w-[232px]"></div>
			<div class="absolute max-md:hidden z-2 left-0 top-0 bg-gradient-to-l from-transparent to-white h-full w-[232px]"></div>
		</div>
		<div class="swiper-scrollbar overflow-hidden hidden md:block w-full h-16 bg-black/5 rounded-full relative z-10">
			<div class="absolute left-6 right-6 top-1/2 -translate-y-1/2 flex justify-between cursor-pointer">
				<p
					v-for="(item, i) in milestones"
					:key="i"
					@click="goToSlide(i)"
					class="text-xl font-medium leading-130 transition-all duration-300"
					:class="activeIndex === i ? 'text-primary font-bold' : 'hover:text-primary'"
				>
					{{ item.year }}
				</p>
			</div>
			<div class="swiper-scrollbar-drag relative"></div>
		</div>
	</div>
</template>

<style>
@media screen and (min-width: 768px) {
	.milestone-slider .swiper-slide.swiper-slide-active {
		box-shadow:
			0 125px 80px #00000008,
			0 52.222px 33.422px #00000005,
			0 27.92px 17.869px #00000005,
			0 15.652px 10.017px #00000003,
			0 8.313px 5.32px #00000003,
			0 3.459px 2.214px #00000003;
	}
}

.milestone-slider .swiper-slide.swiper-slide-active {
	border-color: var(--color-primary) !important;
}

.swiper-scrollbar-drag::before {
	border-radius: 9999px;
	box-shadow: 0 0 40px #9718373d;
	content: url('/images/dragger.svg');
	height: 36px;
	left: 50%;
	position: absolute;
	top: 50%;
	transform: translate(-50%, -50%);
	width: 64px;
}
.milestone-slider .swiper-scrollbar .swiper-scrollbar-drag {
	background-color: transparent;
	border-radius: 99999px;
	cursor: ew-resize;
	height: 100% !important;
	position: relative;
}
</style>
