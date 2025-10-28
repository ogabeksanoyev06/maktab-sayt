<script setup lang="ts">
import dayjs from 'dayjs'

interface Props {
	item: {
		id: number
		name: string
		listening: string
		reading: string
		writing: string
		speaking: string
		overall: string
		motivation_letter: string
		date: string
		file_url: string
		image: string
		order: number
	}
	size?: 'sm' | 'md' | 'lg'
}
const props = withDefaults(defineProps<Props>(), {
	size: 'md'
})
</script>

<template>
	<div
		class="w-full flex flex-col sm:justify-between gap-2 relative overflow-hidden z-1 bg-blue outline outline-[6px] outline-[#FFFFFF12] rounded-2xl md:rounded-[32px] p-4 max-sm:!pb-0 sm:p-7"
	>
		<h2
			class="absolute left-10 z-[-1] text-5xl sm:text-[60px] md:text-[104px] font-extrabold leading-[120px] uppercase bg-clip-text"
			style="-webkit-text-fill-color: rgba(255, 255, 255, 0.08)"
			:class="{
				'top-2': size === 'lg',
				'top-16': size === 'md'
			}"
		>
			{{ item.name }}
		</h2>
		<div class="flex flex-col justify-between gap-4 md:gap-6 sm:max-w-[300px] w-full sm:h-full">
			<div class="flex flex-col gap-2 md:gap-4">
				<div class="flex flex-col">
					<h3 class="text-2xl md:text-[28px] font-bold leading-130 uppercase text-white">{{ item.name }}</h3>
					<span class="text-sm leading-140 font-medium text-white">{{ dayjs(item.date).format('D MMMM YYYY') }}</span>
				</div>
				<p class="text-xs leading-140 text-white whitespace-pre-line">
					{{ item.motivation_letter }}
				</p>
			</div>
			<div class="grid grid-cols-[130px_minmax(0,1fr)] gap-2">
				<div class="bg-white/[0.14] border border-white/[0.1] rounded-2xl md:rounded-3xl backdrop-blur-[4px] flex-col flex-y-center gap-4 py-6 px-6 sm:px-8">
					<p class="text-sm leading-[10px] text-white">{{ $t('overall') }}</p>
					<h1 class="text-[36px] font-extrabold leading-[25px] uppercase text-white">{{ item.overall }}</h1>
				</div>
				<div class="grid grid-cols-2 gap-1">
					<div class="flex-col flex-y-center gap-0.5 bg-[#1C23291A] border border-[#1C232903] rounded-xl md:rounded-2xl backdrop-blur-[4px] py-1.5">
						<p class="text-[11px] leading-[14px] text-white/[0.6]">{{ $t('listening') }}:</p>
						<p class="text-sm font-bold leading-[18px] text-white">{{ item.listening }}</p>
					</div>
					<div class="flex-col flex-y-center gap-0.5 bg-[#1C23291A] border border-[#1C232903] rounded-xl md:rounded-2xl backdrop-blur-[4px] py-1.5">
						<p class="text-[11px] leading-[14px] text-white/[0.6]">{{ $t('reading') }}:</p>
						<p class="text-sm font-bold leading-[18px] text-white">{{ item.reading }}</p>
					</div>
					<div class="flex-col flex-y-center gap-0.5 bg-[#1C23291A] border border-[#1C232903] rounded-xl md:rounded-2xl backdrop-blur-[4px] py-1.5">
						<p class="text-[11px] leading-[14px] text-white/[0.6]">{{ $t('writing') }}:</p>
						<p class="text-sm font-bold leading-[18px] text-white">{{ item.writing }}</p>
					</div>
					<div class="flex-col flex-y-center gap-0.5 bg-[#1C23291A] border border-[#1C232903] rounded-xl md:rounded-2xl backdrop-blur-[4px] py-1.5">
						<p class="text-[11px] leading-[14px] text-white/[0.6]">{{ $t('speaking') }}:</p>
						<p class="text-sm font-bold leading-[18px] text-white">{{ item.speaking }}</p>
					</div>
				</div>
			</div>
		</div>
		<div
			class="absolute hidden sm:block right-6 bottom-0 pt-9 z-[-1] w-full"
			:class="{
				'max-w-[320px] h-[460px]': size === 'lg',
				'max-w-[210px] h-[338px]': size === 'md',
				'max-w-[180px] h-[300px]': size === 'sm'
			}"
		>
			<div class="h-full w-full">
				<img :src="item.image" :alt="item.name" class="object-cover h-full w-full" />
				<a :href="item.file_url" target="_blank" class="absolute right-1/2 top-1/2 translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full flex-center p-3 bg-[#1C2329B2]">
					<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
						<path
							d="M22.2123 12.3815C24.1319 13.5813 25.0918 14.1812 25.4209 14.9492C25.7084 15.62 25.7084 16.3793 25.4209 17.0501C25.0918 17.8181 24.1319 18.418 22.2123 19.6178L13.196 25.253C11.0654 26.5846 10.0001 27.2504 9.12095 27.1797C8.35465 27.1181 7.65221 26.7288 7.19383 26.1116C6.66797 25.4036 6.66797 24.1474 6.66797 21.6349V10.3644C6.66797 7.85193 6.66797 6.59568 7.19383 5.88765C7.65221 5.27047 8.35465 4.88115 9.12095 4.81955C10.0001 4.74887 11.0654 5.41468 13.196 6.74631L22.2123 12.3815Z"
							stroke="white"
							stroke-width="3"
							stroke-linejoin="round"
						/>
					</svg>
				</a>
			</div>
		</div>
		<div class="max-w-[210px] w-full h-[338px] relative mx-auto sm:hidden block">
			<div class="h-full w-full">
				<img src="/images/niner-user.png" alt="" class="object-cover h-full w-full" />
				<a :href="item.file_url" target="_blank" class="absolute right-1/2 top-1/2 translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full flex-center p-3 bg-[#1C2329B2]">
					<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
						<path
							d="M22.2123 12.3815C24.1319 13.5813 25.0918 14.1812 25.4209 14.9492C25.7084 15.62 25.7084 16.3793 25.4209 17.0501C25.0918 17.8181 24.1319 18.418 22.2123 19.6178L13.196 25.253C11.0654 26.5846 10.0001 27.2504 9.12095 27.1797C8.35465 27.1181 7.65221 26.7288 7.19383 26.1116C6.66797 25.4036 6.66797 24.1474 6.66797 21.6349V10.3644C6.66797 7.85193 6.66797 6.59568 7.19383 5.88765C7.65221 5.27047 8.35465 4.88115 9.12095 4.81955C10.0001 4.74887 11.0654 5.41468 13.196 6.74631L22.2123 12.3815Z"
							stroke="white"
							stroke-width="3"
							stroke-linejoin="round"
						/>
					</svg>
				</a>
			</div>
		</div>
	</div>
</template>
