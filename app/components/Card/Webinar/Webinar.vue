<script setup></script>

<template>
	<article class="relative group rounded border-default overflow-hidden transition-300 z-10 hover:translate-y-1">
		<div class="relative overflow-hidden aspect-[16/9] h-[430px] w-full rounded-t">
			<UIImage
				alt="The Benefits of Meditation"
				class="w-full h-full"
				image-class="transform transition-transform duration-300 group-hover:scale-110"
				src="https://tmci.uz/files/cache/af/ca/afca06d0146472bad811dec2e5ada51c.jpg"
			/>
		</div>
		<div class="absolute w-full h-full inset-0 z-5">
			<div class="absolute inset-0 bg-[linear-gradient(180deg,#001b4200_0%,#001b43d9_60.42%)] opacity-100 -bottom-20 group-hover:-bottom-full transition-300" />
			<h3 class="bg-blue-800 rounded py-1.5 px-3 w-fit text-white font-medium absolute left-3 top-3">Usmonov Otabek Sanoyevich</h3>
			<button
				class="absolute z-1 w-14 h-14 rounded-full cursor-pointer backdrop-blur-2xl flex items-center justify-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:bg-white transition-300"
			>
				<Icon name="lucide-play" class="!size-7 text-white group-hover:!text-primary" />
			</button>
			<div class="absolute bottom-0 flex flex-col items-start p-[0_24px_20px] w-full gap-4">
				<h2 class="text-base text-pretty font-bold text-white leading-130 border-b border-[hsla(0,0%,100%,.4)] pb-4">
					Rossiya–Ukraina urushi “teng kurash” bosqichiga o‘tyaptimi?
				</h2>
				<time class="text-sm text-white"> Apr 23, 2021 </time>
			</div>
		</div>
	</article>
</template>
