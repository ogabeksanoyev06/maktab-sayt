<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'

const { $axios } = useNuxtApp()

const { isPending, data } = useQuery({
	queryKey: ['section-has-math'],
	queryFn: () => {
		return $axios
			.get('ielts/Branches/?has_math=true', {
				limit: 8
			})
			.then((res) => res.data)
	}
})

const branchModal = ref(false)
const selectedBranch = ref<any>(null)
const showBranchModal = (branch: any) => {
	console.log(branch)
	selectedBranch.value = branch
	branchModal.value = true
}
</script>

<template>
	<section class="md:py-16 py-8">
		<div class="container grid gap-6 md:gap-9">
			<common-section-wrapper class="items-center text-center" :title="$t('math_classes_title')" />
			<transition name="fade" mode="out-in">
				<div :key="isPending" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
