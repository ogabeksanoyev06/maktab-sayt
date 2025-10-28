<script setup>
const { t } = useI18n()

const breadcrumbItems = [
	{
		name: t('events'),
		path: '/events'
	},
	{
		name: t('events'),
		path: ''
	}
]
</script>

<template>
	<div>
		<UIBreadcrumb :routes="breadcrumbItems" />
	</div>
</template>
