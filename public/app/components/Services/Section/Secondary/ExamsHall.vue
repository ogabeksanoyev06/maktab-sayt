<script setup></script>

<template>
	<section class="">
		<div class="container py-8 md:pt-32 md:pb-16 grid gap-6 md:gap-12">
			<div class="grid gap-6 grid-cols-1 lg:grid-cols-2 items-center">
				<common-section-wrapper :title="$t('exams_hall_title')" :subtitle="$t('exams_hall')" :content-class="'max-w-[520px] gap-3 w-full'">
					<div class="flex flex-col sm:flex-row gap-4 w-full">
						<UIButton :text="$t('btn_study_ielts')" class="sm:max-w-[200px] w-full" />
						<UIButton :text="$t('btn_register_exam')" variant="secondary" class="sm:max-w-[200px] w-full" />
					</div>
				</common-section-wrapper>
				<div class="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2">
					<div class="bg-white rounded-3xl p-6 sm:p-10 flex flex-col items-center gap-4 sm:gap-6 shadow-card">
						<img src="/svg/exams/duration.svg" alt="" class="sm:size-[50px] size-10 aspect-square flex-shrink-0" />
						<div class="flex flex-col items-center text-center gap-1">
							<span class="sm:text-base !leading-130 text-gray-5">Capacity</span>
							<h3 class="text-xl sm:text-2xl !leading-130 font-bold">Fits up to 100 candidates</h3>
						</div>
					</div>
					<div class="bg-white rounded-3xl p-6 sm:p-10 flex flex-col items-center gap-4 sm:gap-6">
						<img src="/svg/exams/expected.svg" alt="" class="sm:size-[50px] size-10 aspect-square flex-shrink-0" />
						<div class="flex flex-col items-center text-center gap-1">
							<span class="sm:text-base !leading-130 text-gray-5">Purpose</span>
							<h3 class="text-xl sm:text-2xl !leading-130 font-bold">Real IELTS Exams & Trainings</h3>
						</div>
					</div>
				</div>
			</div>
			<div
				class="lg:grid gap-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-12 grid-flow-row-dense [grid-auto-rows:120px] sm:[grid-auto-rows:140px] md:[grid-auto-rows:unset] md:grid-rows-[repeat(4,minmax(0,1fr))] md:h-[540px] hidden"
			>
				<figure class="group relative overflow-hidden rounded-xl md:col-span-3">
					<img src="/images/media.png" alt="" class="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" />
				</figure>

				<figure class="group relative overflow-hidden rounded-xl md:col-start-4 md:col-span-4">
					<img src="/images/media.png" alt="" class="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" />
				</figure>

				<figure class="group relative overflow-hidden rounded-xl md:col-start-8">
					<img src="/images/media.png" alt="" class="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" />
				</figure>

				<figure class="group relative overflow-hidden rounded-xl md:col-start-9 md:col-span-2 md:row-span-2">
					<img src="/images/media.png" alt="" class="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" />
				</figure>

				<figure class="group relative overflow-hidden rounded-xl md:col-start-11 md:col-span-2 md:row-span-3">
					<img src="/images/media.png" alt="" class="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" />
				</figure>

				<figure class="group relative overflow-hidden rounded-xl md:row-start-2">
					<img src="/images/media.png" alt="" class="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" />
				</figure>

				<figure class="group relative overflow-hidden rounded-xl md:col-start-1 md:row-start-3">
					<img src="/images/media.png" alt="" class="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" />
				</figure>

				<figure class="group relative overflow-hidden rounded-xl md:col-start-1 md:row-start-4">
					<img src="/images/media.png" alt="" class="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" />
				</figure>

				<figure class="group relative overflow-hidden rounded-xl md:col-start-2 md:col-span-3 md:row-start-2">
					<img src="/images/media.png" alt="" class="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" />
				</figure>

				<figure class="group relative overflow-hidden rounded-xl md:col-start-5 md:col-span-4 md:row-start-2 md:row-span-2">
					<img src="/images/media.png" alt="" class="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" />
				</figure>

				<figure class="group relative overflow-hidden rounded-xl md:col-start-9 md:col-span-2 md:row-start-3">
					<img src="/images/media.png" alt="" class="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" />
				</figure>

				<figure class="group relative overflow-hidden rounded-xl md:col-start-2 md:col-span-3 md:row-start-3 md:row-span-2">
					<img src="/images/media.png" alt="" class="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" />
				</figure>

				<figure class="group relative overflow-hidden rounded-xl md:col-start-5 md:row-start-4">
					<img src="/images/media.png" alt="" class="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" />
				</figure>

				<figure class="group relative overflow-hidden rounded-xl md:col-start-6 md:col-span-4 md:row-start-4">
					<img src="/images/media.png" alt="" class="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" />
				</figure>

				<figure class="group relative overflow-hidden rounded-xl md:col-start-10 md:col-span-2 md:row-start-4">
					<img src="/images/media.png" alt="" class="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" />
				</figure>

				<figure class="group relative overflow-hidden rounded-xl md:col-start-12 md:row-start-4">
					<img src="/images/media.png" alt="" class="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" />
				</figure>
			</div>
			<UIMarquee :speed="30" :repeat="10" class="block lg:hidden">
				<div class="overflow-hidden size-[120px] rounded-2xl">
					<img src="/images/media.png" alt="brand" class="w-full h-full object-cover transition-transform duration-300 ease-out hover:scale-105" />
				</div>
			</UIMarquee>
		</div>
	</section>
</template>
