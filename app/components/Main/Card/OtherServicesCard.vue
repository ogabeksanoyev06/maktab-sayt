<template>
	<nuxt-link-locale :to="card.link" class="p-2.5 bg-white rounded md:rounded-[24px] shadow-[0px_12px_24px_0px_rgba(0,0,0,0.06)] group">
		<div class="h-[200px] md:h-[320px] w-full overflow-hidden rounded-xl md:rounded bg-background relative">
			<img :src="card.img" :alt="card.title" class="w-full h-full object-cover relative z-1 group-hover:scale-[1.1] transition-300" />
			<div class="w-[258px] h-[258px] rounded-full blur-[60px] bg-[#0154F8] left-2.5 -top-10 absolute z-0 opacity-0 group-hover:opacity-100 transition-300"></div>
			<div class="w-[258px] h-[258px] rounded-full blur-[60px] bg-[#FE014D] -right-1 -bottom-20 absolute z-0 opacity-0 group-hover:opacity-100 transition-300"></div>
		</div>
		<div class="flex flex-col p-4 md:p-[30px] md:pt-6">
			<p class="text-2xl md:text-[28px] text-gray-6 font-bold !leading-130 mb-1 md:mb-3">{{ card.title }}</p>
			<p class="text-sm md:text-base !leading-140 text-gray-6 font-normal">{{ card.subtitle }}</p>
			<div class="flex items-center gap-1 pt-3 md:pt-5">
				<p class="text-base leading-130 text-primary font-bold">
					{{ $t('learn_more') }}
				</p>
				<Icon name="lucide-arrow-right" class="text-primary group-hover:translate-x-1 transition-300"></Icon>
			</div>
		</div>
	</nuxt-link-locale>
</template>

<script setup lang="ts">
interface Props {
	card: {
		img: string
		title: string
		subtitle: string
		link: string
	}
}
defineProps<Props>()
</script>
