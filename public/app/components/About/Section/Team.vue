<template>
	<section class="container py-16">
		<div class="flex flex-col-reverse lg:flex-row items-center gap-12">
			<common-section-wrapper class="lg:basis-1/2" :title="$t('team_section_title')" :subtitle="$t('team_section_desc')" highlighted-title title-class="max-w-[450px]">
				<UIButton :text="$t('team_section_button')" />
			</common-section-wrapper>
			<div class="max-w-[530px] w-full lg:ml-auto lg:basis-1/2">
				<img src="/images/about/team.png" alt="" class="size-full object-contain" />
			</div>
		</div>
	</section>
</template>

<script setup></script>
