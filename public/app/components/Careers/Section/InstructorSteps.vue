<script setup></script>

<template>
	<section class="container grid gap-4 md:gap-9 relative py-8 md:py-16">
		<common-section-wrapper class="items-center text-center" :title="$t('instructor_steps_title')" highlighted-title :subtitle="$t('instructor_steps_subtitle')" />
		<div class="bg-white rounded-3xl shadow-card p-4 md:py-16 md:px-11">
			<div class="flex flex-wrap justify-center gap-6 relative">
				<template v-for="(item, index) in 5" :key="index">
					<div class="relative flex flex-col items-center md:max-w-[200px] w-full">
						<careers-card-step />
						<img v-if="index < 4" src="/svg/level/arrow-right.svg" alt="arrow" class="absolute top-[25px] -right-8 -translate-y-1/2 w-11 h-5 hidden sm:block" />
					</div>
				</template>
			</div>
		</div>
	</section>
</template>

<style></style>
