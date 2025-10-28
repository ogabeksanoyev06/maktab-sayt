<template>
	<div class="md:pt-[var(--header-height)] pt-[80px]">
		<UIBreadcrumb :routes="breadcrumbItems" />
		<div class="container py-8 md:py-16">
			<common-section-wrapper class="mb-6 md:mb-8" content-class="justify-between" :title="$t('ielts_scores')" highlighted-title :direction="'row'">
				<template #rightSide>
					<FormInputSearch v-model="search" />
				</template>
			</common-section-wrapper>
			<transition name="fade" mode="out-in">
				<div :key="isPending" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
					<template v-if="isPending">
						<card-scores-loading v-for="key in 8" :key="key" />
					</template>
					<template v-else>
						<template v-for="page in data?.pages" :key="page">
							<card-scores-ielts v-for="(item, key) in page.results || page.data || page" :key="item.id || key" :item="item" :search="search" />
						</template>
					</template>
				</div>
			</transition>

			<transition name="fade" mode="out-in">
				<div v-if="!isPending && hasNextPage" class="flex items-center justify-center">
					<UIButton
						class="mx-auto mt-9"
						:loading="isFetchingNextPage"
						:disabled="isFetchingNextPage"
						@click="fetchNextPage"
						:text="$t('btn_more')"
						icon="icon-arrow rotate-90 text-2xl leading-6"
					/>
				</div>
			</transition>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useInfiniteQuery } from '@tanstack/vue-query'
import { refDebounced } from '@vueuse/core'
import { useRouteQuery } from '@vueuse/router'

const { t } = useI18n()
const { $axios } = useNuxtApp()
const search = useRouteQuery('search', '')
const searchDebounced = refDebounced(search, 500)

const { isPending, data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
	queryKey: ['ielts', searchDebounced],
	queryFn: ({ pageParam = 0 }) => {
		return $axios
			.get('ielts/Result/Ielts/', {
				params: {
					limit: 8,
					offset: pageParam,
					search: searchDebounced.value || undefined
				}
			})
			.then((res) => res.data)
	},
	getNextPageParam: (lastPage, allPages) => getNextPageOffset(lastPage, allPages, 8),
	initialPageParam: 0
})

const breadcrumbItems = [
	{
		name: t('results'),
		path: '/results'
	},
	{
		name: t('ielts_scores_simple'),
		path: '/results/ielts'
	}
]
</script>
