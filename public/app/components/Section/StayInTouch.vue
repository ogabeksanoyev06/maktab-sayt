<template>
	<section class="py-8 md:py-16 bg-white">
		<div class="container">
			<common-section-wrapper :title="$t('stay_in_touch_title')" :subtitle="$t('stay_in_touch_subtitle')" highlighted-title direction="row" class="mb-8">
				<UIButton style="background-image: url('/images/instagram-gradient.png')" text="Follow" icon="icon-instagram" />
			</common-section-wrapper>
		</div>
		<transition name="fade" mode="out-in">
			<template v-if="isPending">
				<div class="flex flex-col gap-4 mx-auto overflow-hidden">
					<div class="flex justify-center gap-4">
						<div v-for="key in 8" :key="key" class="p-2 rounded-3xl bg-white aspect-[65/87] w-[195px] h-full shrink-0">
							<div class="relative rounded-3xl w-full h-full skeleton"></div>
						</div>
					</div>
					<div class="flex justify-center gap-4">
						<div v-for="key in 8" :key="key" class="p-2 rounded-3xl bg-white aspect-[65/87] w-[195px] h-full shrink-0">
							<div class="relative rounded-3xl w-full h-full skeleton"></div>
						</div>
					</div>
				</div>
			</template>
			<template v-else>
				<div class="flex flex-col gap-2.5">
					<UIMarquee :gap="'10px'" :repeat="20" :pause-on-hover="true" :overlay="false" class="mx-auto">
						<a
							v-for="(item, key) in data.results || []"
							:key
							:href="item.url"
							target="_blank"
							class="block w-[150px] aspect-[3/4] md:w-[195px] md:h-[261px] flex-shrink-0 md:aspect-[65/87] overflow-hidden rounded-2xl"
						>
							<img src="/images/instagram.png" alt="Instagram post" class="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
						</a>
					</UIMarquee>
					<UIMarquee :gap="'10px'" :repeat="20" :pause-on-hover="true" :overlay="false" reverse class="mx-auto">
						<a
							v-for="(item, key) in data.results || []"
							:key
							:href="item.url"
							target="_blank"
							class="block w-[150px] aspect-[3/4] md:w-[195px] md:h-[261px] flex-shrink-0 md:aspect-[65/87] overflow-hidden rounded-2xl"
						>
							<img src="/images/instagram.png" alt="Instagram post" class="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
						</a>
					</UIMarquee>
				</div>
			</template>
		</transition>
	</section>
</template>

<script setup>
import { useQuery } from '@tanstack/vue-query'

const { $axios } = useNuxtApp()

const { isPending, data } = useQuery({
	queryKey: ['stayInTouch-section'],
	queryFn: () => {
		return $axios
			.get('ielts/Videos/', {
				params: {
					limit: 12,
					video_type: VIDEO_TYPES.OTHER
				}
			})
			.then((res) => res.data)
	}
})
</script>
