<script setup></script>

<template>
	<div class="">
		<section-home-hero />
		<section-real-progress />
		<section-why-we-different />
		<section-statistics />
		<section-other-services />
		<section-kids />
		<section-go-global />
		<section-results-ielts :title="$t('student_results')" :subtitle="$t('every_score_tells_a_story')" />
		<section-niners />
		<section-media-talks class="!py-8" />
		<section-media-interviews class="!py-8" />
		<section-stay-in-touch />
		<section-feedback show-filters />
		<common-faq />
		<common-contact-form />
	</div>
</template>
