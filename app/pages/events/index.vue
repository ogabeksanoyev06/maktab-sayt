<script setup>
const { t } = useI18n()

const breadcrumbItems = [
	{
		name: t('events'),
		path: ''
	}
]
</script>
<template>
	<div>
		<UIBreadcrumb :routes="breadcrumbItems" />
		<div class="container pt-10">
			<div class="grid gap-8 md:grid-cols-12">
				<div class="md:col-span-9">
					<div class="space-y-6">
						<card-event-large v-for="key in 4" :key />
					</div>
				</div>
				<div class="md:col-span-3">
					<common-sidebar-news />
				</div>
			</div>
		</div>
	</div>
</template>
