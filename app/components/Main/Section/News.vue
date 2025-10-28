<script setup lang="ts">
const filters = ['Yangiliklar', "E'lonlar", 'Maktab hayoti', 'Yutuqlar', 'To‘garaklar', 'Sport', "San'at"]
const activeFilter = ref(0)

const handleFilter = (filter: number) => {
	activeFilter.value = filter
}
</script>

<template>
	<section>
		<div class="container">
			<common-section-wrapper class="mb-4 md:mb-8" :title="$t('news_title')" :subtitle="$t('news_subtitle')" linkTo="/news" />
			<div class="mb-4 md:mb-8 overflow-x-auto" style="scrollbar-width: none">
				<div class="flex items-center gap-3 w-max px-1.5">
					<button
						v-for="(filter, i) in filters"
						:key="i"
						@click="handleFilter(i)"
						class="px-4 py-2 rounded-full border border-border flex gap-1 items-center flex-shrink-0 text-muted-foreground text-sm sm:text-base font-medium !leading-130 transition-300 hover:border-primary hover:text-foreground hover:bg-accent cursor-pointer"
						:class="[activeFilter === i ? '!bg-foreground !text-white !border-transparent' : '']"
					>
						<span>#</span>
						{{ filter }}
					</button>
				</div>
			</div>
			<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
				<card-news v-for="key in 4" :key />
			</div>
		</div>
	</section>
</template>
