<template>
	<div class="pt-[100px] bg-gray-6">
		<LayoutHeader color="dark" />
		<UIBreadcrumb :routes="breadcrumbItems" transparent />
		<div class="container py-8 md:py-16">
			<common-section-wrapper
				class="items-center text-center !gap-8 mb-8 md:mb-16"
				wrapper-class="!justify-center"
				:title="$t('champions_title')"
				highlighted-title
				:subtitle="$t('champions_desc')"
				title-class="text-white"
				subtitle-class="text-white"
			/>
			<transition name="fade" mode="out-in">
				<div :key="isPending" class="grid md:grid-cols-2 gap-6">
					<template v-if="isPending">
						<card-niner-loading v-for="key in 8" :key="key" />
					</template>
					<template v-else>
						<template v-for="page in data?.pages" :key="page">
							<card-niner v-for="(item, key) in page.results" :key="item.id || key" :item="item" />
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
		<LayoutFooter />
	</div>
</template>

<script setup lang="ts">
const { t } = useI18n()
import { useInfiniteQuery } from '@tanstack/vue-query'

const { $axios } = useNuxtApp()

definePageMeta({
	layout: 'empty'
})

const breadcrumbItems = [
	{
		name: t('niners'),
		path: '/niners'
	}
]

const { isPending, data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
	queryKey: ['niners'],
	queryFn: ({ pageParam = 0 }) => {
		return $axios
			.get('ielts/Result/Niner/', {
				params: {
					limit: 8,
					offset: pageParam,
				}
			})
			.then((res) => res.data)
	},
	getNextPageParam: (lastPage, allPages) => getNextPageOffset(lastPage, allPages, 8),
	initialPageParam: 0
})
</script>
