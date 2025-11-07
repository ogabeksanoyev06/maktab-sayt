<script setup lang="ts">
const { elementRef: sectionRef, isVisible: sectionVisible } = useScrollAnimation({
	threshold: 0.15,
	rootMargin: '0px 0px -80px 0px',
	triggerOnce: true
})

const { containerRef: eventsRef } = useStaggeredScrollAnimation({
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
				:title="$t('event_title')"
				:subtitle="$t('event_subtitle')"
				linkTo="/events"
			/>

			<!-- Event Cards -->
			<div ref="eventsRef" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
				<card-event v-for="key in 3" :key="key" class="slide-in-bottom" />
			</div>
		</div>
	</section>
</template>
