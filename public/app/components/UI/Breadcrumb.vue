<template>
	<div class="bg-white py-3 hidden-on-print max-md:hidden border-y border-gray-1 h-10 flex items-center" :class="{ '!bg-transparent !border-white/[0.15]': transparent }">
		<div class="container flex items-center">
			<nuxt-link-locale
				to="/"
				aria-label="home"
				class="text-gray-4 text-xs leading-130 font-normal flex items-center hover:text-blue transition group"
				:class="{ '!text-white/40 hover:!text-white': transparent }"
			>
				{{ $t('home') }}
			</nuxt-link-locale>
			<span class="icon-chevron text-xs leading-4 -rotate-90 text-gray-3 block mx-1" :class="{ '!text-white/50': transparent }" />
			<template v-for="(link, index) in routes" :key="index">
				<nuxt-link-locale
					v-if="index !== routes.length - 1"
					:to="link.path"
					class="text-gray-4 text-xs leading-130 font-normal flex items-center hover:text-blue transition capitalize"
					:class="{ '!text-white/40 hover:!text-white': transparent }"
				>
					{{ $t(link.name) }}
				</nuxt-link-locale>
				<span v-if="index !== routes.length - 1" class="icon-chevron text-xs leading-4 -rotate-90 text-gray-3 block mx-1" :class="{ '!text-white/50': transparent }" />
				<span v-if="index === routes.length - 1" class="text-xs leading-130 font-normal text-gray-6" :class="{ '!text-white': transparent }">
					{{ link.name }}
				</span>
			</template>
		</div>
	</div>
</template>
<script setup lang="ts">
interface IBreadcrumb {
	name: string
	path: string
}

interface Props {
	routes: IBreadcrumb[]
	transparent?: boolean
}
defineProps<Props>()
</script>
