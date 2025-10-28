<script setup lang="ts">
interface Props {
	img: string
	title: string
	subtitle: string
}
defineProps<Props>()
</script>

<template>
	<div class="bg-white flex flex-col items-start gap-4 sm:gap-16 p-4 sm:p-8 rounded-[32px] overflow-hidden relative z-1">
		<img :src="img" :alt="title" class="size-12 sm:size-[80px] flex-shrink-0" />
		<div class="grid gap-3 sm:gap-8 w-full">
			<div class="flex flex-col gap-2 sm:gap-3">
				<h3 class="text-xl sm:text-2xl md:text-[28px] font-bold !leading-130">{{ title }}</h3>
				<p class="text-sm sm:text-base !leading-140">{{ subtitle }}</p>
			</div>
			<div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
				<UIButton :text="$t('cta_secondary')" variant="secondary" />
				<UIButton :text="$t('call_us')" />
			</div>
		</div>
		<img src="/svg/kids/rocket-bg-icon.svg" alt="" class="absolute -top-[15px] right-[62px] w-[168px] h-[320px] z-0" />
	</div>
</template>
