<template>
	<div class="pt-5">
		<div class="container">
			<common-section-wrapper class="mb-6 md:mb-8" :title="$t('teachers_results_title')" highlighted-title :actions="false">
				<FormInputSearch v-model="search" />
			</common-section-wrapper>
			<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
				<card-scores-pupils v-for="key in 8" :key />
			</div>

			<div class="flex items-center justify-center">
				<UIButton class="mx-auto mt-9" :loading="isFetchingNextPage" :disabled="isFetchingNextPage" @click="fetchNextPage" :text="$t('btn_more')" icon="lucide-arrow-down" />
			</div>
		</div>
	</div>
</template>

<script setup>
const search = ref('')
</script>
