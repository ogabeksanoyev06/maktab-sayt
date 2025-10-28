<script setup lang="ts">
interface Props {
	icons: string | string[]
	title: string
	subtitle: string
}
defineProps<Props>()
</script>

<template>
	<div class="bg-white border-2 border-white flex flex-col gap-4 md:gap-6 items-start rounded-3xl shadow-card p-5 md:p-7">
		<div class="flex items-center gap-1">
			<img v-if="typeof icons === 'string'" :src="icons" :alt="title" class="md:w-16 md:h-16 w-12 h-12 aspect-square object-contain" />
			<template v-else>
				<template v-for="(icon, i) in icons" :key="i">
					<img :src="icon" :alt="title + ' icon ' + i" class="md:w-16 md:h-16 w-12 h-12 aspect-square object-contain" />
					<span v-if="i < icons.length - 1" class="text-base font-bold leading-140 text-gray-3">&</span>
				</template>
			</template>
		</div>

		<div class="flex flex-col items-start gap-2">
			<h3 class="text-xl font-bold leading-130">{{ title }}</h3>
			<p class="sm:text-base !leading-140 text-gray-5">{{ subtitle }}</p>
		</div>
	</div>
</template>
