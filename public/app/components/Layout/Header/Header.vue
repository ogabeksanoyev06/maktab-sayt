<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core'

interface Props {
	color: 'white' | 'dark' | 'transparent'
}
const props = withDefaults(defineProps<Props>(), {
	color: 'white'
})

const { y } = useWindowScroll()
const { t } = useI18n()

const navigationLinks = computed(() => [
	{
		title: t('about'),
		route: '/about'
	},
	{
		title: t('services'),
		route: '/services',
		childKey: 'services'
	},
	{
		title: t('everest_kids'),
		route: '/everest-kids'
	},
	{
		title: t('go_global'),
		route: '/go-global'
	},
	{
		title: t('results'),
		route: '/results'
	},
	{
		title: t('media'),
		route: '/media',
		childKey: 'media'
	},
	{
		title: t('careers'),
		route: '/careers'
	},
	{
		title: t('contact_us'),
		route: '/contact-us'
	}
])
const theme = computed(() => {
	if (props.color === 'dark') return 'dark'
	if (props.color === 'transparent') return y.value < 100 ? 'transparent' : 'white'
	else return 'white'
})
const bgColor = {
	dark: 'bg-gray-6',
	transparent: 'bg-transparent',
	white: 'bg-white'
}
</script>

<template>
	<header
		class="flex items-center fixed w-full top-0 z-10 transition-all duration-300"
		:class="[y > 100 ? 'h-16 md:h-[72px] shadow-[0_15px_40px_0_#1C23291A]' : 'h-20 md:h-[100px]', bgColor[theme]]"
	>
		<div class="container-wrapper">
			<div class="container flex items-center justify-between">
				<nuxt-link-locale to="/">
					<img :key="theme" :src="`/images/header/logo${theme !== 'white' ? '-white' : ''}.svg`" alt="logo" class="w-[98px] h-11" />
				</nuxt-link-locale>
				<nav class="flex max-lg:hidden">
					<template v-for="(link, index) in navigationLinks" :key="index">
						<!-- Services dropdown -->
						<layout-header-services-dropdown v-if="link.childKey === 'services'" :theme />
						<!-- Media dropdown -->
						<layout-header-media-dropdown v-else-if="link.childKey === 'media'" :theme />
						<!-- Other links -->
						<nuxt-link-locale v-else :to="link.route" class="py-1 px-2.5 rounded-full transition-all duration-300 font-medium leading-130 text-sm hover:text-blue border border-transparent flex items-center gap-0.5" :active-class="theme !== 'white' ? '!bg-white/10 !text-white !border-white/20' : '!bg-[#0154F8]/10 !text-blue !border-[#0154F8]/20'" :class="theme !== 'white' ? 'text-white' : 'text-gray-6'">
							{{ link.title }}
						</nuxt-link-locale>
					</template>
				</nav>
				<div class="flex items-center gap-3">
					<layout-header-lang-switcher :theme />
					<UIButton class="!px-6 max-sm:hidden" :text="$t('build_my_future')" />
				</div>
			</div>
		</div>
	</header>
</template>
