<template>
	<div class="bg-[#F5F7FA]">
		<div class="container py-10 md:py-[100px] grid grid-cols-12 gap-6 items-start">
			<div class="grid grid-cols-12 gap-6 col-span-12 items-end">
				<CommonSectionWrapper class="col-span-12 md:col-span-6" :title="$t('real_progress_title')" :subtitle="$t('real_progress_description')" highlighted-title />
				<div class="flex md:items-end md:justify-end col-span-12 md:col-span-6">
					<UIButton :text="$t('start_learning')" icon="icon-phone-call text-2xl leading-6" />
				</div>
			</div>

			<ServicesCardClass v-for="(item, index) in items" :key="index" v-bind="item" class="col-span-12 sm:col-span-6 md:col-span-4" />
		</div>
	</div>
</template>

<script lang="ts" setup>
const { t } = useI18n()
const items = computed(() => [
	{
		img: '/images/services/icons/ielts.svg',
		imgGray: '/images/services/icons/ielts-gray.svg',
		title: t('classes.ielts'),
		subtitle: t('classes.ielts_description'),
		link: '/services/ielts'
	},
	{
		img: '/images/services/icons/multi-level.svg',
		imgGray: '/images/services/icons/multi-level-gray.svg',
		title: t('classes.multi_level'),
		subtitle: t('classes.multi_level_description'),
		link: '/services/multi-level'
	},
	{
		img: '/images/services/icons/sat.svg',
		imgGray: '/images/services/icons/sat-gray.svg',
		title: t('classes.sat'),
		subtitle: t('classes.sat_description'),
		link: '/services/sat'
	},
	{
		img: '/images/services/icons/english.svg',
		imgGray: '/images/services/icons/english-gray.svg',
		title: t('classes.general_english'),
		subtitle: t('classes.general_english_description'),
		link: '/services/general-english'
	},
	{
		img: '/images/services/icons/russian.svg',
		imgGray: '/images/services/icons/russian-gray.svg',
		title: t('classes.russian_language'),
		subtitle: t('classes.russian_language_description'),
		link: '/services/russian'
	},
	{
		img: '/images/services/icons/math.svg',
		imgGray: '/images/services/icons/math-gray.svg',
		title: t('classes.mathematics'),
		subtitle: t('classes.mathematics_description'),
		link: '/services/mathematics'
	}
])
</script>
