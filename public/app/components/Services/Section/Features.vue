<script setup lang="ts">
interface Item {
	img: string
	title: string
	subtitle: string
}

const props = defineProps<{
	items: Item[]
}>()
</script>

<template>
	<section class="pb-8 md:pb-16">
		<div class="container">
			<common-section-wrapper class="items-center text-center md:!gap-8 mb-6 md:mb-8" :title="$t('features_title')" highlighted-title :subtitle="$t('features_description')">
				<UIButton :text="$t('features_cta')" class="max-sm:w-full" />
			</common-section-wrapper>
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				<ServicesCardFeature v-for="(item, index) in props.items" :key="index" :img="item.img" :title="item.title" :subtitle="item.subtitle" />
			</div>
		</div>
	</section>
</template>
