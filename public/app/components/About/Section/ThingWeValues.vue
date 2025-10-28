<template>
	<section class="py-16 relative overflow-hidden" style="background: linear-gradient(180deg, #f5f7fa 0%, #f5f7fa 100%)">
		<div class="container relative">
			<common-section-wrapper :title="$t('thing_we_values_title')" :subtitle="$t('thing_we_values_subtitle')" highlighted-title class="mb-6" />
		</div>
		<div class="max-w-screen-xxl w-full mx-auto hidden xl:flex flex-col items-center flex-wrap gap-[59px] relative">
			<div
				v-for="key in 9"
				:key
				class="h-px self-stretch hidden xl:block"
				style="background: linear-gradient(90deg, rgba(115, 115, 115, 0) 0%, rgba(115, 115, 115, 0.2) 50%, rgba(115, 115, 115, 0) 100%)"
			/>

			<div class="xl:absolute top-[59px] left-2 right-0 w-full">
				<div class="xl:flex xl:justify-between grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					<about-card-thing-we-values
						v-for="(item, i) in items"
						:key="i"
						:number="item.number"
						:title="item.title"
						:text="item.text"
						:color="item.color"
						:bgColor="item.bgColor"
						:boxShadow="item.boxShadow"
						:translateY="item.translateY"
						:rotate="item.rotate"
						:icon="item.icon"
					/>
				</div>
			</div>
		</div>
		<div class="block xl:hidden container">
			<Swiper v-bind="settings" class="!overflow-visible">
				<SwiperSlide v-for="(item, key) in items" :key>
					<about-card-thing-we-values
						:key="i"
						:number="item.number"
						:title="item.title"
						:text="item.text"
						:color="item.color"
						:bgColor="item.bgColor"
						:translate-y="item.translateY"
						:boxShadow="item.boxShadow"
						:icon="item.icon"
						class="!max-w-full !w-full"
					/>
				</SwiperSlide>
			</Swiper>
		</div>
	</section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import { Navigation } from 'swiper/modules'
const settings = {
	modules: [Navigation],
	spaceBetween: 24,
	breakpoints: {
		300: { slidesPerView: 1.1 },
		768: { slidesPerView: 2.2 }
	}
}
const items = [
	{
		number: '01',
		title: 'Actually real effort',
		text: 'Master complex problems and improve grades with clear, structured guidance.',
		color: '#FE8001',
		bgColor: '#FFF2EA',
		rotate: '-5.252deg',
		translateY: '0px',
		boxShadow:
			'-123px 230px 73px 0 rgba(117, 53, 0, 0.00), -79px 147px 67px 0 rgba(117, 53, 0, 0.01), -44px 83px 56px 0 rgba(117, 53, 0, 0.04), -20px 37px 42px 0 rgba(117, 53, 0, 0.07), -5px 9px 23px 0 rgba(117, 53, 0, 0.08)',
		icon: '/images/about/icon1.png'
	},
	{
		number: '02',
		title: 'Persistent hard work',
		text: 'Master complex problems and improve grades with clear, structured guidance.',
		color: '#B600EE',
		bgColor: '#F5E5FA',
		rotate: '7.649deg',
		translateY: '40px',
		boxShadow:
			'-151px 280px 89px 0 rgba(71, 7, 95, 0.00), -97px 179px 81px 0 rgba(71, 7, 95, 0.01), -54px 101px 69px 0 rgba(71, 7, 95, 0.05), -24px 45px 51px 0 rgba(71, 7, 95, 0.09), -6px 11px 28px 0 rgba(71, 7, 95, 0.10)',
		icon: '/images/about/icon2.png'
	},
	{
		number: '03',
		title: 'Sincere thoughts and actions',
		text: 'Master complex problems and improve grades with clear, structured guidance.',
		color: '#00A486',
		bgColor: '#E1F9F5',
		rotate: '-11deg',
		translateY: '-140px',
		boxShadow:
			'-113px 241px 75px 0 rgba(0, 51, 43, 0.00), -72px 154px 68px 0 rgba(0, 51, 43, 0.01), -41px 87px 57px 0 rgba(0, 51, 43, 0.05), -18px 39px 43px 0 rgba(0, 51, 43, 0.09), -5px 10px 23px 0 rgba(0, 51, 43, 0.10)',
		icon: '/images/about/icon3.png'
	},
	{
		number: '04',
		title: 'Unbeatable optimism',
		text: 'Master complex problems and improve grades with clear, structured guidance.',
		color: '#FE014D',
		bgColor: '#FCE4EB',
		rotate: '-3deg',
		translateY: '-10px',
		boxShadow:
			'-127px 292px 89px 0 rgba(133, 0, 40, 0.00), -81px 187px 82px 0 rgba(133, 0, 40, 0.01), -46px 105px 69px 0 rgba(133, 0, 40, 0.05), -20px 47px 51px 0 rgba(133, 0, 40, 0.09), -5px 12px 28px 0 rgba(133, 0, 40, 0.10)',
		icon: '/images/about/icon4.png'
	}
]
</script>

<style scoped></style>
