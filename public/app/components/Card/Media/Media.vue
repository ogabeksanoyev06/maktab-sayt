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
	<a :href="item.url" target="_blank" rel="noopener noreferrer" class="flex group relative w-full h-[213px] border-2 border-transparent rounded-3xl cursor-pointer overflow-hidden">
		<img :src="getYoutubeShortsThumbnail(item.url)" :alt="item.title" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 rounded-3xl" />
	</a>
</template>
