<template>
	<div class="pb-16 pt-8 bg-background">
		<div class="container">
			<common-section-wrapper
				:title="$t('talks_title')"
				highlighted-title
				:subtitle="$t('talks_desc')"
				buttonLink="/media/talks"
				class="mb-8"
				btn-class="!bg-[#DEE1E3] !text-gray-6 hover:!bg-blue hover:!text-white"
			/>
			<div class="overflow-hidden relative z-0 rounded-3xl">
				<transition name="fade" mode="out-in">
					<div v-if="isPending" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
						<card-media-loading v-for="i in 3" :key="i" />
					</div>

					<Swiper v-else v-bind="settings">
						<SwiperSlide v-for="(item, key) in data?.results || []" :key="item.id || key">
							<card-media :item="item" />
						</SwiperSlide>
					</Swiper>
				</transition>
			</div>
		</div>
	</div>
</template>

<script setup>
import { useQuery } from '@tanstack/vue-query'

import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import { Autoplay, Keyboard } from 'swiper/modules'

const settings = {
	modules: [Autoplay, Keyboard],
	spaceBetween: 24,
	keyboard: true,
	loop: true,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false
	},
	breakpoints: {
		576: { slidesPerView: 1 },
		768: { slidesPerView: 2 },
		1024: { slidesPerView: 3 }
	},
	centeredSlides: true,
	centeredSlidesBounds: true
}

const { $axios } = useNuxtApp()

const { isPending, data } = useQuery({
	queryKey: ['talks-section'],
	queryFn: () => {
		return $axios
			.get('ielts/Videos/', {
				params: {
					limit: 8,
					video_type: VIDEO_TYPES.TALKS
				}
			})
			.then((res) => res.data)
	}
})
</script>
