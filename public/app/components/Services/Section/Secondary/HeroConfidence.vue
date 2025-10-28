<script setup></script>

<template>
	<section class="pt-6 md:pt-[80px] bg-white">
		<div class="container flex flex-col justify-between gap-16">
			<common-section-wrapper
				class="!items-center !text-center max-w-[880px] mx-auto"
				:title="$t('hero_confidence_title')"
				highlighted-title
				:subtitle="$t('hero_confidence_subtitle')"
				:subtitleClass="'!text-xl !leading-140'"
				:content-class="'gap-6'"
			>
				<div class="flex md:justify-center flex-col md:flex-row gap-4 w-full">
					<UIButton :text="$t('lets_go')" class="md:max-w-[180px] w-full" />
					<UIButton :text="$t('learn_more')" variant="secondary" class="md:max-w-[180px] w-full" />
				</div>
			</common-section-wrapper>
			<div class="max-w-[473px] mx-auto flex-shrink-0">
				<img src="/images/HeroConfidenceImage.png" alt="" class="w-full h-auto object-contain" />
			</div>
		</div>
	</section>
</template>
