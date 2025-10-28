<template>
	<div class="md:pt-[var(--header-height)] pt-[80px]">
		<UIBreadcrumb :routes="breadcrumbItems" />
		<section-results-ielts />
		<section-results-multi-level />
		<section-results-sat />
		<services-section-classes />
		<common-faq />
	</div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const breadcrumbItems = [
	{
		name: t('results'),
		path: '/results'
	}
]
</script>
