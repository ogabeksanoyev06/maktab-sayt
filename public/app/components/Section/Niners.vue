<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import { Navigation } from 'swiper/modules'

import { useQuery } from '@tanstack/vue-query'

const { $axios } = useNuxtApp()

const settings = {
	modules: [Navigation],
	spaceBetween: 24,
	navigation: {
		nextEl: '.niners-next',
		prevEl: '.niners-prev'
	},
	breakpoints: {
		375: { slidesPerView: 1.2 },
		825: { slidesPerView: 2.2 },
		1024: { slidesPerView: 1.7 }
	}
}

const { isPending, data } = useQuery({
	queryKey: ['section-niners'],
	queryFn: () => {
		return $axios
			.get('ielts/Result/Niner/', {
				params: { limit: 4 }
			})
			.then((res) => res.data)
	}
})
</script>

<template>
	<div class="md:px-9 md:py-16 bg-[#F5F7FA]">
		<div class="md:border-2 border-white shadow-[0px_30px_50px_5px_#2730380F] bg-gray-6 md:rounded-[36px] py-8 md:py-16 overflow-hidden">
			<div class="container relative">
				<img src="/images/niners-pattern.svg" alt="" class="absolute -top-12 right-[120px] w-[629px] h-[288px] z-0" />
				<common-section-wrapper
					:title="$t('our_niners')"
					:subtitle="$t('our_niners_description')"
					title-class="!text-white"
					subtitle-class="!text-white"
					content-class="sm:w-1/2"
					button-link="/niners"
					class="relative z-10 mb-4 md:mb-9"
				/>

				<CardNinerLoading v-if="isPending" class="!w-3/5" />
				<Swiper v-else v-bind="settings" class="!overflow-visible">
					<SwiperSlide v-for="(item, key) in data?.results || []" :key="item.id || key" class="!h-auto">
						<CardNiner :item="item" class="sm:h-full" size="lg" />
					</SwiperSlide>
				</Swiper>
				<div class="flex justify-end gap-2 mt-4 md:mt-9">
					<button class="flex-center niners-prev h-11 w-11 bg-white/10 hover:bg-white/20 transition-300 rounded-full p-2.5">
						<span class="icon-arrow rotate-180 text-2xl text-white"></span>
					</button>
					<button class="flex-center niners-next h-11 w-11 bg-white/10 hover:bg-white/20 transition-300 rounded-full p-2.5">
						<span class="icon-arrow text-2xl text-white"></span>
					</button>
				</div>
			</div>
		</div>
	</div>
</template>
