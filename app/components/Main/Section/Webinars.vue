<script setup lang="ts">
const { elementRef: sectionRef, isVisible: sectionVisible } = useScrollAnimation({
	threshold: 0.15,
	rootMargin: '0px 0px -80px 0px',
	triggerOnce: true
})

const { containerRef: webinarsRef } = useStaggeredScrollAnimation({
	threshold: 0.15,
	rootMargin: '0px 0px 0px 0px',
	triggerOnce: true,
	staggerDelay: 80,
	childSelector: '.slide-in-bottom'
})
</script>

<template>
	<section ref="sectionRef" class="bg-white py-16 scroll-animate" :class="{ 'animate-in': sectionVisible }">
		<div class="container">
			<!-- Title -->
			<common-section-wrapper
				class="mb-4 md:mb-8 text-animate"
				:class="{ 'animate-in': sectionVisible }"
				:title="$t('webinar_title')"
				:subtitle="$t('webinar_subtitle')"
				linkTo="/webinars"
			/>

			<!-- Webinar Cards -->
			<div ref="webinarsRef" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
				<card-webinar v-for="key in 4" :key="key" class="slide-in-bottom" />
			</div>
		</div>
	</section>
</template>
