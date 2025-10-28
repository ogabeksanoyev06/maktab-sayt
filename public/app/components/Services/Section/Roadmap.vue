<script setup>
const levels = [
	{
		img: '/svg/level/beginner.svg',
		title: 'Beginner',
		subtitle: '3–3.5 months'
	},
	{
		img: '/svg/level/elementary.svg',
		title: 'Elementary',
		subtitle: '3–3.5 months'
	},
	{
		img: '/svg/level/pre-ielts.svg',
		title: 'Pre-IELTS',
		subtitle: '3–3.5 months'
	},
	{
		img: '/svg/level/introduction.svg',
		title: 'Introduction',
		subtitle: '3–3.5 months'
	},
	{
		img: '/svg/level/graduation.svg',
		title: 'Graduation',
		subtitle: '3–3.5 months'
	}
]
</script>

<template>
	<section class="container grid gap-4 md:gap-9 relative py-8 md:py-16">
		<common-section-wrapper class="items-center text-center" :title="$t('roadmap_title')" highlighted-title :subtitle="$t('roadmap_description')" />
		<div class="bg-white rounded-3xl shadow-card py-8 md:py-16 px-2 md:px-11">
			<div class="flex flex-wrap justify-center gap-6 relative">
				<template v-for="(level, index) in levels" :key="index">
					<div class="relative flex flex-col items-center max-w-[150px] md:max-w-[200px] w-full">
						<ServicesCardRoadmap :img="level.img" :title="level.title" :subtitle="level.subtitle" />
						<img v-if="index < levels.length - 1" src="/svg/level/arrow-right.svg" alt="arrow" class="absolute top-[25px] -right-8 -translate-y-1/2 w-11 h-5 hidden sm:block" />
					</div>
				</template>
			</div>
		</div>
	</section>
</template>

<style></style>
