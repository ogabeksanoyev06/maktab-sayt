<script setup lang="ts">
const { t } = useI18n()
const routes = [
	{
		name: t('home'),
		route: '/'
	},
	{
		name: t('about'),
		route: '/about'
	},
	// {
	// 	name: t('services'),
	// 	route: '/services'
	// },
	{
		name: t('everest_kids'),
		route: '/everest-kids'
	},
	{
		name: t('go_global'),
		route: '/go-global'
	},
	{
		name: t('results'),
		route: '/results'
	},
	{
		name: t('media'),
		route: '/media'
	},
	{
		name: t('careers'),
		route: '/careers'
	},
	{
		name: t('contact_us'),
		route: '/contact-us'
	}
]
</script>

<template>
	<footer class="md:px-9 md:pb-8">
		<div class="md:rounded-[36px] bg-[linear-gradient(110deg,_#005EFE_0.88%,_#003898_100.96%)] p-4 md:pt-8 md:pb-5 md:px-5 relative overflow-hidden">
			<div class="container max-md:px-0 relative z-1">
				<div class="flex items-center justify-between max-lg:flex-col gap-4 pb-4 md:pb-7 border-b border-white/10">
					<nuxt-link-locale to="/">
						<img class="h-11 w-[98px]" src="/images/footer/logo.svg" alt="Everest Logo" />
					</nuxt-link-locale>
					<nav class="flex items-center gap-4 max-lg:flex-wrap">
						<nuxt-link-locale v-for="route in routes" :key="route.name" :to="route.route" class="text-sm text-white font-medium leading-130">
							{{ t(route.name) }}
						</nuxt-link-locale>
					</nav>
					<div class="w-[98px] max-lg:hidden"></div>
				</div>
				<div class="flex flex-col md:w-1/2 pt-4 md:pt-7 pb-8 md:pb-16">
					<h2 class="text-white text-xl sm:text-2xl font-bold leading-130">{{ $t('footer_text') }}</h2>
					<p class="text-white/80 text-xs sm:text-sm font-normal leading-130 whitespace-pre-line mt-2">{{ $t('footer_description') }}</p>
				</div>
			</div>
			<div
				class="rounded-xl md:rounded-full backdrop-blur bg-white/10 border border-white/10 px-4 py-3 text-xs font-medium leading-130 text-white flex md:items-center justify-between gap-y-2 max-md:flex-col relative z-1"
			>
				<p>{{ $t('copyright_text', { year: new Date().getFullYear() }) }}</p>
				<div class="flex items-center gap-3">
					<a class="hover:underline" href="mailto:info@everest.education" target="_blank">info@everest.education</a>
					<div class="bg-white/10 h-4 w-px" />
					<a class="hover:underline" href="tel:+998935564935" target="_blank">+998 93 556 49 35</a>
				</div>
			</div>
			<img class="absolute bottom-0 right-0 w-full h-auto z-0" src="/images/footer/pattern.svg" alt="" />
		</div>
	</footer>
</template>
