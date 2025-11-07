<template>
	<div>
		<UIBreadcrumb :routes="breadcrumbItems" />
		<div class="py-4 md:py-8 bg-white">
			<section class="container">
				<div class="space-y-2 md:space-y-5">
					<h2 class="title-style mb-2 md:mb-5">{{ $t('about_us.page_title') }}</h2>
					<div class="lg:text-xl space-y-3 md:space-y-5 text-gray-700 leading-relaxed">
						<p>{{ $t('about_us.intro1') }}</p>
						<p>{{ $t('about_us.intro2') }}</p>
						<p>{{ $t('about_us.intro3') }}</p>
						<p>{{ $t('about_us.intro4') }}</p>
						<p>{{ $t('about_us.intro5') }}</p>
						<p>{{ $t('about_us.intro6') }}</p>
					</div>
				</div>
			</section>
			<img alt="image of people" class="w-full h-full object-cover" loading="lazy" src="/images/main-bg.svg" />
			<section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 container gap-3 sm:gap-4 md:gap-5 -mt-[30px] sm:-mt-[50px] md:-mt-[124px] pb-8 md:pb-16">
				<div class="border border-border sm:p-7 w-full pointer-events-none p-4 bg-white shadow-card rounded-lg sm:rounded-xl sm:space-y-4" v-for="(item, i) in items" :key="i">
					<div>
						<p class="font-bold mb-1 sm:mb-2">{{ item.title }}</p>
						<p class="line-clamp-10 sm:text-base text-sm">
							{{ item.desc }}
						</p>
					</div>
				</div>
			</section>
			<section class="container">
				<h2 class="title-style mb-4 md:mb-8">Maktab tarixidagi muhim bosqichlar</h2>
				<section-milestone-slider />
			</section>
		</div>
	</div>
</template>

<script setup>
const { t } = useI18n()

const items = computed(() => [
	// {
	// 	title: t('about_us.title1'),
	// 	desc: t('about_us.desc1')
	// },
	{
		title: t('about_us.title2'),
		desc: t('about_us.desc2')
	},
	{
		title: t('about_us.title3'),
		desc: t('about_us.desc3')
	},
	{
		title: t('about_us.title4'),
		desc: t('about_us.desc4')
	},
	{
		title: t('about_us.title5'),
		desc: t('about_us.desc5')
	}
])

// const silder_items = [
// 	{
// 		media_type: 'image',
// 		url: 'https://tmci.uz/files/common/awardsslideritem/Image-2024-09-12_091809.png'
// 	},
// 	{
// 		media_type: 'image',
// 		url: 'https://tmci.uz/files/common/awardsslideritem/Image-1-2024-09-12_091809.png'
// 	},
// 	{
// 		media_type: 'video',
// 		url: 'https://tmci.uz/files/common/awardsslideritem/TMC-2024-09-12_091809.mp4'
// 	},
// 	{
// 		media_type: 'image',
// 		url: 'https://tmci.uz/files/common/awardsslideritem/Image-2-2024-09-12_091809.png'
// 	},
// 	{
// 		media_type: 'image',
// 		url: 'https://tmci.uz/files/common/awardsslideritem/Image-3-2024-09-12_091809.png'
// 	}
// ]

const breadcrumbItems = [
	{
		name: t('about_us.page_title'),
		path: ''
	}
]
</script>
