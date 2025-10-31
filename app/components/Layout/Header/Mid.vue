<script setup lang="ts">
import CollapseTransition from '@ivanv/vue-collapse-transition/src/CollapseTransition.vue'

import { useWindowScroll } from '@vueuse/core'

interface IMenu {
	title: string
	front_url?: string
	children?: IMenu[]
}

interface Props {
	isTransparent?: boolean
	menus?: IMenu[]
	openMenu?: boolean
}

const props = defineProps<Props>()
const emit = defineEmits(['open-menu'])

const route = useRoute()
const router = useRouter()
const { y } = useWindowScroll()

// ✅ Transparent on homepage scroll
const isTransparent = computed(() => props.isTransparent)

// ✅ Desktop mega menu states
const showChildren = ref(false)
const activeChild = ref<IMenu[] | null>(null)

// ✅ Mobile full menu (v-model)
const openMenu = ref(props.openMenu ?? false)

watch(
	() => props.openMenu,
	(val) => {
		openMenu.value = val ?? false
	}
)

watch(openMenu, (v) => {
	emit('open-menu', v)
})

// ✅ Hover logic
const hoverChild = (children?: IMenu[]) => {
	activeChild.value = children ?? null
	showChildren.value = !!children
}

const unHoverChild = () => {
	showChildren.value = false
	activeChild.value = null
}

// ✅ Navigation
const goToPage = (url?: string) => {
	if (url) router.push(url)
}
</script>

<template>
	<header class="header-shadow duration-300 transition-300" :class="isTransparent ? 'bg-transparent' : 'bg-white'">
		<main class="container flex-between max-lg:items-center lg:block">
			<nav class="py-4 flex gap-2 items-center">
				<nav class="ml-16">
					<div class="relative max-md:overflow-hidden">
						<div class="!-bottom-[18px] z-50 rounded-[10px] !hidden transition-all duration-200 absolute h-0.5 bg-red -translate-y-1/2 rounded-t-lg"></div>
					</div>
				</nav>
			</nav>
		</main>
		<nav class="pt-3 pb-4 duration-200 lg:hidden">
			<div class="container flex items-center justify-between h-10"></div>
		</nav>
	</header>
</template>
