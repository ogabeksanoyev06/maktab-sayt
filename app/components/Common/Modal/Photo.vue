<template>
	<ClientOnly fallback-tag="span" fallback="Loading campus...">
		<UIModal @outer-click="$emit('close')" v-bind="{ show }" body-class="!bg-transparent !max-w-[784px] !overflow-visible" no-header>
			<template #default>
				<button
					class="absolute -top-8 md:-top-10 -right-2 md:-right-0 lg:-right-14 active:scale-95 group transition-300 rounded-full w-7 md:w-[38px] h-7 md:h-[38px] flex-center bg-white/10 border border-white/[16%] hover:!bg-white cursor-pointer"
					@click="$emit('close')"
				>
					<Icon name="lucide-x" class="text-white group-hover:text-red-600 transition-300" />
				</button>
				<div class="relative w-full">
					<button
						class="photo-prev w-12 h-12 rounded-full flex-center group backdrop-blur-sm bg-white/[12%] hover:!backdrop-blur-0 border border-white/[16%] hover:!bg-white transition-300 absolute -left-16 absolute-y cursor-pointer"
						:class="{
							'!cursor-default opacity-50': isPrevDisabled
						}"
						:disabled="isPrevDisabled"
					>
						<Icon name="lucide-arrow-left" class="text-white group-hover:text-primary transition-300" />
					</button>
					<Swiper v-if="images.length" v-bind="settings" :thumbs="{ swiper: thumbsSwiper }" @activeIndexChange="sliderChange" class="rounded">
						<SwiperSlide v-for="(listItem, index) in images" :key="index">
							<div class="aspect-video overflow-hidden relative rounded">
								<UIImage :src="listItem?.image" image-class="h-full md:h-[440px] object-center aspect-video object-cover w-full h-full" />
							</div>
						</SwiperSlide>
					</Swiper>
					<button
						class="photo-next w-12 h-12 rounded-full flex-center group backdrop-blur-sm bg-white/[12%] border border-white/[16%] hover:!bg-white hover:!backdrop-blur-0 transition-300 absolute -right-16 absolute-y cursor-pointer"
						:class="{
							'!cursor-default opacity-50': isNextDisabled
						}"
						:disabled="isNextDisabled"
					>
						<Icon name="lucide-arrow-right" class="text-white group-hover:text-primary transition-300" />
					</button>

					<Swiper v-if="images.length" v-bind="thumbsSettings" class="thumbs-swiper w-full mt-4" @swiper="setThumbsSwiper">
						<SwiperSlide v-for="(listItem, index) in images" :key="index" class="thumb">
							<div class="relative cursor-pointer rounded overflow-hidden">
								<UIImage
									:src="listItem.image"
									class="rounded"
									:image-class="{
										'object-cover aspect-video cursor-pointer rounded overflow-hidden w-full h-full transition-300': true,
										'opacity-100': activeIndex === index,
										'opacity-40 hover:opacity-100': activeIndex !== index
									}"
								/>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
			</template>
		</UIModal>
	</ClientOnly>
</template>

<script setup lang="ts">
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/thumbs'

import type SwiperClass from 'swiper'
import { FreeMode, Navigation, Thumbs, Keyboard } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'

interface Props {
	images: { image: string }[]
	active: number
	keyboardNavigation?: boolean
}

const props = withDefaults(defineProps<Props>(), {
	keyboardNavigation: true
})

const show = defineModel<boolean>('show', { required: true })

const emit = defineEmits<{
	change: [index: number]
	close: []
}>()

const thumbsSwiper = ref<SwiperClass>()

const setThumbsSwiper = (swiper: SwiperClass) => {
	thumbsSwiper.value = swiper
}

const imageSlider = ref<SwiperClass>()
const activeIndex = ref(props.active)

const isNextDisabled = ref(false)
const isPrevDisabled = ref(false)

const settings = {
	spaceBetween: 10,
	grabCursor: true,
	initialSlide: props.active,
	navigation: {
		nextEl: '.photo-next',
		prevEl: '.photo-prev'
	},
	thumbs: { swiper: thumbsSwiper.value },
	modules: [Thumbs, FreeMode, Navigation, Keyboard],
	keyboard: props.keyboardNavigation
}

const thumbsSettings = {
	spaceBetween: 12,
	slidesPerView: 5,
	freeMode: true,
	watchSlidesProgress: true,
	modules: [Thumbs, FreeMode]
}

function sliderChange(e: any) {
	activeIndex.value = e?.activeIndex
	emit('change', e?.activeIndex)

	isNextDisabled.value = e.activeIndex === props.images.length - 1
	isPrevDisabled.value = e.activeIndex === 0
}

onMounted(() => {
	setTimeout(() => {
		imageSlider.value?.slideTo(props.active)
	}, 100)
})

watch(
	() => props.active,
	() => {
		setTimeout(() => {
			imageSlider.value?.slideTo(props.active)
		}, 100)
	}
)

function closeLightbox() {
	show.value = false
	emit('close')
}

const handleKeydown = (e: KeyboardEvent) => {
	if (!show.value || !props.keyboardNavigation) return
	if (e.key === 'Escape') {
		e.preventDefault()
		closeLightbox()
	}
}

onMounted(() => document.addEventListener('keydown', handleKeydown))
onUnmounted(() => document.removeEventListener('keydown', handleKeydown))

watch(
	() => show.value,
	() => {
		if (!show.value) thumbsSwiper.value = undefined
	}
)
</script>

<style scoped>
.gallery-shadow {
	background: linear-gradient(180deg, rgba(7, 9, 28, 0) 57.52%, #07091c 100%);
}
</style>
