<template>
	<section class="relative bg-white py-8 md:py-16 overflow-hidden z-5">
		<div class="container relative z-2">
			<div class="grid gap-6 lg:grid-cols-12">
				<div class="lg:col-span-4">
					<common-section-wrapper
						:title="$t('why_we_different_title')"
						:subtitle="$t('why_we_different_subtitle')"
						highlighted-title
						title-class="max-w-[280px] w-full"
						subtitle-class="!whitespace-pre-line"
					/>
				</div>
				<div class="lg:col-span-8">
					<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:flex lg:justify-end gap-4">
						<div
							v-for="(item, key) in items"
							:key
							class="lg:max-w-[72px] w-full md:min-h-[200px] lg:h-[320px] flex flex-col gap-4 md:gap-6 items-start lg:items-center md:justify-between lg:gap-3 border border-[#E1E2E3] rounded-2xl bg-white/[0.01] backdrop-blur-[10px] p-4 md:p-5 lg:p-[16px_16px_30px_16px] relative overflow-hidden transition-300 group"
							:class="activeIndex === key ? '!shadow-[0_30px_50px_10px_rgba(39,8,56,0.11)] !border-transparent lg:!max-w-[302px] lg:!items-start !bg-white/[0.2]' : ''"
							@mouseenter="activeIndex = key"
						>
							<img
								src="/svg/home/pricing-bg.svg"
								alt=""
								class="absolute w-[212px] h-[212px] flex-shrink-0 -top-[22px] -right-[51px] lg:opacity-0 transition-all duration-500"
								:class="activeIndex === key ? 'lg:!opacity-100' : ''"
							/>
							<div class="relative">
								<img
									:src="item.img"
									:alt="item.title"
									class="size-12 sm:size-16 lg:size-10 aspect-square object-contain transition-300 lg:opacity-0 lg:group-hover:opacity-100"
									:class="activeIndex === key ? 'lg:!size-16 lg:opacity-100' : ''"
								/>
								<img
									:src="item.imgGray"
									:alt="item.title"
									class="size-12 sm:size-16 lg:size-10 aspect-square object-contain transition-300 absolute inset-0 opacity-0 lg:opacity-100 lg:group-hover:opacity-0"
									:class="activeIndex === key ? 'lg:!size-16 lg:!opacity-0' : ''"
								/>
							</div>

							<!-- <icons-feature-pricing class="size-12 sm:size-16 lg:size-10 aspect-square transition-all" :class="activeIndex === key ? 'lg:!size-16' : ''" /> -->
							<h3
								class="text-2xl font-bold leading-130 text-center rotate-180 whitespace-nowrap opacity-100 [writing-mode:vertical-rl] [text-orientation:sideways] lg:block hidden"
								:class="activeIndex === key ? '!hidden !opacity-0' : ''"
							>
								{{ item.title }}
							</h3>

							<div
								class="flex flex-col items-start gap-1 md:gap-2 lg:hidden lg:opacity-0 transition-300 lg:min-w-[250px]"
								:class="activeIndex === key ? 'lg:!opacity-100 lg:!flex' : ''"
							>
								<h3 class="text-xl md:text-[28px] font-bold !leading-130">{{ item.title }}</h3>
								<p class="text-sm sm:text-base !leading-140">{{ item.subtitle }}</p>
							</div>
						</div>
					</div>
					<div class="grid grid-cols-2 md:grid-cols-3 gap-4"></div>
				</div>
			</div>
		</div>
		<img src="/images/bg.png" alt="" class="absolute -bottom-[50px] z-0 right-0 w-[1440px] mx-auto" />
	</section>
</template>

<script setup>
const activeIndex = ref(0)
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const items = computed(() => [
	{
		img: '/images/home/icons/ielts.svg',
		imgGray: '/images/home/icons/ielts-gray.svg',
		title: t('why_we_different_items.pricing'),
		subtitle: t('why_we_different_items.pricing_description')
	},
	{
		img: '/images/home/icons/location.svg',
		imgGray: '/images/home/icons/location.svg',
		title: t('why_we_different_items.location'),
		subtitle: t('why_we_different_items.location_description')
	},
	{
		img: '/images/home/icons/quality.svg',
		imgGray: '/images/home/icons/quality.svg',
		title: t('why_we_different_items.quality'),
		subtitle: t('why_we_different_items.quality_description')
	},
	{
		img: '/images/home/icons/instructors.svg',
		imgGray: '/images/home/icons/instructors.svg',
		title: t('why_we_different_items.instructors'),
		subtitle: t('why_we_different_items.instructors_description')
	},
	{
		img: '/images/home/icons/results.svg',
		imgGray: '/images/home/icons/results.svg',
		title: t('why_we_different_items.results'),
		subtitle: t('why_we_different_items.results_description')
	},
	{
		img: '/images/home/icons/scores.svg',
		imgGray: '/images/home/icons/scores.svg',
		title: t('why_we_different_items.scores'),
		subtitle: t('why_we_different_items.scores_description')
	}
])
</script>
