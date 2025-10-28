<template>
	<div>
		<UIBreadcrumb :routes="breadcrumbItems" />
	</div>
</template>

<script setup>
const { t } = useI18n()

const breadcrumbItems = [
	{
		name: t('olympiads'),
		path: ''
	}
]
</script>
