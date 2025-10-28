<script setup lang="ts">
interface Props {
	title?: string
	subtitle?: string
	linkText?: string
	linkTo?: string
	isButton?: boolean
	highlightedTitle?: boolean
	actions?: boolean
	wrapperClass?: string
	titleClass?: string
	subtitleClass?: string
}

const props = withDefaults(defineProps<Props>(), {
	linkText: "Barchasini ko'rish",
	linkTo: '/',
	isButton: false,
	highlightedTitle: false,
	actions: true
})
</script>

<template>
	<div class="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-2">
		<div class="flex flex-col gap-0.5 items-start w-full" :class="[wrapperClass]">
			<h2 class="text-4xl !leading-130 font-semibold text-pretty section-title uppercase" :class="titleClass">
				<slot name="title">
					<div v-if="highlightedTitle" v-html="title"></div>
					<template v-else>{{ title }}</template>
				</slot>
			</h2>
			<p class="text-base text-pretty text-muted-foreground !leading-140" :class="subtitleClass">
				{{ props.subtitle }}
			</p>
		</div>
		<template v-if="props.actions">
			<slot name="action">
				<NuxtLink v-if="props.linkTo && !props.isButton" :to="props.linkTo" class="max-sm:w-full">
					<UIButton :icon="'i-lucide-arrow-right'">
						{{ props.linkText }}
					</UIButton>
				</NuxtLink>
				<UIButton v-else :icon="'i-lucide-arrow-right'" class="max-sm:w-full">
					{{ props.linkText }}
				</UIButton>
			</slot>
		</template>
		<slot />
	</div>
</template>

<style>
.section-title span {
	color: var(--color-primary);
}
.section-title span.text-gradient {
	background-image: url('/images/instagram-gradient.png');
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
}
</style>
