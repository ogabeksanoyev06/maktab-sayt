<script setup>
const { t } = useI18n()

const breadcrumbItems = [
	{
		name: t('about_us.page_title'),
		path: '/about-us'
	},
	{
		name: t('management'),
		path: ''
	}
]
</script>

<template>
	<div>
		<UIBreadcrumb :routes="breadcrumbItems" />
		<div class="container">
			<common-section-title :title="'Menejerlar va xodimlar'" />
			<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
				<about-card-management v-for="(item, index) in 5" :key="index" />
			</div>
		</div>
	</div>
</template>
