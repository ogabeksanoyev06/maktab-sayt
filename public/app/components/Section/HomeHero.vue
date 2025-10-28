<template>
	<div class="max-md:pt-20 min-h-xl md:h-screen bg-white relative overflow-hidden">
		<div class="container mx-auto relative h-full grid grid-cols-12 items-center gap-6 py-8">
			<div class="col-span-12 md:col-span-7 flex flex-col relative z-10">
				<div class="flex flex-col items-start lg:gap-8 uppercase font-[900] text-3xl sm:text-4xl md:text-[40px] lg:text-[64px] text-gray-6 leading-10 sm:leading-[45px]">
					<div>{{ $t('join_us_to_become_a_real_achiever.1') }}</div>
					<div>{{ $t('join_us_to_become_a_real_achiever.2') }}</div>
					<div class="text-[#FE014D]">{{ $t('join_us_to_become_a_real_achiever.3') }}</div>
				</div>
				<p class="text-base md:text-lg lg:text-xl leading-[140%] text-[#1C2329] font-normal mt-1 md:mt-3 lg:mt-5 mb-3 md:mb-6 lg:mb-8">
					{{ $t('join_us_to_become_a_real_achiever.description') }}
				</p>
				<div class="flex gap-4">
					<UIButton class="min-w-[140px]" :text="$t('join')" />
					<UIButton class="min-w-[140px]" variant="secondary" :text="$t('learn_more')" />
				</div>
			</div>
			<img class="max-md:hidden aspect-[1345/635] min-w-[1345px] absolute bottom-0 -right-[487px] z-0" src="/images/home/hero.webp" alt="Hero section image" />
		</div>
	</div>
</template>

<script setup lang="ts"></script>
