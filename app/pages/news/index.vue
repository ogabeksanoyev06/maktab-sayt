<script setup>
const { t } = useI18n()

const getNewsSeo = (lang) => {
	const content = {
		uz: {
			title: 'Yangiliklar – 3-maktab',
			description: '3-sonli umumiy o‘rta ta’lim maktabidagi yangiliklar, e’lonlar, tadbirlar, o‘quv yutuqlari va maktab hayotidagi eng so‘nggi voqealar.',
			ogTitle: 'Yangiliklar – 3-maktab',
			ogDescription: '3-maktabdagi e’lonlar, tadbirlar, o‘quvchilar yutuqlari va maktab hayotidan so‘nggi xabarlar bilan tanishing.',
			twitterTitle: 'Yangiliklar – 3-maktab',
			twitterDescription: '3-maktabdagi eng so‘nggi yangiliklar va voqealar.'
		},
		ru: {
			title: 'Новости – Школа №3',
			description: 'Последние новости, объявления, мероприятия и достижения учеников в средней школе №3.',
			ogTitle: 'Новости – Школа №3',
			ogDescription: 'Будьте в курсе всех событий, объявлений и достижений учеников в школе №3.',
			twitterTitle: 'Новости – Школа №3',
			twitterDescription: 'Последние новости и события школы №3.'
		},
		en: {
			title: 'News – School No.3',
			description: 'Latest updates, announcements, events, and student achievements from School No.3.',
			ogTitle: 'News – School No.3',
			ogDescription: 'Stay updated with events, announcements, and achievements at School No.3.',
			twitterTitle: 'News – School No.3',
			twitterDescription: 'Latest news and events from School No.3.'
		}
	}
	return content[lang] || content.uz
}

const breadcrumbItems = [
	{
		name: t('news'),
		path: ''
	}
]

useSeoMeta({
	title: computed(() => getNewsSeo(t).title),
	description: computed(() => getNewsSeo(t).description),
	ogTitle: computed(() => getNewsSeo(t).ogTitle),
	ogDescription: computed(() => getNewsSeo(t).ogDescription),
	ogImage: '/images/og-image.svg',
	ogUrl: 'https://3-maktab.uz/news',
	twitterTitle: computed(() => getNewsSeo(t).twitterTitle),
	twitterDescription: computed(() => getNewsSeo(t).twitterDescription),
	twitterImage: '/images/og-image.svg'
})

useHead({
	script: [
		{
			type: 'application/ld+json',
			innerHTML: JSON.stringify({
				'@context': 'https://schema.org',
				'@type': 'NewsMediaOrganization',
				name: '3-sonli umumiy o‘rta ta’lim maktabi',
				description: '3-sonli umumiy o‘rta ta’lim maktabidagi yangiliklar, tadbirlar, e’lonlar, o‘quvchilar yutuqlari va maktab hayotidagi ahamiyatli voqealar.',
				url: 'https://3-maktab.uz/news',
				publisher: {
					'@type': 'EducationalOrganization',
					name: '3-sonli umumiy o‘rta ta’lim maktabi',
					url: 'https://3-maktab.uz',
					logo: {
						'@type': 'ImageObject',
						url: 'https://3-maktab.uz/images/logo.svg'
					}
				},
				mainEntityOfPage: {
					'@type': 'WebPage',
					'@id': 'https://3-maktab.uz/news'
				},
				potentialAction: {
					'@type': 'ReadAction',
					target: 'https://3-maktab.uz/news'
				},
				sameAs: ['https://t.me/maktab3', 'https://instagram.com/maktab3', 'https://facebook.com/maktab3']
			})
		}
	]
})
</script>

<template>
	<div class="pb-8 md:pb-16">
		<UIBreadcrumb :routes="breadcrumbItems" />
		<div class="container">
			<h1 class="title-style mb-2 sm:mb-3 md:mb-6 mt-3">{{ $t('news') }}</h1>
			<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
				<CardNews v-for="key in 8" :key />
			</div>
			<div class="flex items-center justify-center mt-9">
				<UIButton variant="outline" :text="$t('btn_more')" icon="lucide-arrow-down" />
			</div>
		</div>
	</div>
</template>
