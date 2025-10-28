<script setup lang="ts">
interface Props {
	title?: string
	subtitle?: string
	buttonText?: string
	buttonLink?: string
	highlightedTitle?: boolean
	contentClass?: string
	titleClass?: string
	subtitleClass?: string
	direction?: 'col' | 'row'
	wrapperClass?: string
	btnClass?: string
}
withDefaults(defineProps<Props>(), {
	buttonText: 'view_all',
	direction: 'col'
})

defineEmits(['more'])
</script>

<template>
	<div class="flex gap-4 sm:gap-9" :class="direction === 'row' ? 'flex-col sm:flex-row sm:items-end sm:justify-between' : 'flex-col items-start'">
		<div class="flex gap-2 sm:gap-9 flex-col sm:flex-row items-start sm:items-end sm:justify-between" :class="[wrapperClass, direction === 'row' || buttonLink ? 'w-full' : '']">
			<div class="flex flex-col gap-2" :class="contentClass">
				<h1 class="text-2xl md:text-3xl lg:text-[40px] !leading-130 text-gray-6 uppercase font-extrabold section-title" :class="titleClass">
					<slot name="title">
						<div v-if="highlightedTitle" v-html="title"></div>
						<template v-else>{{ title }}</template>
					</slot>
				</h1>
				<p class="text-base leading-140 text-gray-6" :class="subtitleClass" v-html="subtitle" />
			</div>
			<slot name="rightSide">
				<nuxt-link-locale v-if="buttonLink" :to="buttonLink">
					<UIButton :text="$t(buttonText)" icon="icon-arrow text-2xl leading-6" @click="$emit('more')" class="w-full" :class="[btnClass]" />
				</nuxt-link-locale>
			</slot>
		</div>
		<slot />
	</div>
</template>

<style>
.section-title span {
	color: var(--color-blue);
}
.section-title span.red {
	color: var(--color-red);
}
.section-title span.text-gradient {
	background-image: url('/images/instagram-gradient.png');
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
}
</style>
