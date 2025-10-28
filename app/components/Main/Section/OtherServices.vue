<template>
	<div class="py-8 md:py-16 grid grid-cols-12 gap-6 relative container">
		<common-section-wrapper
			class="col-span-12 md:col-span-5 relative z-1"
			:title="$t('school_services_title')"
			:subtitle="$t('school_services_subtitle')"
			highlighted-title
			:actions="false"
		/>
		<div class="grid md:grid-cols-2 gap-6 lg:gap-10 col-span-12 relative z-1">
			<div class="flex flex-col gap-6 lg:gap-10">
				<main-card-other-services-card v-for="(item, key) in schoolServicesFirst" :key="key" :card="item" />
			</div>
			<div class="flex flex-col gap-6 lg:gap-10 md:-mt-[150px]">
				<main-card-other-services-card v-for="(item, key) in schoolServicesSecond" :key="key" :card="item" />
			</div>
		</div>
		<img class="w-[1300px] h-auto absolute top-2.5 left-1/2 -translate-x-1/2 z-0" src="/images/other-services/pattern.svg" alt="School services pattern" />
	</div>
</template>

<script setup lang="ts">
const { t } = useI18n()

const schoolServicesFirst = computed(() => [
	{
		img: '/images/other-services/mock-cd.webp',
		title: t('school_services.clubs'),
		subtitle: t('school_services.clubs_description'),
		link: '/opportunities/clubs'
	},
	{
		img: '/images/other-services/examination-centre.webp',
		title: t('school_services.extra_lessons'),
		subtitle: t('school_services.extra_lessons_description'),
		link: '/opportunities/extra-classes'
	}
])

const schoolServicesSecond = computed(() => [
	{
		img: '/images/other-services/mock-paper.webp',
		title: t('school_services.olympiad'),
		subtitle: t('school_services.olympiad_description'),
		link: '/opportunities/olympiad-prep'
	},
	{
		img: '/images/other-services/ielts-regist.webp',
		title: t('school_services.events'),
		subtitle: t('school_services.events_description'),
		link: '/opportunities/events'
	}
])
</script>
