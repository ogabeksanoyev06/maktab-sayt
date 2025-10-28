<script setup lang="ts">
const { t } = useI18n()

const items = computed(() => [
	{
		img: '/svg/exams/hand-heart.svg',
		title: t('exam_reg_free_title'),
		subtitle: t('exam_reg_free_time')
	},
	{
		img: '/svg/exams/passport.svg',
		title: t('exam_reg_simple_title'),
		subtitle: t('exam_reg_simple_time')
	},
	{
		img: '/svg/exams/assistance-stars.svg',
		title: t('exam_reg_assist_title'),
		subtitle: t('exam_reg_assist_time')
	}
])
</script>

<template>
	<section class="container grid gap-6 md:gap-9 relative md:py-16 py-8">
		<common-section-wrapper class="items-center text-center md:!gap-9" :title="$t('exam_registration_title')" highlighted-title :subtitle="$t('exam_registration_subtitle')" />
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			<services-card-secondary-registration v-for="(item, index) in items" :key="index" :img="item.img" :title="item.title" :subtitle="item.subtitle" />
		</div>
	</section>
</template>
