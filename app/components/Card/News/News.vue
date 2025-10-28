<script setup></script>

<template>
	<NuxtLinkLocale
		to="/news/slug"
		class="relative group rounded border-default overflow-hidden flex flex-col items-start transition-all duration-300 shadow-card hover:shadow-card-hover"
	>
		<UIImage
			alt="The Benefits of Meditation"
			class="min-w-[124px] w-full md:max-w-auto min-h-auto md:min-w-[281px] md:min-h-[188px] aspect-[281/188] object-cover"
			image-class="transform transition-transform duration-300  group-hover:scale-110"
			src="https://tmci.uz/files/cache/af/ca/afca06d0146472bad811dec2e5ada51c.jpg"
		/>
		<div class="min-w-0 flex-1 flex flex-col p-4 sm:p-6">
			<div class="flex items-center gap-2 mb-2">
				<UIBadge variant="outline">Dunyo yangiliklari</UIBadge>
				<span class="text-sm text-muted-foreground"> Apr 23, 2021 </span>
			</div>
			<h2 class="text-base md:text-xl text-pretty font-semibold line-clamp-2 !leading-130">Rossiya–Ukraina urushi “teng kurash” bosqichiga o‘tyaptimi?</h2>
			<div class="mt-1 text-sm !leading-130 md:text-base text-pretty text-muted-foreground line-clamp-3">
				Kun.uz'ning jonli efirdagi “Geosiyosat” dasturida siyosiy tahlilchilar Rossiya–Ukraina urushining borishidagi so‘nggi tendensiyalar yuzasidan munozaraga kirishdi.
			</div>
		</div>
	</NuxtLinkLocale>
</template>
