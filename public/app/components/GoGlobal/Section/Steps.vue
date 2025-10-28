<script setup>
const { t } = useI18n()

const items = computed(() => [
	{
		img: '/svg/journey/assessment.svg',
		title: t('global_assessment_title'),
		subtitle: t('global_assessment_description')
	},
	{
		img: '/svg/journey/lessons.svg',
		title: t('global_training_title'),
		subtitle: t('global_training_description')
	},
	{
		img: '/svg/journey/exam.svg',
		title: t('global_exam_title'),
		subtitle: t('global_exam_description')
	}
])
</script>

<template>
	<section class="container grid md:gap-9 gap-6 relative md:py-16 py-8">
		<common-section-wrapper class="!items-center !text-center" :title="$t('global_steps_title')" highlighted-title :subtitle="$t('global_steps_description')" />
		<div class="bg-white rounded-3xl shadow-card p-4 md:py-16 md:px-16">
			<div class="flex flex-wrap justify-center lg:justify-between gap-6 relative">
				<template v-for="(item, index) in items" :key="index">
					<div class="relative flex gap-6 items-start">
						<ServicesCardJourney :img="item.img" :title="item.title" :subtitle="item.subtitle" />
						<img v-if="index < items.length - 1" src="/svg/level/arrow-right.svg" alt="arrow" class="w-11 h-5 hidden md:block mt-[15px]" />
					</div>
				</template>
			</div>
		</div>
	</section>
</template>
