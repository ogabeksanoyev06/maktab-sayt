<script setup>
const { t } = useI18n()

const breadcrumbItems = [
	{
		name: t('careers'),
		path: ''
	}
]
</script>

<template>
	<div class="md:pt-[var(--header-height)] pt-[80px]">
		<UIBreadcrumb :routes="breadcrumbItems" />
		<section class="bg-white">
			<div class="container py-8 md:py-16">
				<div class="max-w-[982px] mx-auto grid gap-8">
					<common-section-wrapper content-class="items-center text-center" :title="$t('career_title')" :subtitle="$t('career_subtitle')" highlighted-title>
						<div class="flex flex-col justify-center sm:flex-row gap-4 w-full">
							<UIButton :text="$t('cta_connect_btn_primary')" class="sm:max-w-[200px] w-full" :icon="'icon-phone'" />
							<UIButton variant="secondary" :text="$t('btn_more')" class="sm:max-w-[200px] w-full" />
						</div>
					</common-section-wrapper>
					<div class="relative rounded-[30px] overflow-hidden z-10">
						<img src="/images/careers-video.png" alt="" class="w-full h-[350px] sm:h-[500px] rounded-[30px] object-cover" />
						<img src="/images/Stroke.png" alt="" class="absolute inset-0 w-full h-full" />
						<div class="absolute inset-0 bg-gray-6 opacity-20 z-[-1]"></div>
						<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-1">
							<button class="size-14 sm:size-[72px] flex-center bg-[#1C232914] rounded-full">
								<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none" class="size-8 sm:size-10">
									<path
										d="M27.7624 15.4764C30.162 16.9761 31.3618 17.726 31.7732 18.686C32.1325 19.5245 32.1325 20.4736 31.7732 21.3121C31.3618 22.2721 30.162 23.022 27.7624 24.5217L16.492 31.5657C13.8288 33.2303 12.4972 34.0625 11.3983 33.9742C10.4404 33.8972 9.56234 33.4105 8.98936 32.6391C8.33203 31.754 8.33203 30.1837 8.33203 27.0431V12.9551C8.33203 9.81443 8.33203 8.24411 8.98936 7.35907C9.56234 6.5876 10.4404 6.10095 11.3983 6.02395C12.4972 5.9356 13.8288 6.76787 16.492 8.4324L27.7624 15.4764Z"
										stroke="white"
										stroke-width="3"
										stroke-linejoin="round"
									/>
								</svg>
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
		<careers-section-stats />
		<section-cta-banner>
			<common-section-wrapper :title="$t('cta_connect_title')" highlighted-title />
			<div class="flex flex-col gap-[14px] mt-5">
				<h4 class="text-lg sm:text-2xl font-bold !leading-130">{{ $t('cta_connect_subtitle') }}</h4>
				<p class="text-sm sm:text-base !leading-140">{{ $t('cta_connect_description') }}</p>
			</div>
			<div class="flex flex-col sm:flex-row gap-4 mt-9 w-full">
				<UIButton :text="$t('cta_connect_btn_primary')" class="sm:max-w-[200px] w-full" :icon="'icon-phone'" />
				<UIButton variant="secondary" :text="$t('btn_more')" class="sm:max-w-[200px] w-full" />
			</div>
		</section-cta-banner>
		<section-cta-banner reverse>
			<common-section-wrapper :title="$t('cta_explore_title')" highlighted-title />
			<div class="flex flex-col gap-[14px] mt-5">
				<h4 class="text-lg sm:text-2xl font-bold !leading-130">{{ $t('cta_explore_subtitle') }}</h4>
				<p class="text-sm sm:text-base !leading-140">{{ $t('cta_explore_description') }}</p>
			</div>
		</section-cta-banner>
		<careers-section-instructor-steps />
		<common-faq />
		<common-contact-form class="md:mx-9" />
	</div>
</template>
