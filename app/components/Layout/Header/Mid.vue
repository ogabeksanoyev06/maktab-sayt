<script setup>
import { useWindowScroll } from '@vueuse/core'

const props = defineProps({
	isTransparent: Boolean,
	menus: Array,
	info: Object,
	openMenu: Boolean
})

const emit = defineEmits(['open-menu'])

const { y } = useWindowScroll()

const openMenu = ref(props.openMenu ?? false)

watch(
	() => openMenu.value,
	(val) => emit('open-menu', val)
)

watch(
	() => props.openMenu,
	() => (openMenu.value = props.openMenu ?? false)
)

const showChildren = ref(false)
const activeChild = ref(null)

function hoverChild(children) {
	showChildren.value = true
	activeChild.value = children || null
}

function unHoverChild() {
	showChildren.value = false
	activeChild.value = null
}

watch(y, () => {
	unHoverChild()
})

function beforeEnter(el) {
	el.style.height = '0'
	el.style.opacity = '0'
	el.style.overflow = 'hidden'
}
function enter(el) {
	el.style.transition = 'height 0.3s ease, opacity 0.25s ease'
	el.style.height = el.scrollHeight + 'px'
	el.style.opacity = '1'
}
function afterEnter(el) {
	el.style.height = 'auto'
	el.style.opacity = '1'
	el.style.overflow = ''
}
function beforeLeave(el) {
	el.style.height = el.scrollHeight + 'px'
	el.style.opacity = '1'
	el.style.overflow = 'hidden'
}
function leave(el) {
	el.style.transition = 'height 0.3s ease, opacity 0.2s ease'
	requestAnimationFrame(() => {
		el.style.height = '0'
		el.style.opacity = '0'
	})
}
function afterLeave(el) {
	el.style.height = '0'
	el.style.opacity = '0'
	el.style.overflow = ''
}
</script>

<template>
	<header
		@mouseleave="unHoverChild"
		class="transition-300 flex-y-center"
		:class="[
			showChildren && '!bg-white !header-shadow',
			!isTransparent && '!bg-white',
			isTransparent && y > 80 && '!bg-white',
			(isTransparent || (!isTransparent && y > 80)) && 'header-shadow'
		]"
	>
		<main class="container">
			<div class="flex items-center justify-between w-full transition-300" :class="[y > 80 ? 'h-16' : 'h-20']">
				<LayoutHeaderBurger v-model="openMenu" :isTransparent="isTransparent" />
				<NuxtLink to="/">
					<Transition name="fade-sm" mode="out-in">
						<img
							:key="isTransparent"
							class="h-10 lg:h-12 object-cover"
							:src="`/svg/logo/${y > 80 || showChildren ? 'multicolor' : isTransparent ? 'white' : 'multicolor'}.svg`"
							alt="Logo"
						/>
					</Transition>
				</NuxtLink>
				<div class="hidden lg:flex relative">
					<nav class="flex gap-3 items-center w-full justify-center">
						<button
							v-for="(item, i) in menus"
							:key="i"
							class="flex-y-center gap-1.5 text-sm cursor-pointer font-medium leading-130 transition-300 relative"
							:class="[y > 80 || showChildren ? 'text-foreground' : isTransparent ? 'text-white' : 'text-foreground', activeChild?.label === item.label && '']"
							@mouseenter="hoverChild(item)"
						>
							{{ item.label }}
							<Icon name="lucide:chevron-down" class="transition-300" :class="activeChild?.label === item.label ? 'rotate-180' : ''" />
						</button>
					</nav>
				</div>
				<div class="flex items-center gap-1.5">
					<LayoutHeaderLanguageSwitcher :isTransparent="isTransparent" :show-children="showChildren" />
				</div>
			</div>
			<transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter" @before-leave="beforeLeave" @leave="leave" @after-leave="afterLeave">
				<section v-if="showChildren">
					<div class="w-full h-[1px] bg-gray-200"></div>
					<section class="pb-7 pt-6 grid grid-cols-1">
						<div class="grid items-start grid-cols-2 col-span-2">
							<h1 class="col-span-2 text-dark text-2xl font-[800] mb-4">{{ activeChild.label }}</h1>
							<ul class="grid grid-cols-2 gap-x-5 gap-y-3 w-full">
								<li v-for="(i, idx) in activeChild?.children" :key="idx">
									<NuxtLinkLocale
										:to="i.to"
										class="group transition-300 bg-white border border-[#EBEDF0] rounded py-2.5 px-3 flex-between hover:shadow-[0_30px_50px_10px_rgba(39,48,56,0.11)] cursor-pointer"
									>
										<span class="text-sm font-medium">{{ i?.label }} </span>
										<Icon name="lucide:arrow-right" class="transition-300 opacity-0 group-hover:opacity-100 group-hover:text-primary group-hover:translate-x-1" />
									</NuxtLinkLocale>
								</li>
							</ul>
						</div>
					</section>
				</section>
			</transition>
		</main>
	</header>
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
