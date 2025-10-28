<template>
	<section class="bg-gray-6 py-[100px] relative z-5 overflow-hidden">
		<img src="/images/about/background-patterns.png" alt="" class="absolute inset-0 w-full z-[-1]" />
		<div class="container">
			
			<common-section-wrapper
				class="items-center justify-center mb-10"
				:title="$t('future_openings_title')"
				:subtitle="$t('future_openings_subtitle')"
				content-class="items-center text-center w-fit"
				title-class="text-white"
				subtitle-class="text-white max-w-[605px]"
				highlighted-title
			/>
			<transition name="fade" mode="out-in">
				<div v-if="isPending" class="grid sm:grid-cols-2 gap-7">
					<about-card-future-loading v-for="key in 2" :key />
				</div>
				<div v-else class="flex flex-wrap gap-7 justify-center">
					<about-card-future v-for="(item, index) in data?.results" :item="item" :index="index" />
				</div>
			</transition>
		</div>
	</section>
</template>

<script setup>
import { useQuery } from '@tanstack/vue-query'

const { $axios } = useNuxtApp()

const { isPending, data } = useQuery({
	queryKey: ['section-about-future'],
	queryFn: () => {
		return $axios
			.get('ielts/FutureOpenings/', {
				params: { limit: 8 }
			})
			.then((res) => res.data)
	}
})
</script>
