<script setup lang="ts">
interface LevelItem {
	id: number
	title: string
	description: string
	icon: string
	img: string
	price: number
	has_kids: boolean
	duration: string
	expected_result: string
}

const props = defineProps<{
	item: LevelItem
}>()

const isPriceVisible = ref(false)

const togglePrice = () => {
	isPriceVisible.value = !isPriceVisible.value
}
</script>
<template>
	<div class="bg-white p-8 rounded-[32px] shadow-card flex flex-col items-start gap-6 sm:gap-16 relative overflow-hidden w-full min-h-[480px]">
		<img :src="item.icon" :alt="item.title" class="size-16 sm:size-[80px] aspect-square" />
		<div class="flex flex-col items-start">
			<h3 class="text-2xl sm:text-[28px] font-bold !leading-130">{{ item.title }}</h3>
			<p class="text-sm sm:text-base !leading-140 mt-3">
				{{ item.description }}
			</p>
			<div class="mt-3 w-full border border-gray-1 border-dashed rounded-2xl flex items-center justify-between">
				<div class="flex-y-center p-2 sm:p-5 gap-2 sm:gap-5 flex-1">
					<img src="/svg/duration.svg" alt="" class="sm:size-9 size-6 aspect-square" />
					<div class="flex flex-col sm:gap-[3px]">
						<p class="text-sm text-gray-5 leading-130">Duration:</p>
						<p class="font-medium text-sm sm:text-base leading-130">{{ item.duration }}</p>
					</div>
				</div>
				<div class="h-[42px] w-px bg-background"></div>
				<div class="flex-y-center p-2 sm:p-5 gap-2 sm:gap-5 flex-1">
					<img src="/svg/expected.svg" alt="" class="sm:size-9 size-6 aspect-square" />
					<div class="flex flex-col sm:gap-[3px]">
						<p class="text-sm text-gray-5 leading-130">Expected:</p>
						<p class="font-medium text-sm sm:text-base leading-130">{{ item.expected_result }}</p>
					</div>
				</div>
			</div>
			<div class="grid grid-cols-2 gap-3 mt-5 w-full">
				<UIButton :text="isPriceVisible ? formatMoneyDecimal(item.price) : $t('cta_secondary')" variant="secondary" class="!rounded-xl" @click="togglePrice" />
				<UIButton :text="$t('cta_primary')" class="!rounded-xl" />
			</div>
		</div>
		<img :src="item.img" :alt="item.title" class="absolute -top-6 right-5" />
	</div>
</template>
