<script setup>
import { useQuery } from '@tanstack/vue-query'

import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'

const settings = {
	modules: [Autoplay],
	spaceBetween: 24,
	breakpoints: {
		576: { slidesPerView: 1 },
		768: { slidesPerView: 2 },
		1024: { slidesPerView: 2.4 }
	},
	allowTouchMove: true,
	simulateTouch: true,
	// Smoother transitions
	speed: 800,
	easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
	// One slide at a time
	slidesPerView: 'auto',
	centeredSlides: false,
	// Better touch handling
	touchRatio: 1,
	touchAngle: 45,
	threshold: 5,
	// Disable built-in mousewheel since we handle it manually
	mousewheel: false,
	// Force one slide movement
	slidesPerGroup: 1,
	// Snap to slides
	snapOnRelease: true,
	snapOnDrag: true
}
const levels = [
	{
		icon: '/svg/level/beginner.svg',
		img: '/images/level/beginner-bg.svg'
	},
	{
		icon: '/svg/level/elementary.svg',
		img: '/images/level/elementary-bg.svg'
	},
	{
		icon: '/svg/level/pre-ielts.svg',
		img: '/images/level/ielts-bg.svg'
	},
	{
		icon: '/svg/level/introduction.svg',
		img: '/images/level/introduction-bg.svg'
	},
	{
		icon: '/svg/level/graduation.svg',
		img: '/images/level/graduation-bg.svg'
	}
]
const { $axios } = useNuxtApp()

const { isPending, data } = useQuery({
	queryKey: ['section-level'],
	queryFn: () => {
		return $axios
			.get('ielts/LevelPrices/', {
				limit: 8
			})
			.then((res) => res.data)
	}
})

const levelList = computed(() => {
	if (!data.value?.results) return []

	return data.value?.results?.map((item, index) => ({
		...item,
		icon: levels[index % levels.length].icon,
		img: levels[index % levels.length].img
	}))
})

// Swiper ref for wheel control
const swiperRef = ref(null)
const sectionRef = ref(null)
const isSectionFocused = ref(false)
const isTransitioning = ref(false)
const lastWheelTime = ref(0)

// Handle mouse wheel for full viewport
const handleWheel = (e) => {
	if (!swiperRef.value || !sectionRef.value || isTransitioning.value) return
	
	// Debounce rapid wheel events
	const now = Date.now()
	if (now - lastWheelTime.value < 100) return // 100ms debounce
	lastWheelTime.value = now
	
	const rect = sectionRef.value.getBoundingClientRect()
	const windowHeight = window.innerHeight
	
	// Check if section is fully visible and centered in viewport
	const isFullyVisible = rect.top >= 0 && rect.bottom <= windowHeight
	const isCentered = rect.top <= windowHeight / 4 && rect.bottom >= (windowHeight * 3) / 4
	const shouldAnimate = isFullyVisible && isCentered
	
	if (shouldAnimate) {
		const delta = e.deltaY
		const currentSlide = swiperRef.value.activeIndex
		const totalSlides = swiperRef.value.slides.length
		
		// Check if we're at the boundaries
		const isAtStart = currentSlide === 0
		const isAtEnd = currentSlide === totalSlides - 1
		
		if (delta > 0) {
			// Scroll down - move to next slide
			if (isAtEnd) {
				// At the end, don't prevent default - let page scroll continue
				return
			} else {
				e.preventDefault()
				isSectionFocused.value = true
				document.body.style.overflow = 'hidden'
				isTransitioning.value = true
				swiperRef.value.slideNext()
			}
		} else if (delta < 0) {
			// Scroll up - move to previous slide
			if (isAtStart) {
				// At the start, don't prevent default - let page scroll continue
				return
			} else {
				e.preventDefault()
				isSectionFocused.value = true
				document.body.style.overflow = 'hidden'
				isTransitioning.value = true
				swiperRef.value.slidePrev()
			}
		}
	} else {
		isSectionFocused.value = false
		document.body.style.overflow = 'auto'
	}
}

// Handle Swiper transition end to reset pause and unblock scroll
const handleTransitionEnd = () => {
	setTimeout(() => {
		isTransitioning.value = false
		
		// Unblock scroll if section is no longer focused
		if (!isSectionFocused.value) {
			document.body.style.overflow = 'auto'
		}
	}, 500) // 500ms pause after transition completes to prevent rapid scrolling
}

// Handle Swiper events to control scroll blocking
const handleSlideChange = () => {
	// Slide changed - keep scroll blocked if section is focused
	if (isSectionFocused.value) {
		document.body.style.overflow = 'hidden'
	}
}

const handleReachBeginning = () => {
	// Reached start - unblock scroll immediately
	isSectionFocused.value = false
	document.body.style.overflow = 'auto'
}

const handleReachEnd = () => {
	// Reached end - unblock scroll immediately
	isSectionFocused.value = false
	document.body.style.overflow = 'auto'
}

onMounted(() => {
	// Add wheel event listener to the entire window
	window.addEventListener('wheel', handleWheel, { passive: false })
})

onUnmounted(() => {
	// Clean up event listeners
	window.removeEventListener('wheel', handleWheel)
	document.body.style.overflow = 'auto'
})
</script>

<template>
	<section ref="sectionRef" class="py-8 md:py-16 overflow-hidden">
		<div class="container">
			<common-section-wrapper :title="$t('levels_title')" highlighted-title :subtitle="$t('levels_description')" class="mb-9" />
			<div v-if="isPending" class="flex overflow-hidden gap-6">
				<div class="bg-white p-8 flex-shrink-0 rounded-[32px] flex flex-col items-start gap-6 sm:gap-16 overflow-hidden w-[480px] min-h-[480px]" v-for="key in 4" :key>
					<div class="size-20 rounded skeleton"></div>
					<div class="w-full flex flex-col items-start gap-5">
						<div class="w-1/2 h-4 skeleton rounded"></div>
						<div class="w-full">
							<div class="w-full h-4 skeleton rounded"></div>
							<div class="w-full h-4 skeleton rounded"></div>
							<div class="w-full h-4 skeleton rounded"></div>
						</div>
						<div class="grid grid-cols-2 gap-5 w-full">
							<div class="flex items-center gap-2 w-full">
								<div class="size-9 skeleton rounded-full flex-shrink-0"></div>
								<div class="flex flex-col w-full gap-1">
									<div class="w-full h-4 skeleton rounded"></div>
									<div class="w-full h-4 skeleton rounded"></div>
								</div>
							</div>
							<div class="flex items-center gap-2 w-full">
								<div class="size-9 skeleton rounded-full flex-shrink-0"></div>
								<div class="flex flex-col w-full gap-1">
									<div class="w-full h-4 skeleton rounded"></div>
									<div class="w-full h-4 skeleton rounded"></div>
								</div>
							</div>
						</div>
					</div>
					<div class="grid grid-cols-2 gap-3 w-full">
						<div class="w-full h-10 skeleton rounded"></div>
						<div class="w-full h-10 skeleton rounded"></div>
					</div>
				</div>
			</div>

			<div v-else class="relative z-0 rounded-3xl">
				<Swiper 
					v-bind="settings" 
					class="!overflow-visible"
					@swiper="(swiper) => swiperRef = swiper"
					@transitionEnd="handleTransitionEnd"
					@slideChange="handleSlideChange"
					@reachBeginning="handleReachBeginning"
					@reachEnd="handleReachEnd"
				>
					<SwiperSlide v-for="(item, index) in [...levelList, ...levelList]" :key="index">
						<ServicesCardLevel :item="item" />
					</SwiperSlide>
					<SwiperSlide>
						<div
							class="flex flex-col items-center w-full min-h-[480px] rounded-[32px] px-10 pt-10 pb-20 relative overflow-hidden"
							style="background: radial-gradient(141.58% 141.42% at 0% 0%, #005efe 0%, #003898 100%)"
						>
							<img src="/images/level-bg-image.svg" alt="" class="absolute bottom-4 w-[980px]" />

							<img src="/svg/level-everest-icon.svg" alt="" class="w-[106px] flex-shrink-0" />
							<div class="flex flex-col items-center text-center text-white mt-[50px] mb-[46px]">
								<h3 class="text-[28px] font-bold !leading-130 mb-0.5">{{ $t('level_title') }}</h3>
								<h3 class="text-[28px] font-extrabold !leading-130 mb-2.5 uppercase">{{ $t('level_highlighted') }}</h3>
								<p class="text-sm sm:text-base !leading-140">{{ $t('level_description') }}</p>
							</div>
							<UIButton :text="$t('cta_primary')" class="max-w-[260px] bg-white !text-blue w-full h-11" />
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	</section>
</template>

<style scoped>
/* Enhanced smoothness for Swiper */
:deep(.swiper) {
	transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

:deep(.swiper-slide) {
	transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

:deep(.swiper-wrapper) {
	transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

/* Smooth scroll behavior */
html {
	scroll-behavior: smooth;
}

/* Enhanced smoothness for wheel events */
.swiper-container {
	will-change: transform;
}
</style>
