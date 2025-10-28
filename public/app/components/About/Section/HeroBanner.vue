<template>
	<section class="relative z-5 lg:h-screen lg:min-h-[600px] overflow-hidden bg-white pt-24 md:pt-28 pb-6 lg:pt-[170px]">
		<div class="container h-full">
			<common-section-wrapper class="h-full max-lg:items-center max-lg:justify-center" content-class="items-center text-center" :title="$t('about_title')" :subtitle="$t('about_description')" highlighted-title />
		</div>
		<img src="/images/about/bg.png" alt="" class="absolute -bottom-5 w-full z-[-1] lg:block hidden" />

		<UIMarquee :overlay="false" :repeat="10" class="bg-blue py-2.5 absolute rotate-[6.697deg] w-[3000px] bottom-[100px] lg:block hidden z-[-1]">
			<div class="flex-y-center space-x-[38px]">
				<span class="text-[21px] leading-130 text-white font-medium uppercase">{{ $t('about_marquee_section.text1') }}</span>
				<span class="size-2.5 bg-white rounded-full" />
				<span class="text-[21px] leading-130 text-white font-medium uppercase">{{ $t('about_marquee_section.text2') }}</span>
				<span class="size-2.5 bg-white rounded-full" />
				<span class="text-[21px] leading-130 text-white font-medium uppercase">{{ $t('about_marquee_section.text3') }}</span>
			</div>
		</UIMarquee>
	</section>
</template>

<script setup></script>
