<template>
	<section-cta-banner>
		<template #background>
			<img class="w-full h-auto absolute -top-11 -left-[128px] z-0 pointer-events-none" src="/images/go-global/pattern.svg" alt="" />
		</template>
		<div class="relative z-10 flex flex-col items-start">
			<img src="/images/go-global/logo.svg" alt="Go Global" class="w-full max-w-[377px] aspect-[377/100] object-contain object-left" />
			<h3 class="text-xl md:text-2xl leading-130 font-bold text-gray-6 mt-8 md:mt-16 mb-2 md:mb-4">{{ $t('go_global_section_title') }}</h3>
			<p class="whitespace-pre-line">{{ $t('go_global_section_description') }}</p>
			<div class="flex flex-wrap gap-4 mt-5 md:mt-10 text-base font-normal leading-140 text-gray-6">
				<UIButton class="min-w-[140px]" :text="$t('go_global')" icon="icon-phone-call text-xl leading-5" />
				<nuxt-link-locale to="/go-global">
					<UIButton class="min-w-[140px]" variant="secondary" :text="$t('learn_more')" icon="icon-arrow text-xl leading-5" />
				</nuxt-link-locale>
			</div>
		</div>
	</section-cta-banner>
</template>
