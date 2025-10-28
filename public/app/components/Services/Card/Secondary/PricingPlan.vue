<script setup lang="ts">
interface Props {
	item: {
		session_number: number
		title: string
		price: number
		sessions: Array
	}
}
const props = defineProps<Props>()
</script>

<template>
	<div class="bg-white border-2 border-white p-5 rounded-3xl flex flex-col justify-between gap-16 md:gap-[100px] group">
		<div class="flex flex-col gap-4 md:gap-6">
			<div
				class="flex-center size-16 rounded-full bg-[linear-gradient(180deg,_#F5F7FA_-66.9%,_#C5C7C9_100.01%)] group-hover:bg-[linear-gradient(180deg,_#6395F8_-66.9%,_#0154F8_100.01%)]"
			>
				<span class="text-[40px] font-extrabold leading-130 group-hover:text-white transition-300">{{ item.session_number }}</span>
			</div>
			<div class="flex flex-col gap-2.5">
				<h1 class="text-2xl md:text-[32px] !leading-130 font-extrabold uppercase max-w-[200px]">
					{{ item.title }}
				</h1>
				<div class="flex-center border border-gray-2 rounded-full px-4 py-2 sm:py-2.5">
					<span class="text-base sm:text-xl font-medium !leading-130 text-center">{{ formatMoneyDecimal(item.price) }} UZS</span>
				</div>
			</div>
			<div class="flex flex-col items-start gap-0.5">
				<p class="flex-center gap-1.5 text-sm leading-140" v-for="(item, key) in item.sessions" :key>
					<span class="size-1.5 rounded-full bg-gray-3 transition-300 group-hover:bg-blue"></span>
					{{ item }}
				</p>
			</div>
		</div>
		<UIButton variant="secondary" :text="$t('choose_plan')" class="group-hover:bg-[linear-gradient(180deg,_#6395F8_-66.9%,_#0154F8_100.01%)] group-hover:text-white" />
	</div>
</template>
