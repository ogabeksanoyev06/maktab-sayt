<script setup></script>

<template>
	<section class="relative md:h-screen md:min-h-[600px] max-md:pt-[100px] max-md:pb-10 flex items-center bg-[#00102E] overflow-hidden z-1">
		<div class="container grid grid-cols-1 md:grid-cols-2 gap-6 relative z-1">
			<common-section-wrapper
				class="order-2 md:order-1 md:!gap-16"
				:title="$t('hero_exam_title')"
				:subtitle="$t('hero_exam_description')"
				:content-class="'md:!gap-8'"
				:title-class="'text-white max-w-[423px] !leading-140'"
				:subtitleClass="'!text-white !text-xl !leading-140'"
			>
				<UIButton :text="$t('learn_more')" class="bg-white/15" />
			</common-section-wrapper>
			<div
				class="order-1 md:order-2 max-w-[380px] max-h-[380px] aspect-square rounded-[30px] border-[5px] border-white/10 backdrop-blur-[20px] mx-auto overflow-hidden relative z-1"
			>
				<img src="/images/exam-centre.png" alt="exam-centre" class="size-full object-cover" />
				<button class="absolute -translate-y-1/2 -translate-x-1/2 top-1/2 left-1/2 z-10">
					<span class="size-12 md:size-[72px] aspect-square flex-center rounded-full !bg-[#1C232914] glass-card p-3 sm:p-4">
						<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
							<path
								d="M27.7644 15.4764C30.164 16.9761 31.3637 17.726 31.7752 18.686C32.1345 19.5245 32.1345 20.4736 31.7752 21.3121C31.3637 22.2721 30.164 23.022 27.7644 24.5217L16.494 31.5657C13.8307 33.2303 12.4991 34.0625 11.4002 33.9742C10.4423 33.8972 9.56429 33.4105 8.99132 32.6391C8.33398 31.754 8.33398 30.1837 8.33398 27.0431V12.9551C8.33398 9.81443 8.33398 8.24411 8.99132 7.35907C9.56429 6.5876 10.4423 6.10095 11.4002 6.02395C12.4991 5.9356 13.8307 6.76787 16.494 8.4324L27.7644 15.4764Z"
								stroke="white"
								stroke-width="3"
								stroke-linejoin="round"
							/>
						</svg>
					</span>
				</button>
			</div>
			<img src="/svg/exam-centre.svg" alt="" class="w-[955px] h-auto absolute -top-14 sm:-top-[97px] left-1/2 -translate-x-1/2 z-0" />
			<div class="bg-blue rounded-full size-[492px] blur-[250px] absolute -translate-y-1/2 translate-x-1/2 -top-1/2 -left-1/2 z-[-1]"></div>
			<div class="bg-red rounded-full size-[492px] blur-[250px] absolute translate-y-1/2 -translate-x-1/2 -bottom-1/2 -right-1/2 z-[-1]"></div>
		</div>
	</section>
</template>
