<script setup></script>

<template>
	<NuxtLinkLocale
		to="/news/1"
		class="relative group rounded border-default overflow-hidden flex flex-col items-start transition-all duration-300 shadow-card hover:shadow-card-hover"
	>
		<UIImage
			alt="The Benefits of Meditation"
			class="min-w-[124px] w-full md:max-w-auto min-h-auto md:min-w-[281px] md:min-h-[188px] aspect-[281/188] object-cover"
			image-class="transform transition-transform duration-300  group-hover:scale-110"
			src="/images/image.jpg"
		/>
		<div class="min-w-0 flex-1 flex flex-col p-4 sm:p-6">
			<div class="flex items-center gap-2 mb-2">
				<UIBadge variant="outline">Dunyo yangiliklari</UIBadge>
				<span class="text-sm text-muted-foreground"> Fev 28, 2026 </span>
			</div>
			<h2 class="text-base md:text-xl text-pretty font-semibold line-clamp-2 !leading-130">
				Startap ekotizimini rivojlantirish bo‘yicha Muvofiqlashtiruvchi kengashning navbatdagi yig‘ilishi bo‘lib o‘tdi
			</h2>
			<div class="mt-1 text-sm !leading-130 md:text-base text-pretty text-muted-foreground line-clamp-3">
				Joriy yilning 7-mart kuni Toshkent shahridagi Yoshlar ijod saroyida startap ekotizimini rivojlantirish bo‘yicha Muvofiqlashtiruvchi kengashning navbatdagi yig‘ilishi bo‘lib
				o‘tdi. Tadbir O‘zbekiston Respublikasi Prezidenti Administratsiyasi bilan hamkorlikda O‘zbekiston Respublikasi Iqtisodiyot va moliya vazirligi, Raqamli texnologiyalar vazirligi
				hamda Yoshlar ishlari agentligi tomonidan tashkil etildi.
			</div>
		</div>
	</NuxtLinkLocale>
</template>
