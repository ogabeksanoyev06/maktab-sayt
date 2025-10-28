<template>
	<div>
		<NuxtRouteAnnouncer />
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</div>
</template>
<script setup lang="ts">
import { useSeoMeta } from '#app'

useSeoMeta({
	title: 'Everest - Home of real achievers',
	description:
		'Education isn’t just about what you learn — it’s about who you become in the process. Everest will help you shape a future that reflects real effort and real growth.',
	ogTitle: 'Everest - Home of real achievers',
	ogDescription:
		'Education isn’t just about what you learn — it’s about who you become in the process. Everest will help you shape a future that reflects real effort and real growth.',
	ogImage: 'og.png',
	ogUrl: 'https://everest.uz',
	twitterImage: 'og.png',
	twitterTitle: 'Everest - Home of real achievers',
	twitterDescription:
		'Education isn’t just about what you learn — it’s about who you become in the process. Everest will help you shape a future that reflects real effort and real growth.',
	ogType: 'website',
	ogLocale: 'en_US'
})
</script>
