<template>
	<div>
		<UIBreadcrumb :routes="breadcrumbItems" />
		<div class="container">
			<div class="w-full masonry-container">
				<div class="flex flex-col gap-y-2 items-center justify-center h-full w-full pb-8">
					<h1 class="font-bold text-3xl">{{ $t('image_gallery.title') }}</h1>
					<p class="text-base text-muted-foreground">{{ $t('image_gallery.description') }}</p>
				</div>

				<ul class="grid grid-cols-1 gap-4 lg:block">
					<li class="relative w-full group masonry-item" v-for="(item, i) in images" :key="i">
						<UIImage
							:src="item.image"
							class="aspect-[4/3] max-h-[300px] h-full w-full rounded"
							image-class="h-full w-full rounded transition-300 brightness-[.8] hover:brightness-100 will-change-[filter] object-cover"
							@click="openModal"
						/>
					</li>
					<CommonModalPhoto :show="show" :images="images" @close="show = false" />
				</ul>
			</div>
		</div>
	</div>
</template>

<script setup>
const { t } = useI18n()

const images = [
	{ id: 1, image: 'https://picsum.photos/300/450', alt: 'Random 1' },
	{ id: 2, image: 'https://picsum.photos/400/300', alt: 'Random 2' },
	{ id: 3, image: 'https://picsum.photos/250/400', alt: 'Random 3' },
	{ id: 4, image: 'https://picsum.photos/350/500', alt: 'Random 4' },
	{ id: 5, image: 'https://picsum.photos/500/300', alt: 'Random 5' },
	{ id: 6, image: 'https://picsum.photos/320/480', alt: 'Random 6' },
	{ id: 7, image: 'https://picsum.photos/420/360', alt: 'Random 7' },
	{ id: 8, image: 'https://picsum.photos/280/500', alt: 'Random 8' },
	{ id: 9, image: 'https://picsum.photos/460/340', alt: 'Random 9' },
	{ id: 10, image: 'https://picsum.photos/300/380', alt: 'Random 10' },
	{ id: 11, image: 'https://picsum.photos/370/530', alt: 'Random 11' },
	{ id: 12, image: 'https://picsum.photos/310/310', alt: 'Random 12' },
	{ id: 13, image: 'https://picsum.photos/290/470', alt: 'Random 13' },
	{ id: 14, image: 'https://picsum.photos/330/410', alt: 'Random 14' },
	{ id: 15, image: 'https://picsum.photos/480/290', alt: 'Random 15' },
	{ id: 16, image: 'https://picsum.photos/260/390', alt: 'Random 16' },
	{ id: 17, image: 'https://picsum.photos/310/500', alt: 'Random 17' },
	{ id: 18, image: 'https://picsum.photos/400/380', alt: 'Random 18' },
	{ id: 19, image: 'https://picsum.photos/350/450', alt: 'Random 19' },
	{ id: 20, image: 'https://picsum.photos/450/320', alt: 'Random 20' }
]

const show = ref(false)
const index = ref(0)

const openModal = () => {
	show.value = true
}

const breadcrumbItems = [
	{
		name: t('photo_gallery'),
		path: ''
	}
]
</script>

<style scoped>
@media screen and (min-width: 1024px) {
	.masonry-container {
		-moz-column-count: 3;
		column-count: 3;
		-moz-column-fill: balance;
		column-fill: balance;
		-moz-column-gap: 20px;
		column-gap: 20px;
		margin: 20px auto 0;
		padding: 2rem;
	}
	.masonry-item {
		display: inline-block;
		margin: 0 0 20px;
		page-break-inside: avoid;
		-moz-column-break-inside: avoid;
		break-inside: avoid;
		width: 100%;
	}
}
</style>
