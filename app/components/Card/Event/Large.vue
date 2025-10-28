<script setup></script>

<template>
	<div class="grid gap-2 md:gap-4 md:grid-cols-12">
		<div class="md:col-span-3 w-full">
			<div class="relative min-h-[200px] md:min-h-[240px] h-full flex flex-col justify-between rounded overflow-hidden bg-white">
				<div class="flex flex-col items-center text-center gap-2 mt-6 mb-8">
					<h1 class="text-7xl text-blue-900 font-bold">5</h1>
					<h5 class="text-base font-medium text-blue-900">Noyabr, Chorshanba</h5>
				</div>
				<div class="rounded-b bg-green-600 w-full flex items-center justify-center gap-0.5 py-3">
					<Icon name="lucide-radio" class="text-white" />
					<h6 class="text-sm !leading-5 font-medium text-white">Kutilayotgan</h6>
				</div>
			</div>
		</div>
		<div class="md:col-span-9 w-full">
			<div class="p-4 md:p-6 bg-white rounded flex flex-col gap-5 justify-between h-full">
				<div class="flex flex-col gap-2">
					<h2 class="text-2xl font-bold line-clamp-2">
						Baymuratova Madina Tursunboy qizining iqtisodiyot fanlari bo‘yicha falsafa doktori (PhD) dissertatsiya ishi himoyasi to‘g‘risida
					</h2>
					<p class="text-sm md:text-base text-muted-foreground line-clamp-2">
						2025-yil 5-noyabr soat 16-00 da Toshkent davlat iqtisodiyot universiteti Rektorat binosining 2-qavat kichik anjumanlar zalida Toshkent davlat iqtisodiyot universiteti
					</p>
				</div>
				<div class="flex items-center justify-between">
					<span class="text-base text-pretty text-muted-foreground font-medium"> 16:00 - 18:00 </span>
					<UIButton class="md:!max-w-[180px] md:w-full">Batafsil</UIButton>
				</div>
			</div>
		</div>
	</div>
</template>
