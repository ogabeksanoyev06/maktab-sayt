<template>
	<div
		class="p-5 max-md:!pb-0 md:p-10 rounded-lg md:rounded-[50px] w-full relative min-h-[368px] z-10 overflow-hidden flex flex-col justify-between gap-4 transition-300 bg-[linear-gradient(296deg,_#0154f8_0%,_#013192_100%)] hover:bg-[linear-gradient(26deg,_#0154f8_0%,_#013192_100%)]"
	>
		<div class="flex flex-col items-start md:max-w-[380px] w-full">
			<h3 class="text-2xl md:text-3xl leading-[100%] font-bold text-white mb-3">Alina Bekjanova</h3>
			<p class="text-sm sm:text-base text-white !leading-140 mb-3 md:mb-6">
				Tajribali backend mutaxassisi, Python (Django, FastAPI) va Node.js’da 6+ yil ishlagan. Skalalanadigan server tizimlari va ma’lumotlar bazalari bo‘yicha chuqur tajribaga ega.
			</p>
			<div class="flex items-start flex-wrap gap-x-2 gap-y-2.5">
				<div class="glass-card px-5 py-2 md:px-6 md:py-2.5 rounded-full" v-for="key in 5" :key>
					<p class="text-base text-white font-bold !leading-5">Python</p>
				</div>
			</div>
		</div>
		<img src="/images/teacher.png" alt="" class="md:absolute md:-bottom-10 md:right-6 md:h-auto z-[-1] max-md:max-w-[200px] max-md:mx-auto" />
	</div>
</template>

<script setup></script>
