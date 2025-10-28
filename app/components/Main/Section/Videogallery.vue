<script setup></script>

<template>
	<section>
		<div class="container">
			<common-section-wrapper class="mb-4 md:mb-8" :title="$t('video_gallery_title')" :subtitle="$t('video_gallery_subtitle')" linkTo="/video-gallery" />
			<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
				<card-video v-for="key in 3" :key />
			</div>
		</div>
	</section>
</template>
