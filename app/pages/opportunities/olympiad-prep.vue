<template>
	<div>
		<UIBreadcrumb :routes="breadcrumbItems" />
		<div class="container pt-5">
			<div class="mb-6 md:mb-10">
				<Swiper v-bind="settings" :thumbs="{ swiper: thumbsSwiper }" @activeIndexChange="sliderChange" class="main-swiper rounded-xs md:rounded">
					<SwiperSlide v-for="(item, index) in images" :key="index">
						<div class="aspect-video w-full overflow-hidden relative rounded-xs md:rounded">
							<img :src="item.src" :alt="item.title" class="absolute inset-0 object-cover w-full h-full transition-transform duration-500 hover:scale-105" />
							<div class="absolute bottom-0 left-0 w-full flex items-end bg-gradient-to-t from-black/80 to-transparent text-white p-4 text-sm sm:text-2xl font-bold">
								{{ item.title }}
							</div>
						</div>
					</SwiperSlide>
				</Swiper>
				<Swiper v-bind="thumbsSettings" class="thumbs-swiper mt-4 md:mt-8 !overflow-visible" @swiper="setThumbsSwiper">
					<SwiperSlide v-for="(item, index) in images" :key="index" class="cursor-pointer">
						<div
							class="aspect-video md:h-[120px] w-full overflow-hidden relative rounded-xs md:rounded transition-all duration-300"
							:class="{
								'opacity-100': activeIndex === index,
								'opacity-50 hover:opacity-100': activeIndex !== index
							}"
						>
							<img :src="item.src" :alt="item.title" class="object-cover w-full h-full" />
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
			<div class="flex flex-col gap-3">
				<h2 class="text-2xl md:text-3xl font-bold">Olimpiada tayyorlov</h2>
				<div class="h-px w-full bg-gray-200" />
				<div class="flex items-center justify-between">
					<div class="flex items-center gap-1">
						<Icon name="lucide-calendar" class="!w-4 !h-4 text-muted-foreground" />
						<span class="text-sm text-muted-foreground">2023-06-13 17:45:21</span>
					</div>
					<div class="flex items-center gap-1">
						<Icon name="lucide-eye" class="!w-4 !h-4 text-muted-foreground" />
						<span class="text-sm text-muted-foreground">245</span>
					</div>
				</div>
			</div>

			<div class="max-w-[1200px] mx-auto">
				<UIImage src="/images/image.jpg" image-class="rounded-lg mx-auto mt-1.5 md:mt-6 mb-3 md:mb-11 overflow-hidden object-cover w-full h-auto" />

				<p class="text-base leading-7 mb-4 text-gray-700">
					Maktabimizda tashkil etilgan to‘garaklar o‘quvchilarning bo‘sh vaqtlarini mazmunli o‘tkazish, iste’dodlarini kashf etish va yangi ko‘nikmalarni rivojlantirish uchun eng muqim
					maydonlardan biridir. Har bir o‘quvchi o‘z qiziqishi bo‘yicha klub tanlab, o‘rganish, ijod qilish va o‘zini sinab ko‘rish imkoniyatiga ega bo‘ladi.
				</p>

				<p class="text-base leading-7 mb-4 text-gray-700">
					Hozirda maktabimizda san’at, sport, texnologiya, fan va ijtimoiy yo‘nalishlarda o‘nlab faol to‘garaklar ishlaydi. Masalan, “Rassomchilik”, “Robototexnika”, “Debat”, “Futbol”,
					“Ingliz tili klubi” va “Yosh liderlar” kabi mashg‘ulotlar o‘quvchilarning ijodkorligi, nutq madaniyati va jamoaviylik ko‘nikmalarini mustahkamlaydi.
				</p>

				<p class="text-base leading-7 mb-8 text-gray-700">
					To‘garaklarda muntazam qatnashgan o‘quvchilar maktab, tuman va viloyat miqyosidagi tanlov hamda olimpiadalarda muvaffaqiyat qozonib kelishmoqda. Biz har bir bolada iste’dod
					borligiga ishonamiz va uni rivojlantirish uchun barcha sharoitlarni yaratamiz. To‘garaklar — bu nafaqat mashg‘ulot, balki do‘stlik, o‘zini anglash va orzular sari bir
					qadamdir.
				</p>
			</div>
		</div>
	</div>
</template>

<script setup>
import { FreeMode, Navigation, Thumbs, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

const { t } = useI18n()

const thumbsSwiper = ref()
const activeIndex = ref(0)

const setThumbsSwiper = (swiper) => {
	thumbsSwiper.value = swiper
}
const settings = {
	spaceBetween: 10,
	grabCursor: true,
	loop: true,
	navigation: {
		nextEl: '.slider-next',
		prevEl: '.slider-prev'
	},
	autoplay: {
		delay: 3000,
		disableOnInteraction: false
	},
	thumbs: { swiper: thumbsSwiper.value },
	modules: [Thumbs, FreeMode, Navigation, Autoplay]
}

const thumbsSettings = {
	spaceBetween: 12,
	slidesPerView: 4,
	breakpoints: {
		768: { slidesPerView: 6 },
		1280: { slidesPerView: 8 }
	},
	freeMode: true,
	watchSlidesProgress: true,
	modules: [Thumbs, FreeMode]
}

const images = ref([
	{
		src: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80',
		title: 'Robototexnika va texnologiya darsi'
	},
	{
		src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80',
		title: 'Sport zali mashg‘uloti'
	},
	{
		src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80',
		title: 'Kitobxonlar klubi'
	},
	{
		src: 'https://images.unsplash.com/photo-1505678261036-a3fcc5e884ee?auto=format&fit=crop&w=1200&q=80',
		title: 'Olimpiada tayyorlov mashg‘uloti'
	},
	{
		src: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80',
		title: 'Robototexnika va texnologiya darsi'
	},
	{
		src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80',
		title: 'Sport zali mashg‘uloti'
	},
	{
		src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80',
		title: 'Kitobxonlar klubi'
	},
	{
		src: 'https://images.unsplash.com/photo-1505678261036-a3fcc5e884ee?auto=format&fit=crop&w=1200&q=80',
		title: 'Olimpiada tayyorlov mashg‘uloti'
	}
])

const sliderChange = (swiper) => {
	activeIndex.value = swiper.realIndex
}

const breadcrumbItems = [
	{
		name: t('opportunities_olympiad_prep'),
		path: ''
	}
]
</script>
