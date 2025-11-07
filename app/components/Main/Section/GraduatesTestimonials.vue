<template>
	<section ref="sectionRef" class="py-8 md:py-16 overflow-hidden">
		<div class="container">
			<common-section-wrapper
				class="mb-4 md:mb-8 text-animate"
				:title="$t('graduates_testimonials_title')"
				:subtitle="$t('graduates_testimonials_subtitle')"
				highlighted-title
				:actions="false"
				:class="{ 'animate-in': isVisible }"
			/>
			<div class="relative z-20 slide-in-bottom" :class="{ 'animate-in': isVisible }">
				<Swiper v-bind="settings" class="md:!overflow-visible" @slideChange="onSlideChange" @swiper="onSwiper">
					<SwiperSlide
						v-for="(item, key) in 5"
						:key="key"
						:class="['lg:!max-w-screen-md !max-w-sm sm:!max-w-md md:!max-w-lg !z-1 transition-all duration-500', activeIndex === key ? 'opacity-100' : 'opacity-50']"
					>
						<main-card-graduates-testimonials :class="activeIndex === key ? 'shadow-sm' : ''" />
					</SwiperSlide>
				</Swiper>
				<div class="bg-transparent absolute-center z-5 h-10 w-full">
					<div class="slider-button slider-button-prev absolute left-2">
						<button
							class="size-10 rounded-full bg-white shadow-sm border border-gray-200 hover:bg-primary transition-300 cursor-pointer hover:border-primary grid place-items-center group"
						>
							<Icon name="lucide:chevron-left" class="!size-7 group-hover:text-white" />
						</button>
					</div>
					<div class="slider-button slider-button-next absolute right-2">
						<button
							class="size-10 rounded-full bg-white shadow-sm border border-gray-200 hover:bg-primary transition-300 cursor-pointer hover:border-primary grid place-items-center group"
						>
							<Icon name="lucide:chevron-right" class="!size-7 group-hover:text-white" />
						</button>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/autoplay'
import { Navigation, Autoplay } from 'swiper/modules'

const { elementRef: sectionRef, isVisible } = useScrollAnimation({
	threshold: 0.15,
	rootMargin: '0px 0px -80px 0px',
	triggerOnce: true
})

const activeIndex = ref(0)
const swiperRef = ref(null)

const settings = {
	modules: [Navigation, Autoplay],
	speed: 800,
	autoplay: {
		delay: 3500,
		disableOnInteraction: false
	},
	spaceBetween: 12,
	loop: true,
	navigation: {
		nextEl: '.slider-button-next',
		prevEl: '.slider-button-prev'
	},
	breakpoints: {
		300: { slidesPerView: 1 },
		768: { slidesPerView: 1.6 }
	}
}

const onSwiper = (swiper) => {
	swiperRef.value = swiper
	activeIndex.value = swiper.realIndex
}

const onSlideChange = (swiper) => {
	activeIndex.value = swiper.realIndex
}
</script>

<style scoped></style>
