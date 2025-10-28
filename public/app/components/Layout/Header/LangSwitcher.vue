<template>
	<UIDropdown :show="showDropdown" @toggle="handleDropdownToggle" head-class="flex items-center" :body-class="['!min-w-[120px]', theme !== 'white' ? '!bg-gray-6' : '!bg-white']">
		<template #head>
			<i class="icon-world text-lg leading-[18px]" :class="theme !== 'white' ? 'text-white' : 'text-gray-5'"></i>
			<span class="mr-1.5 ml-1 text-sm leading-[100%] font-bold uppercase" :class="theme !== 'white' ? 'text-white' : 'text-gray-6'">
				{{ currentLanguage?.code }}
			</span>
			<i class="icon-chevron text-base leading-4" :class="theme !== 'white' ? 'text-white' : 'text-gray-6'" />
		</template>
		<template #body>
			<div
				v-for="(lang, index) in languagesList"
				:key="index"
				class="w-full group transition-300 flex items-center justify-between gap-4 py-2.5 pl-3 pr-2 cursor-pointer transition-300 border-b last:border-b-0 group"
				:class="theme !== 'white' ? 'bg-gray-6 border-white/10 hover:bg-white/[0.05]' : 'bg-white hover:bg-[#0154F8]/10'"
				@click="changeLocale(lang?.code)"
			>
				<span class="text-sm font-medium leading-normal tranistion-300 group-hover:text-blue" :class="theme !== 'white' ? 'text-white' : 'text-gray-6'">
					{{ lang.name }}
				</span>
				<transition name="fade">
					<i v-if="lang?.code === currentLanguage?.code" class="icon-tick text-blue" />
				</transition>
			</div>
		</template>
	</UIDropdown>
</template>

<script lang="ts" setup>
interface Props {
	theme: 'white' | 'dark' | 'transparent'
}

const props = withDefaults(defineProps<Props>(), {
	theme: 'white'
})

const { changeLocale, currentLanguage, languagesList } = useLanguageSwitcher()

const showDropdown = ref(false)

function handleDropdownToggle(val: boolean) {
	showDropdown.value = val
}
</script>
