<template>
	<UIDropdown
		:show="showDropdown"
		:head-class="['max-sm:border border-border h-9 max-sm:p-1.5 rounded-xl cursor-pointer flex items-center', isTransparent ? '' : '']"
		:body-class="['!min-w-[160px]', isTransparent ? '!bg-black' : '!bg-white']"
		@toggle="handleDropdownToggle"
	>
		<!-- HEAD -->
		<template #head>
			<img :src="currentLanguage?.flag" alt="" class="size-6" />
			<span class="mr-1.5 ml-1 text-sm leading-[100%] font-bold uppercase" :class="isTransparent ? 'text-white' : 'text-gray-6'">
				{{ currentLanguage?.code }}
			</span>

			<Icon name="lucide-chevron-down" :class="['transition-300', { 'rotate-180': showDropdown }, isTransparent ? 'text-white' : 'text-gray-6']" />
		</template>

		<!-- BODY -->
		<template #body>
			<div v-for="(lang, index) in languagesList" :key="index" class="w-full group border-b border-border/30 last:border-none">
				<div
					class="flex items-center justify-between gap-4 py-2 pl-3 pr-2 cursor-pointer transition-300"
					:class="isTransparent ? 'group-hover:bg-gray-900/50' : 'group-hover:bg-secondary'"
					@click="onChangeLocale(lang.code)"
				>
					<span class="text-left text-sm font-medium" :class="isTransparent ? 'text-white' : 'text-gray-800'">
						{{ lang.name }}
					</span>

					<transition name="fade">
						<Icon v-if="lang.code === currentLanguage?.code" name="lucide-check" class="text-primary" />
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
	isTransparent?: boolean
}
const props = withDefaults(defineProps<Props>(), {
	isTransparent: false
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
