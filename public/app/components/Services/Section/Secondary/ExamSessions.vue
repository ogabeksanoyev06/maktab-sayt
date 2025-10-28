<script setup>
import { useQuery } from '@tanstack/vue-query'

const { $axios } = useNuxtApp()

const items = [
	{
		img: '/svg/clock.svg',
		title: 'Real exam computers',
		time: '10:00-12:30'
	},
	{
		img: '/svg/clock.svg',
		title: 'Listening, Reading, Writing',
		time: '14:30-17:00'
	},
	{
		img: '/svg/clock.svg',
		title: 'Speaking',
		time: '18:30-21:00'
	}
]

const { isPending, data } = useQuery({
	queryKey: ['section-has-math'],
	queryFn: () => {
		return $axios
			.get('ielts/Branches/?has_cdi_mock=true', {
				limit: 8
			})
			.then((res) => res.data)
	}
})

const branchModal = ref(false)
const selectedBranch = ref(null)
const showBranchModal = (branch) => {
	selectedBranch.value = branch
	branchModal.value = true
}
</script>

<template>
	<section class="container grid gap-8 md:gap-16 relative md:py-16 py-8">
		<div class="grid gap-6 md:gap-9">
			<common-section-wrapper
				class="items-center text-center md:!gap-8"
				:title="$t('session_time_title')"
				highlighted-title
				:subtitle="$t('session_time_subtitle')"
				:content-class="'max-w-[750px] w-full'"
			/>
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				<ServicesCardSecondarySession v-for="(item, index) in items" :key="index" :icon="item.img" :title="item.title" :time="item.time" />
			</div>
		</div>
		<!-- branches -->
		<div class="grid gap-6 md:gap-7">
			<h2 class="text-xl md:text-2xl leading-130 font-bold text-center">{{ $t('branch_sessions_title') }}</h2>
			<transition name="fade" mode="out-in">
				<div :key="isPending" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
					<template v-if="isPending">
						<ServicesCardMathClassLoading v-for="key in 3" :key />
					</template>
					<template v-else>
						<ServicesCardMathClass v-for="(item, index) in data" :item="item" :key="index" @show-branch-modal="showBranchModal" />
					</template>
				</div>
			</transition>
		</div>
		<common-branch-modal v-model="branchModal" :branch="selectedBranch" />
	</section>
</template>
