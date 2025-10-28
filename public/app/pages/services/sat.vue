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
		img: '/svg/journey/training.svg',
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
		title: t('satGlobal_feature_experienced_instructors_title'),
		subtitle: t('satGlobal_feature_experienced_instructors_subtitle')
	},
	{
		img: '/svg/features/coverage.svg',
		title: t('satGlobal_feature_comprehensive_coverage_title'),
		subtitle: t('satGlobal_feature_comprehensive_coverage_subtitle')
	},
	{
		img: '/svg/features/personalized.svg',
		title: t('satGlobal_feature_focused_practice_title'),
		subtitle: t('satGlobal_feature_focused_practice_subtitle')
	},
	{
		img: '/svg/features/approach.svg',
		title: t('satGlobal_feature_personalized_approach_title'),
		subtitle: t('satGlobal_feature_personalized_approach_subtitle')
	},
	{
		img: '/svg/features/pricing.svg',
		title: t('satGlobal_feature_affordable_pricing_title'),
		subtitle: t('satGlobal_feature_affordable_pricing_subtitle')
	},
	{
		img: '/svg/features/readiness.svg',
		title: t('satGlobal_feature_proven_results_title'),
		subtitle: t('satGlobal_feature_proven_results_subtitle')
	}
])
const breadcrumbItems = [
	{
		name: t('services'),
		path: ''
	},
	{
		name: t('sat_classes')
	}
]
</script>

<template>
	<div class="md:pt-[var(--header-height)] pt-[80px]">
		<UIBreadcrumb :routes="breadcrumbItems" />
		<services-section-hero-banner :title="$t('sat_title')" :description="$t('sat_description')" :image="'/images/services/sat-user.webp'" />
		<services-section-learning-journey :items="items" />
		<services-section-features :items="features" />
		<services-section-info :title="$t('global_title')" :subtitle="$t('global_description')" :img="'/images/info.png'" />
		<section-results-sat :title="$t('student_results_title')" />
		<services-section-classes />
		<common-faq />
		<common-contact-form class="md:mx-9" />
	</div>
</template>
