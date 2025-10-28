<script setup></script>

<template>
	<section class="container md:py-16 py-8">
		<common-section-wrapper class="md:mb-8 mb-6" :title="$t('teachers_results_title')" :subtitle="$t('teachers_results_subtitle')" highlighted-title link-to="/results/teachers" />
		<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
			<card-scores-teachers v-for="(item, key) in 4" :key />
		</div>
	</section>
</template>
