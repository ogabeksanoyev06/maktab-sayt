<template>
	<div class="flex-y-center flex-col mt-10">
		<div
			v-for="(item, index) in items"
			:key="index"
			class="grid-cols-[1fr_max-content] md:grid-cols-[1fr_max-content_1fr] justify-center gap-3 md:gap-7 max-w-[874px] min-h-[210px] items-center grid"
		>
			<div class="border rounded-lg bg-gray-4 border-gray-300 p-3 md:p-5 flex flex-row items-center gap-5 h-max" :class="index % 2 === 1 ? 'md:order-last' : ''">
				<div>
					<h3 class="text-base font-bold text-dark leading-130 mb-2">{{ item.title }}</h3>
					<p class="text-sm font-normal text-gray leading-140" v-html="item.description"></p>
				</div>
			</div>

			<div class="flex-y-center flex-col gap-2 h-full">
				<hr class="bg-gray-200 w-px border-none h-full" />
				<div
					class="w-9 h-9 md:w-[60px] md:h-[60px] border rounded-full text-xl md:text-2.5xl font-bold leading-130 flex-center shrink-0 bg-primary/10 text-primary border-primary/10"
				>
					{{ index + 1 }}
				</div>
				<hr class="bg-gray-200 w-px border-none h-full" v-if="index !== items?.length - 1" />
			</div>
			<div class="max-md:hidden" :class="index % 2 === 1 ? 'order-first' : ''"></div>
		</div>
	</div>
</template>

<script setup lang="ts">
interface Items {
	title?: string
	description?: string
	text?: string | number
}

defineProps<{
	items: Items[]
}>()
</script>
