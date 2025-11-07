<script setup lang="ts">
const { elementRef: sectionRef, isVisible: sectionVisible } = useScrollAnimation({
	threshold: 0.15,
	rootMargin: '0px 0px -100px 0px',
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
	<section ref="sectionRef" class="container py-8 md:py-16">
		<common-section-wrapper
			class="mb-4 md:mb-8 text-animate"
			:class="{ 'animate-in': sectionVisible }"
			:title="$t('students_results_title')"
			:subtitle="$t('students_results_subtitle')"
			highlighted-title
			link-to="/results/pupils"
		/>

		<div ref="cardsRef" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
			<card-scores-pupils v-for="key in 4" :key="key" class="fade-in-up" />
		</div>
	</section>
</template>
