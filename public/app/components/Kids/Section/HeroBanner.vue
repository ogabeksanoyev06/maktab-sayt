<script setup></script>

<template>
	<section class="relative flex items-center bg-blue md:h-screen md:min-h-[600px] overflow-hidden z-5 py-20">
		<img src="/images/kids/pattern.svg" alt="Kids bg" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full" />
		<div class="container grid grid-cols-1 justify-between lg:grid-cols-12 relative h-full">
			<common-section-wrapper
				class="!gap-9 md:!gap-16 justify-center lg:col-span-7 max-lg:items-center max-lg:text-center"
				content-class="md:!gap-8"
				:title="$t('foundation_title')"
				highlighted-title
				:subtitle="$t('foundation_desc')"
				title-class="text-white font-medium md:!text-[56px] !leading-120"
				subtitle-class="!text-white"
			>
				<UIButton :text="$t('call_us')" class="bg-white !text-blue" />
			</common-section-wrapper>
		</div>
		<div class="lg:flex hidden absolute right-[33px] bottom-0 h-full aspect-[647/647] flex-shrink-0 pt-5 z-[-1]">
			<img src="/images/KidsHeroBanner.webp" alt="" class="object-contain mx-auto size-full" />
		</div>
		<img src="/images/kids/bg.webp" alt="" class="absolute bottom-0 w-full lg:block hidden" />
	</section>
</template>
