<script setup>
const { t } = useI18n()

const breadcrumbItems = [
	{
		name: t('about_us.page_title'),
		path: '/about-us'
	},
	{
		name: t('structure'),
		path: ''
	}
]
</script>

<template>
	<div>
		<UIBreadcrumb :routes="breadcrumbItems" />
		<div class="container">
			<h1 class="title-style mt-3 mb-3 md:mb-6">Tuzilma</h1>
		</div>
	</div>
</template>
