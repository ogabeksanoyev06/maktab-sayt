<template>
	<div ref="sectionRef" class="py-4 md:py-8 bg-[#F5F7FA]">
		<div class="bg-[linear-gradient(109.6deg,_#005EFE_0.88%,_#003898_100.96%)] relative">
			<img src="/images/home/pattern.svg" alt="Kids bg" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover" />
			<div class="container relative py-8 md:py-16">
				<div class="pb-8 sm:pb-16 md:w-1/2 text-animate" :class="{ 'animate-in': isVisible }">
					<h2 class="text-[28px] leading-140 font-bold text-white mb-2">{{ $t('hero_education_title') }}</h2>
					<p class="text-base text-white/80 leading-140">{{ $t('hero_education_subtitle') }}</p>
				</div>
				<div ref="cardRef" class="grid grid-cols-12 gap-5 relative z-1 sm:w-fit">
					<div
						v-for="(item, index) in list"
						:key="index"
						class="p-4 fade-in-up glass-card sm:max-w-[260px] w-full rounded-[20px] flex flex-col items-start col-span-6 sm:col-span-4 max-sm:last:col-start-4"
					>
						<h4 class="text-xl leading-130 font-bold text-white">{{ item.title }}</h4>
						<p class="text-sm text-white/80 leading-140 mt-1 mb-4 md:mb-5">{{ item.subtitle }}</p>
						<div class="py-1 px-3 border border-white/10 rounded-full w-full text-base leading-130 text-white">
							{{ item.grades }}
						</div>
					</div>
				</div>
				<img
					class="max-md:hidden h-4/5 lg:h-full aspect-[528/580] absolute bottom-0 right-0 z-0 slide-in-right"
					src="/images/home/kids.webp"
					alt="Kids image"
					:class="{ 'animate-in': isVisible }"
				/>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
const { t } = useI18n()

const { elementRef: sectionRef, isVisible } = useScrollAnimation({
	threshold: 0.15,
	rootMargin: '0px 0px -100px 0px',
	triggerOnce: true
})

const { containerRef: cardRef } = useStaggeredScrollAnimation({
	threshold: 0.15,
	rootMargin: '0px 0px 0px 0px',
	triggerOnce: true,
	staggerDelay: 120,
	childSelector: '.fade-in-up'
})

const list = computed(() => [
	{
		title: t('grades_title_primary'),
		subtitle: t('grades_desc_primary'),
		grades: t('grades_class_primary')
	},
	{
		title: t('grades_title_middle'),
		subtitle: t('grades_desc_middle'),
		grades: t('grades_class_middle')
	},
	{
		title: t('grades_title_upper'),
		subtitle: t('grades_desc_upper'),
		grades: t('grades_class_upper')
	}
])
</script>
