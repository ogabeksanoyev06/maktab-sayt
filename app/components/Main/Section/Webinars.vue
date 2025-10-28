<script setup></script>

<template>
	<section>
		<div class="container">
			<common-section-wrapper class="mb-4 md:mb-8" :title="$t('webinar_title')" :subtitle="$t('webinar_subtitle')" linkTo="/webinars" />
			<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
				<card-webinar v-for="key in 4" :key />
			</div>
		</div>
	</section>
</template>
