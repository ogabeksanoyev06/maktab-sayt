<template>
	<div class="bg-white shadow-card rounded-lg p-3 sm:p-4 border border-border flex-col flex md:flex-row items-start gap-4 transition-300 hover:shadow-card-hover">
		<UIImage :src="photo" :alt="name" class="w-28 aspect-[3/4] rounded overflow-hidden bg-gray-200 shrink-0 h-auto" />

		<div class="w-full">
			<h3 class="font-bold text-lg mb-1">{{ name }}</h3>
			<p class="text-sm leading-snug mt-1 line-clamp-6">{{ bio }}</p>
		</div>
	</div>
</template>

<script setup>
defineProps({
	photo: String,
	name: String,
	bio: String
})
</script>
