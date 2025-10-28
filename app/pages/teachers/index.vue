<template>
	<div class="pt-[90px] bg-black">
		<LayoutHeader color="dark" />
		<div class="container py-8 md:py-16">
			<common-section-wrapper
				class="mb-6 md:mb-10"
				:title="$t('teachers_section_title')"
				highlighted-title
				wrapperClass="!items-center !text-center"
				title-class="text-white text-center"
				:actions="false"
			/>
			<div class="grid md:grid-cols-2 gap-6">
				<card-teachers v-for="key in 8" :key />
			</div>

			<div class="flex items-center justify-center mt-9">
				<UIButton :text="$t('btn_more')" icon="lucide-arrow-down" />
			</div>
		</div>
		<LayoutFooter />
	</div>
</template>

<script setup>
definePageMeta({
	layout: 'empty'
})
</script>
