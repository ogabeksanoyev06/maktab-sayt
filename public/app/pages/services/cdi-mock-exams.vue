<template>
	<div class="md:pt-[var(--header-height)] pt-[80px]">
		<UIBreadcrumb :routes="breadcrumbItems" />
		<services-section-secondary-hero-confidence />
		<services-section-secondary-exam-conditions />
		<services-section-secondary-exam-sessions />
		<services-section-secondary-pricing-plan />
		<div class="container py-8 md:pt-16 md:pb-32">
			<div class="max-w-[620px] w-full mx-auto">
				<common-section-wrapper class="items-center text-center md:!gap-8" :title="$t('cta_waiting_title')" highlighted-title :subtitle="$t('cta_waiting_subtitle')">
					<UIButton :text="$t('get_started')" />
				</common-section-wrapper>
			</div>
		</div>
	</div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

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
