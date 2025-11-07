<template>
	<div>
		<UIBreadcrumb :routes="breadcrumbItems" />
		<div class="container">
			<common-section-wrapper
				class="mb-6 md:mb-10 pt-6 md:pt-8"
				:title="$t('teachers_section_title')"
				highlighted-title
				wrapperClass="!items-center !text-center"
				title-class="text-center"
				:actions="false"
			/>
			<div class="grid md:grid-cols-2 gap-6">
				<card-teachers v-for="key in 8" :key />
			</div>

			<div class="flex items-center justify-center mt-9">
				<UIButton :text="$t('btn_more')" icon="lucide-arrow-down" />
			</div>
		</div>
	</div>
</template>

<script setup>
const { t } = useI18n()

const breadcrumbItems = [
	{
		name: "Bizning o'qituvchilar",
		path: ''
	}
]
</script>
