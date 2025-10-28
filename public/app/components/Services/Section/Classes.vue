<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import { Navigation } from 'swiper/modules'

const { t } = useI18n()

const settings = {
	modules: [Navigation],
	spaceBetween: 24,
	navigation: {
		nextEl: '.next-classes',
		prevEl: '.prev-classes'
	},
	breakpoints: {
		576: { slidesPerView: 1 },
		768: { slidesPerView: 2 },
		1024: { slidesPerView: 3 }
	},
}

const items = computed(() => [
	{
		img: '/images/services/icons/ielts.svg',
		imgGray: '/images/services/icons/ielts-gray.svg',
		title: t('classes.ielts'),
		subtitle: t('classes.ielts_description'),
		link: '/services/ielts'
	},
	{
		img: '/images/services/icons/multi-level.svg',
		imgGray: '/images/services/icons/multi-level-gray.svg',
		title: t('classes.multi_level'),
		subtitle: t('classes.multi_level_description'),
		link: '/services/multi-level'
	},
	{
		img: '/images/services/icons/sat.svg',
		imgGray: '/images/services/icons/sat-gray.svg',
		title: t('classes.sat'),
		subtitle: t('classes.sat_description'),
		link: '/services/sat'
	},
	{
		img: '/images/services/icons/english.svg',
		imgGray: '/images/services/icons/english-gray.svg',
		title: t('classes.general_english'),
		subtitle: t('classes.general_english_description'),
		link: '/'
	},
	{
		img: '/images/services/icons/russian.svg',
		imgGray: '/images/services/icons/russian-gray.svg',
		title: t('classes.russian_language'),
		subtitle: t('classes.russian_language_description'),
		link: '/'
	},
	{
		img: '/images/services/icons/math.svg',
		imgGray: '/images/services/icons/math-gray.svg',
		title: t('classes.mathematics'),
		subtitle: t('classes.mathematics_description'),
		link: '/services/math'
	}
])
</script>

<template>
	<section class="relative md:py-16 py-8 overflow-hidden">
		<div class="container">
			<common-section-wrapper class="mb-6 md:mb-9" direction="row" :title="$t('classes_title')">
				<div class="flex-center gap-2">
					<button class="flex-center prev-classes h-11 w-11 bg-gray-1 rounded-full p-2.5">
						<span class="icon-arrow rotate-180 text-2xl"></span>
					</button>
					<button class="flex-center next-classes h-11 w-11 bg-gray-1 rounded-full p-2.5">
						<span class="icon-arrow text-2xl"></span>
					</button>
				</div>
			</common-section-wrapper>
			<Swiper v-bind="settings" class="!overflow-visible">
				<SwiperSlide v-for="(item, index) in items" :key="index">
					<ServicesCardClass v-bind="item" />
				</SwiperSlide>
			</Swiper>
		</div>
	</section>
</template>
