<script setup>
const { t } = useI18n()

const items = computed(() => [
	{
		img: '/svg/kids/rocket.svg',
		title: t('courses_general_title'),
		subtitle: t('courses_general_desc')
	},
	{
		img: '/svg/kids/rocket.svg',
		title: t('courses_ielts_title'),
		subtitle: t('courses_ielts_desc')
	}
])
</script>

<template>
	<section class="container grid md:gap-9 gap-6 relative md:py-16 py-8">
		<common-section-wrapper class="items-center text-center !gap-9" :title="$t('education_title')" highlighted-title :subtitle="$t('education_subtitle')" />
		<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
			<kids-card-course v-for="(item, i) in items" :key="i" :img="item.img" :title="item.title" :subtitle="item.subtitle" :grades="item.grades" />
		</div>
	</section>
</template>
