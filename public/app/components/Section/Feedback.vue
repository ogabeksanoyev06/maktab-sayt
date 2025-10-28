<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'

import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import { Navigation } from 'swiper/modules'

interface Props {
	videoType: string
	showFilters?: boolean
}
const props = withDefaults(defineProps<Props>(), {
	videoType: 'feedback',
	showFilters: false
})

const settings = {
	modules: [Navigation],
	spaceBetween: 24,
	navigation: {
		nextEl: '.feedback-next',
		prevEl: '.feedback-prev'
	},
	breakpoints: {
		300: { slidesPerView: 1.2 },
		768: { slidesPerView: 2.2 },
		1024: { slidesPerView: 3.3 },
		1280: { slidesPerView: 4 }
	}
}
const filters = ['All', 'Parents', 'IELTS', 'Multi-level', 'Teachers', 'Children']
const activeFilter = ref(0)

const { $axios } = useNuxtApp()

const { isPending, data, refetch } = useQuery({
	queryKey: ['feedback-section'],
	queryFn: () => {
		return $axios
			.get('ielts/Videos/', {
				params: {
					limit: 12,
					video_type: props.videoType
				}
			})
			.then((res) => res.data)
	}
})

const handleFilter = (filter: number) => {
	activeFilter.value = filter
	refetch()
}
</script>

<template>
	<div class="overflow-hidden">
		<section class="container relative py-8 md:py-16">
			<common-section-wrapper class="mb-4 md:mb-8" direction="row" highlighted-title :title="$t('feedback_title')" :subtitle="$t('feedback_subtitle')">
				<div class="flex-center gap-2 max-sm:justify-end">
					<button class="flex-center feedback-prev md:h-11 md:w-11 h-9 w-9 bg-gray-1 rounded-full p-2.5 cursor-pointer">
						<span class="icon-arrow rotate-180 text-xl md:text-2xl"></span>
					</button>
					<button class="flex-center feedback-next md:h-11 md:w-11 h-9 w-9 bg-gray-1 rounded-full p-2.5 cursor-pointer">
						<span class="icon-arrow text-xl md:text-2xl"></span>
					</button>
				</div>
			</common-section-wrapper>
			<div v-if="props.showFilters" class="mb-4 md:mb-8 overflow-x-auto" style="scrollbar-width: none">
				<div class="flex items-center gap-3 w-max px-1.5">
					<button
						v-for="(filter, i) in filters"
						:key="i"
						@click="handleFilter(i)"
						class="px-4 sm:py-3 py-1.5 rounded-full border border-gray-2 transition-300 flex gap-1 items-center flex-shrink-0 text-sm sm:text-base text-gray-5 font-medium !leading-[11px] hover:bg-[#0154F814] hover:text-gray-6 hover:border-blue"
						:class="[activeFilter === i ? '!bg-gray-6 !text-white !border-gray-6' : '']"
					>
						<span>#</span>
						{{ filter }}
					</button>
				</div>
			</div>

			<div class="relative z-0">
				<transition name="fade" mode="out-in">
					<div v-if="isPending" class="flex gap-6 overflow-hidden">
						<div v-for="key in 4" :key="key" class="p-2 rounded-[20px] bg-white aspect-square md:aspect-[9/16] w-[278px] shrink-0">
							<div class="relative rounded-[20px] overflow-hidden w-full h-full skeleton"></div>
						</div>
					</div>
					<Swiper v-else v-bind="settings" class="!overflow-visible">
						<SwiperSlide v-for="(item, index) in data?.results || []" :key="index">
							<CardFeedback :item="item" />
						</SwiperSlide>
					</Swiper>
				</transition>
			</div>
		</section>
	</div>
</template>
