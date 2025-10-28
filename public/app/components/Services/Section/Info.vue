<script setup lang="ts">
interface Props {
	img: string
	title: string
	subtitle: string
}
defineProps<Props>()
</script>

<template>
	<section class="container grid gap-3 grid-cols-1 lg:grid-cols-2 items-center">
		<common-section-wrapper class="items-start !gap-7" :title="title" highlighted-title :subtitle="subtitle">
			<div class="flex flex-col sm:flex-row gap-4 w-full">
				<UIButton :text="$t('cta_primary')" class="sm:!max-w-[180px] w-full" />
				<UIButton variant="secondary" :text="$t('cta_secondary')" class="sm:!max-w-[180px] w-full" />
			</div>
		</common-section-wrapper>
		<img :src="img" alt="" class="size-full object-contain ml-auto" />
	</section>
</template>
