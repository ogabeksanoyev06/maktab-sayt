<script setup lang="ts">
const { t } = useI18n()

const items = computed(() => [
	{
		img: '/svg/kids/youngsters.svg',
		title: t('group_types_youngsters_title'),
		subtitle: t('group_types_youngsters_desc'),
		grades: '1–4'
	},
	{
		img: '/svg/kids/juniors.svg',
		title: t('group_types_juniors_title'),
		subtitle: t('group_types_juniors_desc'),
		grades: '5–9'
	},
	{
		img: '/svg/kids/teens.svg',
		title: t('group_types_teens_title'),
		subtitle: t('group_types_teens_desc'),
		grades: '10–11'
	}
])
</script>

<template>
	<section class="container grid gap-6 md:gap-9 relative md:py-16 py-8">
		<common-section-wrapper class="items-center text-center !gap-9" :title="$t('group_types_title')" highlighted-title :subtitle="$t('group_types_subtitle')" />

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			<kids-card-group-type v-for="(item, i) in items" :key="i" :img="item.img" :title="item.title" :subtitle="item.subtitle" :grades="item.grades" />
		</div>
	</section>
</template>
