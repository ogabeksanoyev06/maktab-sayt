<template>
	<div>
		<LayoutHeader :isTransparent="true" />
		<div class="space-y-10">

			<main-section-hero-banner />
			<main-section-news />
			<main-section-videogallery />
			<main-section-events />
			<main-section-webinars />
			<main-section-graduates-testimonials />
			<main-section-stay-in-touch />
			<main-section-statistics />
			<main-section-teachers />
			<main-section-education-journey />
			<section-results-pupils />
			<section-results-teachers />
			<main-section-other-services />
			<section-use-ful-links />
			<common-contact-form />
			<common-faq />
		</div>
		<LayoutFooter />
	</div>
</template>

<script setup>
definePageMeta({
	layout: 'empty'
})
</script>
