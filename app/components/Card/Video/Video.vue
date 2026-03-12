<script setup></script>

<template>
	<article class="relative group rounded border-default overflow-hidden flex flex-col items-start transition-all duration-300 shadow-card hover:shadow-card-hover">
		<div class="relative overflow-hidden aspect-[16/9] h-[180px] w-full rounded-t z-10">
			<UIImage alt="The Benefits of Meditation" class="w-full h-full" image-class="transform transition-transform duration-300 group-hover:scale-110" src="/images/image.jpg" />
			<button
				class="absolute z-1 w-14 h-14 rounded-full cursor-pointer backdrop-blur flex items-center justify-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:bg-white transition-300"
			>
				<Icon name="lucide-play" class="!size-7 text-white group-hover:!text-primary" />
			</button>
		</div>
		<div class="min-w-0 flex-1 flex flex-col gap-6 p-4">
			<h2 class="text-xl text-pretty font-semibold">Axborot 24 | TDIU xalqaro reytingda yuqorilab bormoqda</h2>
			<time class="text-sm text-muted-foreground"> Fev 28, 2026 </time>
		</div>
	</article>
</template>
