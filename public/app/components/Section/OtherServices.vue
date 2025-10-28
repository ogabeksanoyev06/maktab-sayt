<template>
	<div class="py-10 md:py-[96px] grid grid-cols-12 gap-6 relative container">
		<common-section-wrapper class="col-span-12 md:col-span-5 relative z-1" :title="$t('other_services_highlighted')" highlighted-title :subtitle="$t('other_services_description')" />
		<div class="grid md:grid-cols-2 gap-6 lg:gap-10 col-span-12 relative z-1">
			<div class="flex flex-col gap-6 lg:gap-10">
				<section-other-services-card v-for="(item, key) in otherServicesFirst" :key="key" :card="item" />
			</div>
			<div class="flex flex-col gap-6 lg:gap-10 md:-mt-[150px]">
				<section-other-services-card v-for="(item, key) in otherServicesSecond" :key="key" :card="item" />
			</div>
		</div>
		<img class="w-[1300px] h-auto absolute top-2.5 left-1/2 -translate-x-1/2 z-0" src="/images/other-services/pattern.svg" alt="Other services pattern" />
	</div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const otherServicesFirst = computed(() => [
	{
		img: '/images/other-services/mock-cd.webp',
		title: t('other_services.mock_cd'),
		subtitle: t('other_services.mock_cd_description'),
		link: '/services/computer-delivered-mock-exams'
	},
	{
		img: '/images/other-services/examination-centre.webp',
		title: t('other_services.examination_centre'),
		subtitle: t('other_services.examination_centre_description'),
		link: '/services/examination-centre'
	},
])

const otherServicesSecond = computed(() => [
	{
		img: '/images/other-services/mock-paper.webp',
		title: t('other_services.mock_paper'),
		subtitle: t('other_services.mock_paper_description'),
		link: '/services/paper-based-mock-exams'
	},
	{
		img: '/images/other-services/ielts-regist.webp',
		title: t('other_services.registration'),
		subtitle: t('other_services.registration_description'),
		link: '/services/registration'
	}
])
</script>
