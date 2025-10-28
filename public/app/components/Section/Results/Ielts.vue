<template>
	<div class="container py-8 md:py-16">
		<common-section-wrapper
			class="mb-4 md:mb-8"
			content-class="justify-between"
			:title="title || $t('ielts_scores')"
			:subtitle
			highlighted-title
			buttonLink="/results/ielts"
		></common-section-wrapper>
		<transition name="fade" mode="out-in">
			<div :key="isPending" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
				<template v-if="isPending">
					<card-scores-loading v-for="key in 8" :key="key" />
				</template>
				<template v-else>
					<card-scores-ielts v-for="(item, key) in data.results" :key="item.id || key" :item="item" />
				</template>
			</div>
		</transition>
	</div>
</template>

<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'

interface Props {
	title?: string
	subtitle?: string
}
defineProps<Props>()

const { $axios } = useNuxtApp()

const { isPending, data } = useQuery({
	queryKey: ['section-ielts'],
	queryFn: () => {
		return $axios
			.get('ielts/Result/Ielts/', {
				params: { limit: 8 }
			})
			.then((res) => res.data)
	}
})
</script>
