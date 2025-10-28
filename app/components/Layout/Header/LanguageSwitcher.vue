<template>
	<UIDropdown
		:show="showDropdown"
		:head-class="['flex items-center  py-2 px-[7px]  rounded-full', theme === 'transparent' ? 'bg-gray-900/20' : 'bg-secondary']"
		:body-class="['!min-w-[160px]', theme !== 'white' ? '!bg-black' : '!bg-white']"
		@toggle="handleDropdownToggle"
	>
		<template #head>
			<img :src="currentLanguage?.flag" alt="" class="size-6" />
			<span class="text-sm font-medium leading-[10px] uppercase mr-1.5 ml-1" :class="theme !== 'white' ? 'text-white' : ''"> {{ currentLanguage?.code }} </span>
			<Icon name="lucide-chevron-down" :class="['transition-300', { 'rotate-180': showDropdown }, theme !== 'white' ? 'text-white' : '']" />
		</template>
		<template #body>
			<div v-for="(lang, index) in languagesList" :key="index" class="w-full group border-b border-border/30 last:border-none">
				<div
					class="flex items-center justify-between gap-4 py-2 pl-3 pr-2 cursor-pointer transition-300"
					:class="theme !== 'white' ? 'group-hover:bg-gray-900/50' : 'group-hover:bg-secondary'"
					@click="onChangeLocale(lang?.code)"
				>
					<span class="text-left text-sm font-medium" :class="theme !== 'white' ? 'text-white' : ''">
						{{ lang.name }}
					</span>
					<transition name="fade">
						<Icon v-if="lang?.code === currentLanguage?.code" name="lucide-check" class="text-primary" />
					</transition>
				</div>
			</div>
		</template>
	</UIDropdown>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useLanguageSwitcher } from '@/composables/useLanguageSwitcher'

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

function onChangeLocale(code: string) {
	if (currentLanguage.value?.code !== code) {
		showDropdown.value = false
		if (['uz', 'en', 'ru'].includes(code)) {
			changeLocale(code as 'uz' | 'en' | 'ru')
		}
	}
}
</script>
