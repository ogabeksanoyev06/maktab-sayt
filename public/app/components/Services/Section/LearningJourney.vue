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
	<section class="container grid gap-4 md:gap-9 relative py-8 md:py-16">
		<common-section-wrapper class="!items-center !text-center" :title="$t('journey_title')" highlighted-title :subtitle="$t('journey_description')" />
		<div class="bg-white rounded-3xl shadow-card py-8 px-4 md:py-16 md:px-16">
			<div class="flex flex-wrap justify-center lg:justify-between gap-4 md:gap-6 relative">
				<template v-for="(item, index) in props.items" :key="index">
					<div class="relative flex gap-6 items-start">
						<ServicesCardJourney :img="item.img" :title="item.title" :subtitle="item.subtitle" />
						<img v-if="index < props.items.length - 1" src="/svg/level/arrow-right.svg" alt="arrow" class="w-11 h-5 hidden md:block mt-[15px]" />
					</div>
				</template>
			</div>
		</div>
	</section>
</template>
