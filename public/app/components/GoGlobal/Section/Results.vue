<script setup>
import { useQuery } from '@tanstack/vue-query'

const commonStore = useCommonStore()

const { isPending, data } = useQuery({
	queryKey: ['go-global-results-section'],
	queryFn: () => {
		return commonStore.fetchStatistics({ limit: 8, type: 'go-global' })
	}
})
</script>

<template>
	<section class="container grid gap-9 relative py-16">
		<common-section-wrapper :title="$t('global_result_title')" highlighted-title />
		<div class="grid gap-6">
			<transition name="fade" mode="out-in">
				<div :key="isPending" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-2.5">
					<template v-if="isPending">
						<go-global-card-result-loading v-for="key in 4" :key="key" />
					</template>
					<template v-else>
						<go-global-card-result v-for="(item, index) in data?.results" :item="item" :key="item.id" :is-last="index === data?.results.length - 1" />
					</template>
				</div>
			</transition>
		</div>
	</section>
</template>
