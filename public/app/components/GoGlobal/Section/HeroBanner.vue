<script setup></script>

<template>
	<section class="relative md:h-screen md:min-h-[600px] bg-[#00102E] z-5 overflow-hidden pt-24 max-md:pb-10 md:pt-[164px]">
		<div class="container flex flex-col items-center text-center gap-6 md:gap-9">
			<img src="/images/go-global/logo.webp" alt="" class="w-full max-w-[377px] aspect-[377/100] object-contain object-left flex-shrink-0" />
			<div class="flex flex-col items-center gap-6">
				<p
					class="text-base sm:text-xl text-white font-bold !leading-130 text-center p-4 sm:px-9 sm:py-6 max-w-[580px] w-full !bg-black/10 !backdrop-blur-3xl glass-card rounded-[28px]"
				>
					Get Expert Help to Apply, Win Scholarships, and Study at Leading Global Universities
				</p>
				<UIButton :text="$t('go_global')" :icon="'icon-phone'" class="max-w-[200px] w-full" />
			</div>
		</div>
		<img src="/svg/go-global/hero-bg-icon.svg" class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[-2]" />
		<img src="/images/global-hero.webp" class="absolute bottom-0 right-0 left-0 min-w-[1440px] aspect-[1440/475] z-[-2] hidden md:block" />
		<div class="bg-blue rounded-full size-[492px] blur-[250px] absolute -top-1/2 -left-[187px] z-[-1]"></div>
		<div class="bg-red rounded-full size-[492px] blur-[250px] absolute -bottom-[230px] -right-[220px] z-[-1]"></div>
	</section>
</template>
