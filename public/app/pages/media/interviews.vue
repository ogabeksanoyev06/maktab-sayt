<template>
	<div class="md:pt-[var(--header-height)] pt-[80px]">
		<UIBreadcrumb :routes="breadcrumbItems" />
		<div class="container">
			<common-section-wrapper class="items-center text-center !gap-8 py-8 md:py-16" :title="$t('interviews_title')" highlighted-title :subtitle="$t('interviews_desc')" />
			<div class="flex flex-col items-center gap-8 pb-16">
				<transition name="fade" mode="out-in">
					<div :key="isPending" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
						<template v-if="isPending">
							<card-media-loading v-for="key in 6" :key="key" />
						</template>
						<template v-else>
							<template v-for="page in data?.pages" :key="page">
								<card-media v-for="(item, key) in page.results || []" :key="item.id || key" :item="item" />
							</template>
						</template>
					</div>
				</transition>

				<transition name="fade" mode="out-in">
					<div v-if="!isPending && hasNextPage" class="flex items-center justify-center">
						<UIButton :loading="isFetchingNextPage" :disabled="isFetchingNextPage" @click="fetchNextPage" :text="$t('btn_more')" icon="icon-arrow rotate-90 text-2xl leading-6" />
					</div>
				</transition>
			</div>
		</div>
		<SectionMediaTalks />
	</div>
</template>

<script setup>
import { useInfiniteQuery } from '@tanstack/vue-query'

const { t } = useI18n()
const { $axios } = useNuxtApp()

const { isPending, data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
	queryKey: ['interviews'],
	queryFn: ({ pageParam = 0 }) => {
		return $axios
			.get('ielts/Videos/', {
				params: {
					limit: 8,
					offset: pageParam,
					video_type: VIDEO_TYPES.INTERVIEWS
				}
			})
			.then((res) => res.data)
	},
	getNextPageParam: (lastPage, allPages) => getNextPageOffset(lastPage, allPages, 8),
	initialPageParam: 0
})

const breadcrumbItems = [
	{
		name: t('everest_interviews'),
		path: '/media/interviews'
	}
]
</script>
