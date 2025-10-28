<script setup></script>

<template>
	<section class="container py-8 md:py-16">
		<common-section-wrapper class="mb-4 md:mb-8" :title="$t('students_results_title')" :subtitle="$t('students_results_subtitle')" highlighted-title  link-to="/results/pupils"/>
		<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
			<card-scores-pupils v-for="(item, key) in 4" :key />
		</div>
	</section>
</template>
