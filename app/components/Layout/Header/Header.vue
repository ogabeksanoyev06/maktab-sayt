<template>
	<div id="main-header" class="w-full !fixed top-0 z-50">
		<LayoutHeaderMid :menus="items" :openMenu="fullMenu" @open-menu="openMenu" :isTransparent="isTransparent" />
		<transition name="reverse-menu">
			<LayoutHeaderFullMenu v-if="fullMenu" @close-menu="fullMenu = false" :menus="items" :is-full-menu="fullMenu" />
		</transition>
	</div>
</template>

<script setup>
defineProps({
	isTransparent: Boolean
})

const route = useRoute()

const fullMenu = ref(false)

function openMenu(value) {
	fullMenu.value = value
}

watch(route, () => {
	fullMenu.value = false
})

watch(
	fullMenu,
	(val) => {
		if (val) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'auto'
		}
	},
	{ deep: true }
)

const items = [
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
]
</script>
