<template>
	<div class="pt-[80px] md:pt-[var(--header-height)]">
		<UIBreadcrumb :routes="breadcrumbItems" />
		<services-section-hero-banner :title="$t('ielts_title')" :description="$t('ielts_description')" :image="'/images/services/ielts-user.webp'" />
		<services-section-roadmap />
		<services-section-levels />
		<services-section-learning-materials />
		<section-results-ielts :title="$t('student_results_title')" />
		<services-section-classes />
		<common-faq />
		<common-contact-form class="md:mx-9" />
	</div>
</template>

<script setup>
const { t } = useI18n()

const breadcrumbItems = [
	{
		name: t('services'),
		path: ''
	},
	{
		name: t('ielts')
	}
]
</script>
