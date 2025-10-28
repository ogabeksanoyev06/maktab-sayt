<script setup lang="ts">
const items = [
	{
		img: '/images/stats/1.svg',
		number: 24,
		title: 'number_of_branches'
	},
	{
		img: '/images/stats/2.svg',
		number: 12,
		title: 'years_of_experience'
	},
	{
		img: '/images/stats/3.svg',
		number: 100,
		title: 'mentors',
		suffix: '+'
	},
	{
		img: '/images/stats/4.svg',
		number: 100,
		title: 'brand_of_the_year',
		prefix: 'x'
	}
]

const ieltsItems = [
	{
		number: 10,
		title: 'students_who_scored_9',
		prefix: '',
		suffix: ''
	},
	{
		number: 20,
		suffix: '+',
		title: 'students_who_scored_8.5',
		prefix: ''
	},
	{
		number: 400,
		suffix: '+',
		title: 'students_who_scored_8.0',
		prefix: ''
	},
	{
		number: 1000,
		suffix: '+',
		title: 'students_who_scored_7.0_&_7.5',
		prefix: ''
	}
]

// Create counter animations for each item
const counters = items.map((item) => useCounter(item.number, 2000))
const ieltsCounters = ieltsItems.map((item) => useCounter(item.number, 2000))
const hasAnimated = ref(false)

// Start animations when section becomes visible
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
	<div ref="sectionRef" class="bg-[linear-gradient(180deg,_#FFF_0%,_#F5F7FA_100%)] md:py-8 md:px-9">
		<div class="bg-[url('/images/home/statistics.webp')] bg-cover bg-center bg-no-repeat md:rounded-[40px] pt-10 md:pt-20 pb-10 md:pb-[88px]">
			<div class="container">
				<common-section-wrapper
					class="!items-center text-center mb-6 md:mb-11"
					title-class="!text-white"
					subtitle-class="!text-white"
					:title="$t('statistics_title')"
					:subtitle="$t('statistics_subtitle')"
					highlighted-title
				/>
				<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
					<div v-for="(item, index) in items" :key="index" class="flex flex-col gap-8 md:gap-14 p-4 md:p-6 rounded-2xl md:rounded-[20px] bg-black/10 backdrop-blur-sm">
						<img :src="item.img" :alt="$t(item.title)" class="size-12 md:size-16 object-contain" />
						<div class="flex flex-col gap-1">
							<h3 class="text-4xl md:text-[44px] font-extrabold leading-130 text-white">{{ item.prefix }}{{ counters[index]?.formattedCount.value || '0' }}{{ item.suffix }}</h3>
							<p class="text-sm md:text-base font-normal leading-140 text-white">{{ $t(item.title) }}</p>
						</div>
					</div>
				</div>
				<div class="bg-white/10 w-[calc(100%-40px)] mx-5 h-px my-5 md:my-10"></div>
				<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
					<div
						v-for="(item, index) in ieltsItems"
						:key="index"
						class="flex flex-col gap-14 p-4 md:p-6 rounded-2xl md:rounded-[20px] bg-black/10 backdrop-blur-sm relative"
						:class="index === 0 ? '!bg-white/10' : ''"
					>
						<img src="/images/ielts-9-pattern.svg" alt="" class="absolute top-0 right-0 w-[108px] h-[124px]" v-if="index === 0" />
						<h3 class="text-4xl md:text-[44px] font-extrabold leading-130 text-white">{{ item.prefix }}{{ ieltsCounters[index]?.formattedCount.value || '0' }}{{ item.suffix }}</h3>
						<p class="text-sm md:text-base font-normal leading-140 text-white">{{ $t(item.title) }}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
