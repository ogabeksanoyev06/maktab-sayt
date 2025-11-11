<script setup>
// Reactive data
const loading = ref(true)
const error = ref(null)
const article = ref(null)

// i18n composable
const { t } = useI18n()

// Get route params
const route = useRoute()
const slug = computed(() => route.query.slug)

// Methods

const breadcrumbItems = computed(() => [
	{
		name: t('news'),
		path: '/news'
	},
	{
		name: t('news_title'),
		path: ''
	}
])

// SEO
useSeoMeta({
	title: () => (article.value ? `${article.value.title} - ADAM Healthcare Blog` : 'Article - ADAM Healthcare Blog'),
	description: () => (article.value ? article.value.description.replace(/<[^>]*>/g, '').substring(0, 160) : 'Read the latest healthcare insights and news.'),
	ogTitle: () => (article.value ? article.value.title : 'Article - ADAM Healthcare Blog'),
	ogDescription: () => (article.value ? article.value.description.replace(/<[^>]*>/g, '').substring(0, 160) : 'Read the latest healthcare insights and news.'),
	ogImage: () => article.value?.featured_image_url || '/images/og-image.svg',
	ogUrl: () => `https://adam.shifo24.com/blog-slug?slug=${slug.value}`,
	twitterTitle: () => (article.value ? article.value.title : 'Article - ADAM Healthcare Blog'),
	twitterDescription: () => (article.value ? article.value.description.replace(/<[^>]*>/g, '').substring(0, 160) : 'Read the latest healthcare insights and news.'),
	twitterImage: () => article.value?.featured_image_url || '/images/og-image.svg'
})
</script>

<template>
	<div class="pb-8 md:pb-16">
		<UIBreadcrumb :routes="breadcrumbItems" />
		<div class="container">
			<UIImage src="/images/user.png" image-class="rounded-lg mx-auto mt-1.5 md:mt-3 mb-3 md:mb-11 overflow-hidden object-cover w-full block max-w-[984px] aspect-[984/540] h-full" />
			<div class="mx-auto w-full max-w-[782px]">
				<h2 class="base-title-style md:!mb-4">
					Faxr bilan ma’lum qilamizki, universitetimizning CS2 jamoasi “Ziyo Forum” va Ta’lim vazirligi tomonidan tashkil etilgan respublika miqyosidagi Kibersport turnirida 1-o‘rinni
					qo‘lga kiritdi.
				</h2>
				<div class="flex items-center gap-1 text-muted-foreground mb-2 md:mb-6">
					<Icon name="lucide:calendar" />
					<span class="font-medium text-sm">19.04.2025</span>
				</div>
				<div class="mb-3 md:mb-6">
					<p class="md:text-xl">⚡️ Ushbu yutuq talabalarimizning kibersport sohasida o‘sib borayotgan iste’dodi, jamoaviy ishlashi va fidokorligini yaqqol namoyon etadi.</p>
				</div>
				<div class="space-y-2 md:space-y-5 hidden-print">
					<div class="w-full h-[1px] bg-gray-200"></div>
					<div class="flex flex-col-reverse gap-3 md:flex-row items-center justify-between">
						<div class="flex justify-between max-sm:flex-col md:justify-auto gap-3 md:gap-5 w-full">
							<CommonButtonShare :title="''" />
							<CommonButtonCopy />
						</div>
						<div class="flex justify-between md:justify-auto gap-2.5 md:gap-4 items-center w-full md:w-max">
							<div class="flex gap-2 items-center">
								<Icon name="lucide-eye" class="text-muted-foreground !w-[18px]"></Icon>
								<p class="!font-semibold md:text-base text-sm truncate">34</p>
							</div>
							<CommonButtonPrint />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
