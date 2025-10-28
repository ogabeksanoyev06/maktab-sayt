<template>
	<section class="py-16">
		<div class="container">
			<common-section-wrapper
				class="items-center mb-16"
				:title="$t('our_history_title')"
				:subtitle="$t('our_history_subtitle')"
				highlighted-title
				:content-class="'items-center'"
			/>
			<div>
				<div class="timeline mb-4 lg:mb-0" v-for="(item, index) in data?.results || []">
					<div class="flex flex-col items-center gap-3 mb-3 lg:mb-6">
						<div class="px-6 py-2 rounded-full w-fit" style="background: linear-gradient(180deg, #6395f8 0%, #0154f8 100%)">
							<span class="text-base sm:text-xl font-bold !leading-130 text-white">{{ dayjs(item.date).format('YYYY') }}</span>
						</div>
						<div class="w-1 h-12 lg:h-[97px] bg-gray-2 rounded-full"></div>
					</div>
					<div class="flex gap-6" :class="index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'">
						<div class="flex flex-col items-start gap-4 lg:gap-6 flex-1">
							<div class="bg-white w-full h-full border-2 border-white rounded-3xl flex flex-col items-start gap-3 p-4 sm:p-7 shadow-[0_30px_50px_5px_rgba(39,48,56,0.06)]">
								<h3 class="text-xl xl:text-[28px] font-bold !leading-130">{{ item.title }}</h3>
								<p class="sm:text-base !leading-140">
									{{ item.description }}
								</p>
							</div>
							<div class="lg:hidden flex flex-col items-start bg-white rounded-3xl w-full flex-1 gap-4 p-4 sm:p-7 l shadow-[0_30px_50px_5px_rgba(39,48,56,0.06)]">
								<p class="bg-red rounded-full px-3 py-1.5 text-base font-bold !leading-130 text-white">{{ item.date }}</p>
								<div class="grid grid-cols-4 gap-3">
									<img v-for="(img, i) in item.images" :key="i" :src="img.image" :alt="item.title" class="rounded-xl object-cover w-full h-[80px] sm:h-[120px]" />
								</div>
							</div>
						</div>
						<div class="hidden lg:flex flex-col items-center gap-3">
							<div class="w-6 h-6 border-[6px] border-blue rounded-full flex-shrink-0"></div>
							<div class="w-1 h-full bg-gray-2 rounded-t-full" v-if="index !== data?.results?.length - 1"></div>
						</div>
						<div class="hidden lg:flex flex-col flex-1 gap-4 w-full" :class="index % 2 === 0 ? 'items-start' : 'items-end'">
							<p class="bg-red rounded-full px-6 py-2 text-base sm:text-xl font-bold !leading-130 text-white">{{ dayjs(item.date).format('D MMMM YYYY') }}</p>
							<div class="flex gap-3 w-full" :class="index % 2 === 0 ? '' : 'justify-end'">
								<img
									v-for="(img, i) in item.images"
									:key="i"
									:src="img.image"
									:alt="item.title"
									class="rounded-3xl transition-all duration-500 cursor-pointer object-cover max-w-[80px] w-full h-[183px] hover:max-w-[300px] flex-shrink-0"
									@mouseenter="activeImage(item.id, i)"
									:class="activeImages[item.id] === i ? '!max-w-[300px]' : ''"
								/>
							</div>
						</div>
					</div>
					<div class="hidden lg:flex flex-col items-center gap-3 mb-3" v-if="index !== data?.results?.length - 1">
						<div class="w-1 bg-gray-2 h-[108px] rounded-b-full"></div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
import { useQuery } from '@tanstack/vue-query'
import dayjs from 'dayjs'

const { $axios } = useNuxtApp()

const activeImages = ref({})

const activeImage = (id, imgIndex) => {
	const itemIndex = data.value?.results?.findIndex((x) => x.id === id)
	if (itemIndex !== -1) {
		activeImages.value[id] = imgIndex
	}
}

const { isPending, data } = useQuery({
	queryKey: ['section-history'],
	queryFn: () => {
		return $axios
			.get('ielts/History/', {
				params: { limit: 8 }
			})
			.then((res) => res.data)
	}
})

watch(data, (newVal) => {
	if (newVal?.results) {
		newVal.results.forEach((item) => {
			activeImages.value[item.id] = 0
		})
	}
})
</script>
