<script setup></script>

<template>
	<section class="relative h-screen flex items-center bg-[#00102E] overflow-hidden z-1">
		<div class="container relative">
			<common-section-wrapper
				:title="$t('achievements_hero.title')"
				:subtitle="$t('achievements_hero.subtitle')"
				title-class="text-white lg:!text-5xl"
				subtitle-class="text-white lg:!text-xl"
				wrapperClass="!items-center max-w-[900px] text-center mx-auto"
				:actions="false"
			/>
			<img src="/svg/exam-centre.svg" alt="" class="w-[955px] h-auto absolute -top-14 sm:-top-[97px] left-1/2 -translate-x-1/2 z-0" />
			<div class="bg-primary rounded-full size-[500px] blur-[250px] -top-[250px] -left-[250px] -translate-y-1/2 absolute z-[-1]"></div>
			<div class="bg-[#FE014D] rounded-full size-[500px] blur-[250px] -bottom-[250px] -right-[250px] translate-y-1/2 absolute z-[-1]"></div>
		</div>
	</section>
</template>
