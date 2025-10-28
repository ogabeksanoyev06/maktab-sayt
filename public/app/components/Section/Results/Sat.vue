<template>
	<div class="container md:py-16 py-8">
		<common-section-wrapper
			class="md:mb-8 mb-6"
			content-class="justify-between"
			:title="title || $t('sat_scores_title')"
			highlighted-title
			buttonLink="/results/sat"
		></common-section-wrapper>
		<transition name="fade" mode="out-in">
			<div :key="isPending" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
				<template v-if="isPending">
					<card-scores-loading v-for="key in 8" :key="key" />
				</template>
				<template v-else>
					<card-scores-sat v-for="(item, key) in data.results" :key="item.id || key" :item="item" />
				</template>
			</div>
		</transition>
	</div>
</template>

<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'

interface Props {
	title?: string
}

defineProps<Props>()

const { $axios } = useNuxtApp()

const { isPending, data } = useQuery({
	queryKey: ['section-sat'],
	queryFn: () => {
		return $axios
			.get('ielts/Result/SAT/', {
				params: { limit: 8 }
			})
			.then((res) => res.data)
	}
})
</script>
