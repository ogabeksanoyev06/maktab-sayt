<template>
	<div class="relative w-full">
		<div class="flex items-center rounded cursor-pointer overflow-hidden border border-gray-200 duration-200 bg-gray-100 gap-3 pl-4 sm:max-w-[210px] md:max-w-[240px]">
			<p class="truncate text-sm font-semibold leading-130 pl-4">
				{{ link }}
			</p>

			<button class="w-10 h-10 ml-auto flex-center cursor-pointer shrink-0 bg-white leading-5 rounded-r transition-300 relative" @click="copy(link)">
				<Icon v-if="!show" name="lucide:copy" class="transition-300 text-muted" />
				<Icon v-else name="lucide:copy-check" class="transition-300 text-muted" />
			</button>
		</div>
		<UITooltip :show="show">
			{{ $t('copied') }}
		</UITooltip>
	</div>
</template>

<script setup lang="ts">
const link = ref('')
if (process.client) {
	link.value = window?.location?.href
}
const show = ref<boolean>(false)

function copy(text: string) {
	const input = document.createElement('input')
	input.value = text
	document.body.appendChild(input)
	input.select()
	document.execCommand('copy')
	document.body.removeChild(input)
	show.value = true
	setTimeout(() => {
		show.value = false
	}, 1500)
}
</script>
