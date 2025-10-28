<script setup lang="ts">
const schoolStats = [
	{
		img: '/images/stats/3.svg',
		number: 820,
		title: 'students_count',
		suffix: '+'
	},
	{
		img: '/images/stats/2.svg',
		number: 45,
		title: 'teachers_count'
	},
	{
		img: '/images/stats/3.svg',
		number: 35,
		title: 'olympiad_winners',
		suffix: '+'
	},
	{
		img: '/images/stats/4.svg',
		number: 120,
		title: 'graduates_accepted_to_universities',
		suffix: '+'
	}
]

const educationAchievements = [
	{
		number: 98,
		title: 'parent_satisfaction_rate',
		suffix: '%'
	},
	{
		number: 1975,
		title: 'since_established_year'
	},
	{
		number: 25,
		suffix: '+',
		title: 'school_projects_and_clubs'
	},
	{
		number: 15,
		suffix: '+',
		title: 'district_level_awards'
	}
]

const counters = schoolStats.map((item) => useCounter(item.number, 2000))
const ieltsCounters = educationAchievements.map((item) => useCounter(item.number, 2000))
const hasAnimated = ref(false)

const sectionRef = ref<HTMLElement>()

onMounted(() => {
	if (!sectionRef.value) return

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting && !hasAnimated.value) {
					hasAnimated.value = true
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
			threshold: 0.3
		}
	)
	observer.observe(sectionRef.value)
	onUnmounted(() => {
		observer.disconnect()
	})
})
</script>

<template>
	<div ref="sectionRef" class="bg-[linear-gradient(180deg,_#FFF_0%,_#F5F7FA_100%)] py-4 md:py-8">
		<div class="bg-[url('/images/home/statistics.webp')] bg-cover bg-center bg-fixed bg-no-repeat pt-10 md:pt-20 pb-10 md:pb-[88px]">
			<div class="container">
				<common-section-wrapper
					class="mb-6 md:mb-9"
					wrapperClass="!items-center !text-center"
					title-class="!text-white"
					subtitle-class="!text-white"
					:title="$t('statistics_title')"
					:subtitle="$t('statistics_subtitle')"
					highlighted-title
					:actions="false"
				/>
				<div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
					<div v-for="(item, index) in schoolStats" :key="index" class="flex flex-col gap-14 p-4 md:p-6 rounded md:rounded-[20px] bg-black/10 backdrop-blur">
						<img :src="item.img" :alt="$t(item.title)" class="size-12 md:size-16 object-contain" />
						<div class="flex flex-col gap-1">
							<h3 class="text-4xl md:text-[44px] font-extrabold leading-130 text-white">{{ counters[index]?.formattedCount.value || '0' }}{{ item.suffix }}</h3>
							<p class="text-sm md:text-base font-normal leading-140 text-white">{{ $t(item.title) }}</p>
						</div>
					</div>
					<div class="bg-white/10 w-[calc(100%-40px)] mx-5 h-px col-span-2 md:col-span-4"></div>
					<div v-for="(item, index) in educationAchievements" :key="index" class="flex flex-col gap-14 p-4 md:p-6 rounded md:rounded-[20px] bg-black/10 backdrop-blur">
						<h3 class="text-4xl md:text-[44px] font-extrabold leading-130 text-white">{{ ieltsCounters[index]?.formattedCount.value || '0' }}{{ item.suffix }}</h3>
						<p class="text-sm md:text-base font-normal leading-140 text-white">{{ $t(item.title) }}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
