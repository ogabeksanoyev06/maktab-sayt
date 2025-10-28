<template>
	<div class="flex items-center rounded cursor-pointer overflow-hidden border border-gray-200 duration-200 bg-gray-100 gap-3 pl-4 !w-full md:!w-max" @click="print">
		<p class="truncate text-sm font-semibold leading-130 pl-4">
			{{ $t('print_out') }}
		</p>
		<button class="w-10 h-10 ml-auto flex-center cursor-pointer shrink-0 bg-white leading-5 rounded-r transition-300 relative">
			<Icon name="lucide:printer-check" class="transition-300 text-muted" />
		</button>
	</div>
</template>

<script setup lang="ts">
const print = () => {
	window.print()
}
</script>
