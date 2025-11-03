<template>
	<UIDropdown
		:show="showDropdown"
		:head-class="[
			'sm:px-4 py-3 flex items-center gap-2 text-sm font-medium leading-130 transition-300 cursor-pointer border-white/10 lg:hover:bg-white/10',
			isWhiteMode ? '!text-white' : '!text-foreground'
		]"
		:body-class="[
			'!min-w-[160px]',
			isWhiteMode ? '!bg-black' : '!bg-white'
		]"
		@toggle="handleDropdownToggle"
	>
		<template #head>
			<div class="flex-y-center">
				<Icon name="lucide:globe" :class="isWhiteMode ? 'text-white' : 'text-foreground'" />

				<span
					class="hidden sm:inline-block ml-2 mr-1 text-sm font-semibold cursor-pointer"
					:class="isWhiteMode ? 'text-white' : 'text-foreground'"
				>
					{{ currentLanguage?.name }}
				</span>

				<Icon
					name="lucide-chevron-down"
					:class="[
						'transition-300',
						{ 'rotate-180': showDropdown },
						isWhiteMode ? 'text-white' : 'text-foreground'
					]"
				/>
			</div>
		</template>

		<template #body>
			<div
				v-for="(lang, index) in languagesList"
				:key="index"
				class="w-full group border-b border-border/30 last:border-none"
			>
				<div
					class="flex items-center justify-between gap-4 py-2 pl-3 pr-2 cursor-pointer transition-300"
					:class="isWhiteMode ? 'group-hover:bg-gray-900/50' : 'group-hover:bg-secondary'"
					@click="onChangeLocale(lang.code)"
				>
					<span
						class="text-left text-sm font-medium"
						:class="isWhiteMode ? 'text-white' : 'text-foreground'"
					>
						{{ lang.name }}
					</span>

					<transition name="fade">
						<Icon
							v-if="lang.code === currentLanguage?.code"
							name="lucide-check"
							class="text-primary"
						/>
					</transition>
				</div>
			</div>
		</template>
	</UIDropdown>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useWindowScroll } from '@vueuse/core'
import { useLanguageSwitcher } from '@/composables/useLanguageSwitcher'

interface Props {
	isTransparent?: boolean
	showChildren?: boolean
}
const props = defineProps<Props>()

const { y } = useWindowScroll()

const isWhiteMode = computed(() => {
	if (!props.isTransparent) return false
	if (props.showChildren) return false
	return y.value < 80
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

