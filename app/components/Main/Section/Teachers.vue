<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import { Navigation } from 'swiper/modules'

const settings = {
	modules: [Navigation],
	spaceBetween: 24,
	navigation: {
		nextEl: '.teacher-next',
		prevEl: '.teacher-prev'
	},
	breakpoints: {
		375: { slidesPerView: 1 },
		768: { slidesPerView: 2.2 },
		1024: { slidesPerView: 1.7 }
	}
}
</script>

<template>
	<section class="md:px-9">
		<div class="bg-black md:rounded-2xl p-6 md:p-[70px] overflow-hidden">
			<div class="relative container">
				<img src="/images/teachers-pattern.svg" alt="" class="absolute -top-12 right-[120px] w-[629px] h-[288px] z-0" />
				<common-section-wrapper
					:title="$t('teachers_section_title')"
					:subtitle="$t('teachers_section_subtitle')"
					title-class="!text-white"
					subtitle-class="!text-white"
					content-class="sm:w-1/2"
					highlighted-title
					class="relative z-10 mb-4 md:mb-9"
					:actions="false"
				/>
				<div class="relative z-0 my-6 md:my-12">
					<Swiper v-bind="settings" class="!overflow-visible">
						<SwiperSlide v-for="(item, key) in 4 || []" :key="item.id || key" class="!h-auto">
							<card-teachers />
						</SwiperSlide>
					</Swiper>
				</div>
				<div class="flex items-center gap-2 justify-between">
					<nuxt-link-locale to="/teachers">
						<UIButton :text="$t('see_all')" icon="lucide-arrow-up-right" class="sm:h-14 sm:px-[30px] max-md:!px-3 md:rounded-full" />
					</nuxt-link-locale>
					<div class="flex items-center gap-1 md:gap-4">
						<button class="teacher-prev size-10 md:w-12 md:h-12 flex items-center justify-center cursor-pointer p-2.5 bg-white rounded-full shrink-0 active:scale-95 transition-300">
							<Icon name="lucide:chevron-left" class="!size-10 text-black" />
						</button>
						<button class="teacher-next size-10 md:w-12 md:h-12 flex items-center justify-center cursor-pointer p-2.5 bg-white rounded-full shrink-0 active:scale-95 transition-300">
							<Icon name="lucide:chevron-right" class="!size-10 text-black" />
						</button>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
