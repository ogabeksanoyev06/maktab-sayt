<template>
	<section class="bg-white py-16">
		<div class="container">
			<common-section-wrapper class="mb-4 md:mb-8" :title="$t('event_title')" :subtitle="$t('event_subtitle')" linkTo="/events" />
			<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
				<card-event v-for="key in 3" :key />
			</div>
		</div>
	</section>
</template>

<script setup></script>
