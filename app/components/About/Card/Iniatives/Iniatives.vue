<template>
	<div
		class="flex md:flex-col max-h-[104px] sm:max-h-max rounded-xl w-full overflow-hidden cursor-pointer duration-200 border border-transparent group md:hover:!border-primary hover:!bg-transparent hover:!shadow-main bg-white"
	>
		<UIImage
			:src="item.image"
			class="overflow-hidden min-w-[124px] max-w-[281px] md:max-w-auto min-h-auto md:min-w-full md:min-h-[188px] aspect-[281/188] object-cover object-center rounded-t-xl"
		/>

		<div class="flex flex-col h-full p-3 sm:p-5 gap-2">
			<p class="font-bold text-sm sm:text-lg leading-tight">{{ item.title }}</p>
			<p class="text-xs sm:text-sm leading-snug">{{ item.subtitle }}</p>
		</div>
	</div>
</template>
<script setup lang="ts">
interface Props {
	item: {
		title: string
		subtitle: string
		image: string
		slug: string
	}
}

defineProps<Props>()
</script>
