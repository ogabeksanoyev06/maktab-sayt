<script setup lang="ts">
const items = [
	{
		img: '/svg/careers/business.svg',
		text: 'Years in the business',
		number: 12
	},
	{
		img: '/svg/careers/branches.svg',
		text: 'Number of branches',
		number: 19
	},
	{
		img: '/svg/careers/instructors.svg',
		text: 'Teachers & Instructors',
		number: 288
	},
	{
		img: '/svg/careers/workers.svg',
		text: 'Administrative workers',
		number: 98
	}
]

const counters = items.map((item) => useCounter(item.number, 2000))

const hasAnimated = ref(false)

const sectionRef = ref<HTMLElement>()

onMounted(() => {
	if (!sectionRef.value) return

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting && !hasAnimated.value) {
					hasAnimated.value = true
					// Start all counters simultaneously
					counters.forEach((counter) => {
						counter.animate()
					})
					ieltsCounters.forEach((counter) => {
						counter.animate()
					})
				}
			})
		},
		{
			threshold: 0.3 // Start animation when 30% of the section is visible
		}
	)

	observer.observe(sectionRef.value)

	onUnmounted(() => {
		observer.disconnect()
	})
})
</script>

<template>
	<section ref="sectionRef" class="container py-16">
		<common-section-wrapper :title="$t('team_stats_title')" highlighted-title class="mb-9" />
		<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
			<careers-card-stat
				v-for="(item, i) in items"
				:key="i"
				:img="item.img"
				:number="counters[i]?.formattedCount.value || '0'"
				:text="item.text"
				:is-last="i === items.length - 1"
			/>
		</div>
	</section>
</template>
