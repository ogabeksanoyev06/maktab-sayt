<script setup>
import { useQuery } from '@tanstack/vue-query'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const { $axios } = useNuxtApp()

const { isPending, data } = useQuery({
	queryKey: ['MockSessions-section'],
	queryFn: () => $axios.get('ielts/MockSessions/').then((res) => res.data)
})
const formattedData = computed(() => {
	if (!data.value) return []
	return data.value?.results.map((item, i) => {
		const text = t(`mock_sessions.${i + 1}`)
		const sessions = text.split(',').map((str) => str.trim())
		return {
			...item,
			sessions
		}
	})
})
</script>

<template>
	<section class="container py-8 md:py-16">
		<transition name="fade" mode="out-in">
			<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
				<template v-if="isPending">
					<div v-for="key in 4" :key="key" class="flex flex-col justify-between p-6 rounded-[20px] bg-white aspect-[9/16] w-[278px] shrink-0">
						<div class="flex flex-col gap-6">
							<div class="relative rounded-full overflow-hidden w-16 h-16 skeleton"></div>

							<div class="flex flex-col gap-2.5">
								<div class="relative rounded-full overflow-hidden w-1/4 h-6 skeleton"></div>
								<div class="relative rounded-full overflow-hidden w-1/2 h-6 skeleton"></div>
								<div class="relative rounded-full overflow-hidden w-full h-12 skeleton"></div>
							</div>
							<div class="flex flex-col gap-2.5">
								<div class="relative rounded overflow-hidden w-1/2 h-3 skeleton"></div>
								<div class="relative rounded overflow-hidden w-1/2 h-3 skeleton"></div>
							</div>
						</div>
						<div class="relative rounded-xl overflow-hidden w-full h-10 skeleton"></div>
					</div>
				</template>
				<template v-else>
					<ServicesCardSecondaryPricingPlan v-for="(item, key) in formattedData" :item="item" :key />
				</template>
			</div>
		</transition>
	</section>
</template>
