<script setup>
import { useInfiniteQuery } from '@tanstack/vue-query'

import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import { Navigation } from 'swiper/modules'

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
	}
}

const { $axios } = useNuxtApp()
const { isPending, data } = useInfiniteQuery({
	queryKey: ['results-carousel'],
	queryFn: ({ pageParam = 0 }) => {
		return $axios
			.get('ielts/Result/GoGlobal/', {
				params: {
					limit: 8,
					offset: pageParam
				}
			})
			.then((res) => res.data)
	},
	getNextPageParam: (lastPage, allPages) => getNextPageOffset(lastPage, allPages, 8),
	initialPageParam: 0
})
</script>

<template>
	<section class="relative py-8 md:py-16 overflow-hidden">
		<div class="container">
			<common-section-wrapper class="mb-6 md:mb-9" direction="row" :title="$t('results')">
				<div v-if="!isPending" class="flex-center gap-2">
					<button class="flex-center prev-results h-11 w-11 bg-gray-1 rounded-full p-2.5">
						<span class="icon-arrow rotate-180 text-2xl"></span>
					</button>
					<button class="flex-center next-results h-11 w-11 bg-gray-1 rounded-full p-2.5">
						<span class="icon-arrow text-2xl"></span>
					</button>
				</div>
			</common-section-wrapper>
			<transition name="fade" mode="out-in">
				<div v-if="isPending" class="flex gap-6 overflow-hidden">
					<CardResultLoading v-for="key in 4" :key="key" />
				</div>
				<div v-else class="relative z-0 rounded-3xl">
					<Swiper v-bind="settings" @slideChange="handleSlideChange" class="!overflow-visible">
						<template v-for="page in data?.pages" :key="page">
							<SwiperSlide v-for="(item, key) in page.results || page.data || page" :key="item.id || key">
								<CardResult :item="item" />
							</SwiperSlide>
						</template>
					</Swiper>
				</div>
			</transition>
		</div>
	</section>
</template>
