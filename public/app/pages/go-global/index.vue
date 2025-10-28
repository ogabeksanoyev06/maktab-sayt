<script setup>
definePageMeta({
	layout: 'empty'
})
</script>

<template>
	<div>
		<LayoutHeader color="transparent" />
		<go-global-section-hero-banner />
		<section-cta-banner>
			<common-section-wrapper :title="$t('cta_go_global_title')" :subtitle="$t('cta_go_global_description')" highlighted-title>
				<div class="flex flex-col sm:flex-row gap-4 md:mt-9 w-full">
					<UIButton :text="$t('library_cta')" class="sm:max-w-[180px] w-full" />
					<UIButton variant="secondary" :text="$t('btn_more')" class="sm:max-w-[180px] w-full" />
				</div>
			</common-section-wrapper>
		</section-cta-banner>
		<go-global-section-steps />
		<go-global-section-results />
		<section-results-carousel />
		<section-feedback :video-type="VIDEO_TYPES.GO_GLOBAL_FEEDBACK" />
		<LayoutFooter />
	</div>
</template>
