<template>
	<div class="">
		<LayoutHeader color="transparent" />
		<services-section-secondary-hero-exam-centre class="" />
		<services-section-secondary-exams-hall />
		<services-section-secondary-exam-registration />
		<services-section-classes />
		<common-faq />
		<LayoutFooter />
	</div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

definePageMeta({
	layout: 'empty'
})

const breadcrumbItems = [
	{
		name: t('services'),
		path: ''
	},
	{
		name: t('other_services.mock_cd')
	}
]
</script>
