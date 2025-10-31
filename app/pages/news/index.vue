<script setup>
const { t } = useI18n()

const breadcrumbItems = [
	{
		name: t('news'),
		path: ''
	}
]
</script>

<template>
	<div class="pb-8 md:pb-16">
		<UIBreadcrumb :routes="breadcrumbItems" />
		<div class="container">
			<h1 class="title-style mb-2 sm:mb-3 md:mb-6 mt-3">Yangiliklar</h1>
			<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
				<CardNews v-for="key in 8" :key />
			</div>
			<div class="flex items-center justify-center mt-9">
				<UIButton variant="outline" :text="$t('btn_more')" icon="lucide-arrow-down" />
			</div>
		</div>
	</div>
</template>
