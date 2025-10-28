<script setup lang="ts">
interface Props {
	title: string
	description: string
	image: string
	imageWrapperClass?: string
}
withDefaults(defineProps<Props>(), {
	imageWrapperClass: ''
})
</script>

<template>
	<section class="bg-white overflow-hidden max-md:py-8">
		<div class="container grid grid-cols-1 lg:grid-cols-2 items-center h-full">
			<common-section-wrapper class="sm:!gap-16" :title="title" highlighted-title :subtitle="description" :contentClass="'sm:!gap-8'">
				<div class="flex justify-center flex-col sm:flex-row sm:justify-start gap-4 w-full">
					<UIButton class="sm:max-w-[180px] !w-full">Let’s go!</UIButton>
					<UIButton variant="secondary" class="sm:max-w-[180px] !w-full">Learn more</UIButton>
				</div>
			</common-section-wrapper>

			<div class="flex-shrink-0 max-w-[552px] w-full mx-auto hidden md:block" :class="imageWrapperClass">
				<img :src="image" alt="hero-banner" class="size-full object-contain" />
			</div>
		</div>
	</section>
</template>
