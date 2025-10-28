<script setup lang="ts">
interface Props {
	item: {
		id: number
		title: string
		url: string
		video_type: string
		tag: string | null
		order: number
	}
}
defineProps<Props>()
</script>

<template>
	<a
		:href="item?.url"
		target="_blank"
		rel="noopener noreferrer"
		class="relative rounded-[20px] overflow-hidden w-full aspect-[9/16] max-h-[320px] md:max-h-[496px] h-full group block"
	>
		<img :src="getYoutubeShortsThumbnail(item?.url)" :alt="item?.title" class="w-full h-full object-cover" />
		<div
			class="absolute inset-0 bg-[linear-gradient(180deg,rgba(1,84,248,0)_0%,rgba(1,84,248,0.08)_72.32%,#0154F8_100%)] opacity-0 -bottom-full group-hover:bottom-0 group-hover:opacity-100 transition-300"
		/>
		<button class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 md:w-[72px] md:h-[72px] p-4 flex-center cursor-pointer backdrop-blur-[4px] rounded-full">
			<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
				<path
					d="M27.7644 15.4764C30.164 16.9761 31.3637 17.726 31.7752 18.686C32.1345 19.5245 32.1345 20.4736 31.7752 21.3121C31.3637 22.2721 30.164 23.022 27.7644 24.5217L16.494 31.5657C13.8307 33.2303 12.4991 34.0625 11.4002 33.9742C10.4423 33.8972 9.56429 33.4105 8.99132 32.6391C8.33398 31.754 8.33398 30.1837 8.33398 27.0431V12.9551C8.33398 9.81443 8.33398 8.24411 8.99132 7.35907C9.56429 6.5876 10.4423 6.10095 11.4002 6.02395C12.4991 5.9356 13.8307 6.76787 16.494 8.4324L27.7644 15.4764Z"
					stroke="white"
					stroke-width="3"
					stroke-linejoin="round"
				/>
			</svg>
		</button>
	</a>
</template>
