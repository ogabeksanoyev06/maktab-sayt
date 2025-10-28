<template>
	<div>
		<div class="flex max-md:flex-col gap-4 items-stretch">
			<div class="w-full">
				<img
					alt="Chiqindilarni ajratish tashabbusi"
					src="https://tmci.uz/files/green_campus_images/Image-1.png"
					class="object-cover object-center max-h-96 rounded-3xl w-full min-w-[300px] h-full"
				/>
			</div>
			<div class="rounded-3xl p-2 md:p-4 min-h-full bg-gray-100 flex flex-col justify-between">
				<article class="grid gap-3 mb-3">
					<h3 class="text-dark text-xl md:text-2.5xl font-medium">Chiqindilarni ajratish tashabbusi</h3>
					<p class="text-dark leading-140">
						TMC Institute ekologik barqarorlikka sodiq qolgan holda, Yashil Kampus tashabbuslari doirasida chiqindilarni ajratish tizimini joriy etdi. Chiqindi qutilari qogoz, plastmassa
						va boshqa chiqindilar uchun alohida ajratilgan. Bu tashabbus qayta ishlashni ragbatlantirib, ifloslanishni kamaytiradi hamda ekologik masuliyatni oshiradi. Tori chiqindi
						boshqaruvi atrof-muhitga zarar yetkazishni kamaytiradi, kampusni yanada toza qiladi va global barqarorlik maqsadlariga mos keladi. Talabalar va xodimlarning ushbu tizimga
						faol jalb etilishi ekologik barqaror kelajak sari muhim qadamdir. Bugun qilingan kichik harakatlar ertangi kun uchun katta ahamiyat kasb etadi.
					</p>
				</article>
				<UIButton variant="outline" :text="$t('more_btn')" />
			</div>
		</div>
	</div>
</template>

<script setup></script>
