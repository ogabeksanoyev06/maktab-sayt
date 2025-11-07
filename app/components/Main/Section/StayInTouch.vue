<template>
	<section ref="sectionRef" class="py-8 md:py-16 scroll-animate" :class="{ 'animate-in': isVisible }">
		<div class="container">
			<common-section-wrapper
				class="mb-4 md:mb-8 text-animate"
				:title="$t('stay_in_touch_title')"
				:subtitle="$t('stay_in_touch_subtitle')"
				highlighted-title
				:class="{ 'animate-in': isVisible }"
			>
				<template #action>
					<UIButton style="background-image: url('/images/instagram-gradient.png')" icon="lucide-instagram" class="!ring-0 sm:!max-w-[180px] w-full">
						{{ $t('stay_in_touch_follow') }}
					</UIButton>
				</template>
			</common-section-wrapper>
		</div>
		<div class="flex flex-col gap-2.5">
			<UIMarquee :gap="'10px'" :repeat="10" :pause-on-hover="true" :overlay="false" class="mx-auto">
				<a v-for="(item, key) in 10" :key href="#" target="_blank" class="block w-[195px] h-[261px] flex-shrink-0 aspect-[65/87] group overflow-hidden rounded">
					<UIImage alt="Instagram post" class="w-full h-full" image-class="transform transition-transform duration-300 group-hover:scale-110" src="/images/user.png" />
				</a>
			</UIMarquee>
			<UIMarquee :gap="'10px'" :repeat="10" :pause-on-hover="true" :overlay="false" reverse class="mx-auto">
				<a v-for="(item, key) in 10" :key href="#" target="_blank" class="block w-[195px] h-[261px] flex-shrink-0 aspect-[65/87] group overflow-hidden rounded">
					<UIImage alt="Instagram post" class="w-full h-full" image-class="transform transition-transform duration-300 group-hover:scale-110" src="/images/user.png" />
				</a>
			</UIMarquee>
		</div>
	</section>
</template>

<script setup>
const { elementRef: sectionRef, isVisible } = useScrollAnimation({
	threshold: 0.15,
	rootMargin: '0px 0px -100px 0px',
	triggerOnce: true
})
</script>
