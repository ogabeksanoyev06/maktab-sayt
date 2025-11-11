<script setup>
import { useWindowScroll } from '@vueuse/core'

const props = defineProps({
	menus: Array,
	isFullMenu: Boolean
})

const emit = defineEmits(['close-menu'])

const route = useRoute()
const localePath = useLocalePath()
const { y } = useWindowScroll()

const active = ref(null)

const setActiveByRoute = () => {
	active.value = props.menus.findIndex((menu) => menu.children?.some((child) => route.path.startsWith(localePath(child.to))))
}

onMounted(setActiveByRoute)
watch(() => route.path, setActiveByRoute)

const toggleAccordion = (i) => {
	active.value = active.value === i ? null : i
}

const closeMenu = () => {
	emit('close-menu')
}
</script>

<template>
	<div v-if="isFullMenu" class="bg-white h-screen fixed bottom-0 w-full z-[999] flex flex-col lg:hidden">
		<div class="flex items-center justify-between p-6 border-b border-gray-200/60">
			<div class="flex items-center">
				<img src="/svg/logo/multicolor.svg" alt="" class="w-full h-10" />
			</div>
			<button class="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200" @click="closeMenu">
				<Icon name="lucide:x" class="!size-6" />
			</button>
		</div>
		<div class="flex flex-col h-full overflow-hidden">
			<div class="flex-1 py-8 px-6 space-y-3 overflow-y-auto">
				<template v-for="(menu, index) in menus" :key="index">
					<UIAccordion
						:show="active === index"
						@toggle="toggleAccordion(index)"
						:wrapper-class="['rounded border transition-300', active === index ? 'border-primary' : 'border-border']"
					>
						<template #header>
							<div class="flex justify-between items-center">
								<span class="text-xl font-medium leading-130">{{ menu.label }}</span>
								<Icon name="lucide:chevron-down" class="transition-300" :class="active === index ? 'rotate-180' : ''" />
							</div>
						</template>

						<template #body>
							<div class="flex flex-col gap-2 px-4 py-2">
								<NuxtLinkLocale v-for="child in menu.children" :key="child.to" :to="child.to" @click="closeMenu" active-class="text-primary" class="text-base">
									{{ child.label }}
								</NuxtLinkLocale>
							</div>
						</template>
					</UIAccordion>
				</template>
			</div>
		</div>
	</div>
</template>
