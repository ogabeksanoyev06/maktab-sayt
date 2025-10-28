<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const items = computed(() => [
	{
		img: '/svg/journey/assessment.svg',
		title: t('sat_global_journey_assessment_title'),
		subtitle: t('sat_global_journey_assessment_description')
	},
	{
		img: '/svg/journey/lessons.svg',
		title: t('sat_global_journey_training_title'),
		subtitle: t('sat_global_journey_training_description')
	},
	{
		img: '/svg/journey/exam.svg',
		title: t('sat_global_journey_exam_title'),
		subtitle: t('sat_global_journey_exam_description')
	}
])

const features = computed(() => [
	{
		img: '/svg/features/instructors.svg',
		title: t('satMath_feature_experienced_instructors_title'),
		subtitle: t('satMath_feature_experienced_instructors_subtitle')
	},
	{
		img: '/svg/features/personalized.svg',
		title: t('satMath_feature_focused_on_results_title'),
		subtitle: t('satMath_feature_focused_on_results_subtitle')
	},
	{
		img: '/svg/features/approach.svg',
		title: t('satMath_feature_personalized_approach_title'),
		subtitle: t('satMath_feature_personalized_approach_subtitle')
	},
	{
		img: '/svg/features/pricing.svg',
		title: t('satMath_feature_national_math_certificate_title'),
		subtitle: t('satMath_feature_national_math_certificate_subtitle')
	},
	{
		img: '/svg/features/pricing.svg',
		title: t('satMath_feature_affordable_pricing_title'),
		subtitle: t('satMath_feature_affordable_pricing_subtitle')
	},
	{
		img: '/svg/features/locations.svg',
		title: t('satMath_feature_convenient_locations_title'),
		subtitle: t('satMath_feature_convenient_locations_subtitle')
	}
])

const breadcrumbItems = [
	{
		name: t('services'),
		path: ''
	},
	{
		name: t('multi-level')
	}
]
</script>

<template>
	<div class="md:pt-[var(--header-height)] pt-[80px]">
		<UIBreadcrumb :routes="breadcrumbItems" />
		<services-section-hero-banner :title="$t('cefr_title')" :description="$t('cefr_description')" :image="'/images/services/multi-level-user.webp'" />
		<services-section-learning-journey :items="items" />
		<services-section-features :items="features" />
		<services-section-info :title="$t('certificate_title')" :subtitle="$t('certificate_description')" :img="'/images/info.png'" />
		<section-results-multi-level :title="$t('student_results_title')" />
		<services-section-classes />
		<common-faq />
		<common-contact-form class="md:mx-9" />
	</div>
</template>
