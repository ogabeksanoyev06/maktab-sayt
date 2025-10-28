<script setup>
const { t } = useI18n()

const items = computed(() => [
	{
		title: t('education_build_title'),
		subtitle: t('education_build_desc'),
		img: '/images/kids/1.webp'
	},
	{
		title: t('education_nurture_title'),
		subtitle: t('education_nurture_desc'),
		img: '/images/kids/2.webp'
	},
	{
		title: t('education_uncover_title'),
		subtitle: t('education_uncover_desc'),
		img: '/images/kids/3.webp'
	},
	{
		title: t('education_opportunity_title'),
		subtitle: t('education_opportunity_desc'),
		img: '/images/kids/4.webp'
	}
])
</script>

<template>
	<section class="container grid gap-6 md:gap-9 relative md:py-16 py-8">
		<common-section-wrapper class="items-center text-center !gap-9" :title="$t('education_title')" highlighted-title :subtitle="$t('education_subtitle')" />
		<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
			<kids-card-education v-for="(item, i) in items" :key="i" :img="item.img" :title="item.title" :subtitle="item.subtitle" />
		</div>
	</section>
</template>
