<script setup></script>

<template>
	<div class="flex flex-col items-start gap-5 p-4 sm:p-5 rounded-lg border border-transparent bg-gray-200 cursor-pointer transition-300 hover:bg-white hover:border-primary">
		<NuxtLinkLocale to="/about-us/management/slug" class="flex items-center gap-3 sm:gap-5 w-full">
			<UIImage src="/images/director.jpg" class="rounded w-full h-full max-w-[108px] max-h-[140px] shrink-0 !aspect-[108/140]" />
			<div class="space-y-1 sm:space-y-2">
				<p class="line-clamp-2 sm:text-xl font-bold">Usmonov Otabek</p>
				<p class="text-muted-foreground line-clamp-2 text-sm font-medium">Maktab direktori</p>
			</div>
		</NuxtLinkLocale>
		<div class="flex flex-col sm:gap-3 gap-1.5 w-full">
			<div class="flex items-center gap-1 group">
				<Icon name="lucide-clock" class="text-primary"></Icon>
				<div class="text-sm font-semibold duration-200 group-hover:text-primary">
					<p>Juma: 15:00–16:00</p>
				</div>
			</div>
			<div>
				<a href="tel:+998712070032" class="flex items-center gap-1 group">
					<Icon name="lucide-phone" class="text-primary"></Icon>
					<p class="text-sm font-semibold duration-200 group-hover:text-primary">+998 71 207 00 32</p>
				</a>
			</div>
			<div>
				<a href="mailto:" class="flex items-center gap-1 group">
					<Icon name="lucide-mail" class="text-primary"></Icon>
					<p class="text-sm font-semibold duration-200 group-hover:text-primary">direktor@3-maktab.uz</p>
				</a>
			</div>
		</div>
	</div>
</template>
