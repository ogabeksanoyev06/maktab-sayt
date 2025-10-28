<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'

const { $axios } = useNuxtApp()

const { isPending, data } = useQuery({
	queryKey: ['section-faq'],
	queryFn: () => {
		return $axios
			.get('ielts/FAQ/', {
				params: { limit: 8 }
			})
			.then((res) => res.data)
	}
})
</script>

<template>
	<section class="container py-8 md:py-16 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_540px] xl:grid-cols-[minmax(0,1fr)_662px] gap-4 md:gap-6">
		<common-section-wrapper :title="$t('faq_title')" highlighted-title :subtitle="$t('faq_description')" :content-class="'gap-4'" />
		<transition name="fade" mode="out-in">
			<div v-if="isPending" class="flex flex-col gap-4">
				<div v-for="key in 4" :key class="bg-white border-2 border-white rounded-2xl shadow-card cursor-pointer h-[60px] flex items-center justify-between px-4">
					<div class="w-2/3 h-7 rounded skeleton"></div>
					<div class="size-7 rounded-full skeleton"></div>
				</div>
			</div>
			<UIAccordion v-else :items="data.results" :active-prop="0" />
		</transition>
	</section>
</template>
