<script setup></script>

<template>
	<section class="relative py-8 md:py-16">
		<div class="container grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-[80px] items-start">
			<common-section-wrapper class="items-start !gap-7 max-w-[580px]" :title="$t('library_title')" highlighted-title :subtitle="$t('library_description')">
				<UIButton :text="$t('library_cta')" class="md:!max-w-[180px] w-full" />
			</common-section-wrapper>
			<div class="relative hidden md:block z-0 lg:ml-[128px] w-full h-[316px] aspect-[163/79]">
				<img src="/images/learning-materials.webp" alt="Learning materials" class="w-full h-full object-contain" />
			</div>
		</div>
	</section>
</template>
