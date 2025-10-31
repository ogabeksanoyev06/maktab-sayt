<script setup>
const { t } = useI18n()

const breadcrumbItems = [
	{
		name: t('video_gallery'),
		path: ''
	}
]
</script>

<template>
	<div class="pb-8 md:pb-16">
		<UIBreadcrumb :routes="breadcrumbItems" />
		<div class="container">
			<h1 class="title-style mb-2 sm:mb-3 md:mb-6 mt-3">{{ $t('video_gallery_title') }}</h1>
			<div class="grid gap-8 md:grid-cols-12">
				<div class="md:col-span-9">
					<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
						<CardVideo v-for="key in 12" :key />
					</div>
					<div class="flex items-center justify-center mt-9">
						<UIButton variant="outline" :text="$t('btn_more')" icon="lucide-arrow-down" />
					</div>
				</div>
				<div class="md:col-span-3">
					<CommonSidebarNews />
				</div>
			</div>
		</div>
	</div>
</template>
