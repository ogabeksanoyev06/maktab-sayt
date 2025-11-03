<script setup>
const props = defineProps({
	menus: Array,
	isFullMenu: Boolean
})

const active = ref(null)
</script>
<template>
	<div
		v-if="isFullMenu"
		class="bg-white px-4 py-5 fixed bottom-0 w-full z-[9] overflow-y-auto flex flex-col gap-2"
		:class="y > 80 ? 'h-[calc(100vh-64px)]' : 'h-[calc(100vh-80px)]'"
	>
		<template v-for="(menu, index) in menus" :key="index">
			<UIAccordion
				:show="active === index"
				@toggle="active = active === index ? null : index"
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
						<NuxtLinkLocale v-for="child in menu.children" :key="child.to" :to="child.to" @click="closeMenu" class="text-base">
							{{ child.label }}
						</NuxtLinkLocale>
					</div>
				</template>
			</UIAccordion>
		</template>
	</div>
</template>
