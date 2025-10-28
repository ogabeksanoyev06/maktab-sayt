<template>
	<section class="py-8 md:py-16">
		<div class="container">
			<common-section-wrapper class="mb-4 md:mb-8" :title="$t('stay_in_touch_title')" :subtitle="$t('stay_in_touch_subtitle')" highlighted-title>
				<template #action>
					<UIButton style="background-image: url('/images/instagram-gradient.png')" icon="lucide-instagram" class="!ring-0 sm:!max-w-[180px] w-full">
						{{ $t('stay_in_touch_follow') }}
					</UIButton>
				</template>
			</common-section-wrapper>
		</div>
		<transition name="fade" mode="out-in">
			<div class="flex flex-col gap-2.5">
				<UIMarquee :gap="'10px'" :repeat="10" :pause-on-hover="true" :overlay="false" class="mx-auto">
					<a v-for="(item, key) in 10" :key href="#" target="_blank" class="block w-[195px] h-[261px] flex-shrink-0 aspect-[65/87] group overflow-hidden rounded">
						<UIImage
							alt="Instagram post"
							class="w-full h-full"
							image-class="transform transition-transform duration-300 group-hover:scale-110"
							src="https://tmci.uz/files/cache/af/ca/afca06d0146472bad811dec2e5ada51c.jpg"
						/>
					</a>
				</UIMarquee>
				<UIMarquee :gap="'10px'" :repeat="10" :pause-on-hover="true" :overlay="false" reverse class="mx-auto">
					<a v-for="(item, key) in 10" :key href="#" target="_blank" class="block w-[195px] h-[261px] flex-shrink-0 aspect-[65/87] group overflow-hidden rounded">
						<UIImage
							alt="Instagram post"
							class="w-full h-full"
							image-class="transform transition-transform duration-300 group-hover:scale-110"
							src="https://tmci.uz/files/cache/af/ca/afca06d0146472bad811dec2e5ada51c.jpg"
						/>
					</a>	
				</UIMarquee>
			</div>
		</transition>
	</section>
</template>

<script setup></script>
