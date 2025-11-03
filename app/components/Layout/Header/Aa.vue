<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
import { useWindowScroll } from '@vueuse/core'

interface Props {
	color?: 'white' | 'dark' | 'transparent'
}
const props = withDefaults(defineProps<Props>(), {
	color: 'white'
})

const { y } = useWindowScroll()

const route = useRoute()

const bgColor = {
	dark: 'bg-black',
	transparent: 'bg-transparent',
	white: 'bg-white'
}

const theme = computed(() => {
	if (props.color === 'dark') return 'dark'
	if (props.color === 'transparent') return y.value < 100 ? 'transparent' : 'white'
	else return 'white'
})

const showMenu = ref(false)

const items = ref<NavigationMenuItem[]>([
	{
		label: 'Maktab haqida',
		children: [
			{ label: 'Maktab direktori', to: '/about-us/director' },
			{ label: 'Rahbariyat va xodimlar', to: '/about-us/management' },
			{ label: 'Missiya va qadriyatlar', to: '/about-us/missions-and-values' },
			{ label: 'Tarkibiy tuzilma', to: '/about-us/structure' },
			{ label: 'Korrupsiyaga qarshi kurash', to: '/about-us/anti-corruption' },
			{ label: 'Maktab yutuqlati', to: '/about-us/achievements' },
			{ label: 'Maktab nizomi', to: '/about-us/statute' },
			{ label: 'Yashil maktab', to: '/about-us/green-initiatives' },
			{ label: 'Maktab haqida', to: '/about-us' }
		]
	},

	{
		label: 'O‘quvchilarga',
		children: [
			{ label: 'To‘garaklar va klublar', to: '/opportunities/clubs' },
			{ label: 'Olimpiada tayyorlov', to: '/opportunities/olympiad-prep' },
			{ label: 'Qo‘shimcha darslar', to: '/opportunities/extra-classes' },
			{ label: 'Tadbirlar va ekskursiyalar', to: '/opportunities/events' }
		]
	},

	{
		label: 'Natijalar va yutuqlar',
		children: [
			{ label: 'Olimpiada natijalari', to: '/achievements/olympiads' },
			{ label: 'Bitiruvchilar muvaffaqiyatlari', to: '/achievements/alumni' }
		]
	},
	{
		label: 'Axborot xizmati',
		children: [
			{ label: 'Yangiliklar', to: '/news' },
			{ label: 'Kutilayotgan tadbirlar', to: '/events' },
			{ label: 'Fotogalereya', to: '/photo-gallery' },
			{ label: 'Videogalereya', to: '/video-gallery' }
		]
	},
	{
		label: 'Davlat ramzlari',
		children: [
			{ label: 'O‘zbekiston Respublikasi Davlat gerbi', to: '/state-symbols/emblem' },
			{ label: 'O‘zbekiston Respublikasi Davlat bayrog‘i', to: '/state-symbols/flag' },
			{ label: 'O‘zbekiston Respublikasi Davlat madhiyasi', to: '/state-symbols/anthem' }
		]
	}
])

watch(
	() => route.path,
	(newPath) => {
		items.value.forEach((item) => {
			if (item.children?.length) {
				const hasActiveChild = item.children.some((child) => child.to === newPath)
				item.active = hasActiveChild
			}
		})
	},
	{ immediate: true }
)
</script>

<template>
	<div class="w-full !fixed top-0 z-50">
		<header class="flex flex-col w-full transition-300" :class="[y > 100 ? 'h-16 md:[72px] !bg-white header-shadow' : 'h-20 md:h-[90px]', bgColor[theme]]">
			<div class="w-full container flex items-center justify-between gap-2 h-full">
				<div class="flex items-center gap-1.5 min-w-0 h-full">
					<NuxtLink to="/" class="w-max flex items-center h-full gap-3">
						<img src="https://gov.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgerb_in.cfcbe6bb.jpg&w=256&q=75" alt="" class="size-10" />
						<img src="https://gov.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFlagLine.c529ae1f.png&w=16&q=75" alt="" class="w-auto shrink-0 max-w-0.5 h-[70%]" />
						<h3 class="text-xs font-medium leading-tight transition-all duration-300" :class="{ '!text-white': theme === 'transparent' }">
							Buxoro viloyati <br />
							Qorovulbozor tumani <br />
							3-maktab
						</h3>
					</NuxtLink>
				</div>
				<div class="hidden lg:flex">
					<UNavigationMenu
						content-orientation="vertical"
						:items="items"
						:ui="{
							linkLabel: theme === 'transparent' ? 'text-white hover:text-blue transition-300' : 'text-foreground transition-300',
							linkTrailingIcon: theme === 'transparent' ? 'text-white' : 'text-foreground',
							childLinkLabel: 'whitespace-normal break-words text-sm'
						}"
					/>
				</div>

				<div class="flex items-center justify-end gap-1.5">
					<LayoutHeaderLanguageSwitcher :theme />
					<LayoutHeaderBurger v-model="showMenu" @click="showMenu = !showMenu" :theme />
				</div>
			</div>
		</header>
	</div>
</template>

<style scoped>
.header-shadow {
	-webkit-backdrop-filter: blur(26px);
	backdrop-filter: blur(26px);
	background: #ffffff1a;
	box-shadow: 0 4px 64px #00000014;
	position: relative;
	z-index: 10;
}
</style>
