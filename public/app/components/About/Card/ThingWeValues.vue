<template>
	<div
		class="relative bg-white border-2 max-xl:!translate-y-0 max-xl:!rotate-0 border-white rounded-[34px] max-w-[316px] min-h-[350px] h-full w-full flex flex-col items-start p-[80px_10px_10px_10px] sm:p-[88px_20px_20px_20px] gap-9 transition-transform duration-500"
		:style="{
			boxShadow,
			transform: `rotate(${rotate}) translateY(${translateY})`
		}"
	>
		<img :src="icon" alt="" class="aspect-[58.24/59.65] w-[85px] object-contain flex-shrink-0 absolute top-0 left-1/2 -translate-x-1/2" />
		<div
			class="flex flex-col items-start gap-2 p-[18px] border rounded-3xl w-full h-full flex-1"
			:style="{
				borderColor: color,
				backgroundColor: bgColor
			}"
		>
			<h1 class="text-5xl !leading-130 font-bold" :style="{ color }">{{ number }}</h1>
			<h3 class="text-[28px] font-bold !leading-130">{{ title }}</h3>
			<p class="text-base !leading-140 text-gray-600">{{ text }}</p>
		</div>
	</div>
</template>

<script setup lang="ts">
interface Props {
	number: string | number
	title: string
	text: string
	color?: string
	bgColor?: string
	rotate?: string
	translateY?: string
	boxShadow?: string
	icon?: string
}

const props = withDefaults(defineProps<Props>(), {
	color: '#FE8001',
	bgColor: '#FFF2EA',
	rotate: '-5deg',
	translateY: '20px',
	boxShadow:
		'-123px 230px 73px 0 rgba(117, 53, 0, 0),' +
		'-79px 147px 67px 0 rgba(117, 53, 0, 0.01),' +
		'-44px 83px 56px 0 rgba(117, 53, 0, 0.04),' +
		'-20px 37px 42px 0 rgba(117, 53, 0, 0.07),' +
		'-5px 9px 23px 0 rgba(117, 53, 0, 0.08)'
})
</script>
