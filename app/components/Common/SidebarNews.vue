<template>
	<div class="bg-white rounded shadow-sm overflow-hidden">
		<div class="bg-blue-900 px-3 py-4 mb-0.5">
			<h3 class="text-xl font-medium text-white">Axborot xizmati</h3>
		</div>
		<nav class="flex flex-col w-full">
			<nuxt-link-locale
				v-for="(item, index) in links"
				:key="index"
				:to="item.to"
				class="w-full flex items-center gap-2 px-4 py-3 hover:text-white hover:bg-blue-900 transition-all duration-300"
				:class="{
					'text-white bg-blue-900 font-semibold': route.path === item.to
				}"
			>
				<span
					class="w-2 h-2 rounded-full bg-muted-foreground flex-shrink-0"
					:class="{
						'bg-white': route.path.startsWith(item.to)
					}"
				></span>
				{{ item.label }}
			</nuxt-link-locale>
		</nav>
	</div>
</template>

<script setup>
const route = useRoute()
const localePath = useLocalePath()

const links = [
	{ label: 'Yangiliklar', to: localePath('/news') },
	{ label: 'Videogalereya', to: localePath('/video-gallery') },
	{ label: 'Kutilayotgan tadbirlar', to: localePath('/events') },
	{ label: 'Fotogalereya', to: localePath('/photo-gallery') },
	{ label: 'Vebinarlar', to: localePath('/webinars') },
	{ label: 'Kontaktlar', to: localePath('/contacts') },
	{ label: 'Yashil Maktab', to: localePath('/about-us/green-initiatives') }
]
</script>
