<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'

const { $axios } = useNuxtApp()

const { isPending, data } = useQuery({
	queryKey: ['section-about'],
	queryFn: () => {
		return $axios.get('ielts/About/').then((res) => res.data?.results[0])
	}
})
</script>

<template>
	<section class="bg-[#030D21] relative h-full py-8 md:py-16 z-5 overflow-hidden">
		<div class="container grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
			<common-section-wrapper
				class="order-2 lg:order-1"
				:title="data?.title"
				:subtitle="data?.description"
				content-class="gap-6"
				title-class="!text-white !lowercase first-letter:uppercase"
				subtitle-class="!text-white !whitespace-pre-line"
			>
				<div class="flex flex-wrap gap-4 sm:gap-9">
					<div class="flex flex-col gap-1.5">
						<h4 class="text-white text-xl sm:text-[28px] font-bold">{{ $t('founder_name') }}</h4>
						<span class="text-gray-5 text-lg sm:text-xl leading-130">{{ $t('founder_role') }}</span>
					</div>
					<img src="/svg/signature.svg" class="w-auto max-sm:-rotate-[5.567deg]" />
				</div>
			</common-section-wrapper>
			<div class="order-1 lg:order-2 max-w-[545px] w-full lg:ml-auto mx-auto relative">
				<img :src="data?.image" alt="" class="size-full object-contain" />
				<div class="absolute bottom-0 w-full">
					<div class="flex flex-col items-center text-center gap-2 w-full px-4 pb-4 pt-3 glass-card rounded-2xl">
						<p class="leading-130 text-white">{{ $t('founder_follow') }}</p>
						<div class="flex justify-center gap-2.5 w-full">
							<a href="#" target="_blank" class="sm:basis-1/3 flex items-center gap-2 p-1.5 sm:py-2 sm:pl-2.5 sm:pr-3 bg-white/10 transition-300 hover:bg-white/30 rounded-xl group">
								<span alt="" class="icon-instagram text-2xl text-white" />
								<span class="hidden sm:block leading-130 text-gray-3 text-center flex-1 transition-300">Instagram</span>
							</a>
							<a href="#" target="_blank" class="sm:basis-1/3 flex items-center gap-2 p-1.5 sm:py-2 sm:pl-2.5 sm:pr-3 bg-white/10 transition-300 hover:bg-white/30 rounded-xl group">
								<span class="icon-telegram-fill text-2xl text-white" />
								<span class="hidden sm:block leading-130 text-gray-3 text-center flex-1 transition-300">Telegram</span>
							</a>
							<a href="#" target="_blank" class="sm:basis-1/3 flex items-center gap-2 p-1.5 sm:py-2 sm:pl-2.5 sm:pr-3 bg-white/10 transition-300 hover:bg-white/30 rounded-xl group">
								<span class="icon-youtube text-2xl text-white" />
								<span class="hidden sm:block leading-130 text-gray-3 text-center flex-1 transition-300">Youtube</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="w-[492px] h-[492px] flex-shrink-0 rounded-full opacity-50 bg-gray-3 filter blur-[250px] absolute -top-[246px] -left-[246px] z-[-1] max-md:hidden" />
		<div class="w-[492px] h-[492px] flex-shrink-0 rounded-full opacity-50 bg-gray-3 filter blur-[250px] absolute -bottom-[246px] -right-[246px]  max-md:hidden" />
		<div class="w-[492px] h-[492px] flex-shrink-0 rounded-full opacity-50 bg-red filter blur-[250px] absolute -top-[246px] -right-[246px]   max-md:hidden" />
		<div class="w-[492px] h-[492px] flex-shrink-0 rounded-full opacity-50 bg-red filter blur-[250px] absolute -bottom-[246px] -left-[246px] z-[-1]   max-md:hidden" />
	</section>
</template>
