<script setup>
useHead({
	meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
	link: [{ rel: 'icon', href: '/favicon.ico' }],
	htmlAttrs: {
		lang: 'uz'
	}
})

const title = '3-maktab rasmiy vebsayti | Zamonaviy ta’lim maskani'
const description =
	'3-maktab — Buxoro viloyati Qorovulbozor tumanidagi ilg‘or ta’lim muassasalaridan biri. O‘quvchilarimiz zamonaviy sharoitlarda bilim oladilar, innovatsion yondashuv va ijodkorlikni rivojlantiradilar. Yangiliklar, yutuqlar va to‘garaklar haqida barcha ma’lumotlar shu yerda.'

useSeoMeta({
	title,
	description,
	ogTitle: title,
	ogDescription: description,
	ogImage: '',
	twitterImage: '',
	twitterCard: 'summary_large_image'
})
</script>

<template>
	<UApp>
		<NuxtRouteAnnouncer />
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</UApp>
</template>
