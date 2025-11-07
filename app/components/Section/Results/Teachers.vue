<script setup lang="ts">
const { elementRef: sectionRef, isVisible: sectionVisible } = useScrollAnimation({
	threshold: 0.15,
	rootMargin: '0px 0px -80px 0px',
	triggerOnce: true
})

const { containerRef: cardsRef } = useStaggeredScrollAnimation({
	threshold: 0.15,
	rootMargin: '0px 0px 0px 0px',
	triggerOnce: true,
	staggerDelay: 80,
	childSelector: '.fade-in-up'
})
</script>

<template>
	<section ref="sectionRef" class="container py-8 md:py-16 scroll-animate fade-in-up" :class="{ 'animate-in': sectionVisible }">
		<common-section-wrapper
			class="mb-4 md:mb-8 text-animate"
			:class="{ 'animate-in': sectionVisible }"
			:title="$t('teachers_results_title')"
			:subtitle="$t('teachers_results_subtitle')"
			highlighted-title
			link-to="/results/teachers"
		/>

		<div ref="cardsRef" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
			<card-scores-teachers v-for="key in 8" :key="key" class="fade-in-up" />
		</div>
	</section>
</template>
