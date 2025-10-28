<template>
	<div>
		<layout-header color="transparent" />
		<section-hero-achievements-school />
		<div class="bg-white py-8">
			<div class="container">
				<h1 class="title-style text-center">Maktabimiz yutuqlari</h1>
				<UITimeLine :items="schoolAchievements" />
			</div>
		</div>
		<layout-footer />
	</div>
</template>

<script setup>
definePageMeta({
	layout: 'empty'
})

const schoolAchievements = [
	{
		text: 2020,
		title: 'Viloyat miqyosidagi fan olimpiadasi g‘oliblari',
		description: '<b>5 nafar o‘quvchi</b> viloyat bosqichida 1–3-o‘rinlarni egalladi. Informatika va matematika fanlarida eng yuqori natijalar qayd etildi.'
	},
	{
		text: 2021,
		title: 'Respublika fan olimpiadasida ishtirok',
		description: '<b>2 nafar o‘quvchi</b> respublika bosqichida faxrli o‘rinlarni egalladi. Maktabimiz faxriy ro‘yxatiga kiritildi.'
	},
	{
		text: 2022,
		title: 'Yilning eng faol o‘quvchilari tanlovi',
		description: '"Yilning eng faol o‘quvchisi" nominatsiyasida <b>3 o‘quvchi</b> faxrli diplom bilan taqdirlandi. Ijodiy loyihalar soni 25 taga yetdi.'
	},
	{
		text: 2023,
		title: 'Sport va madaniyat yutuqlari',
		description: 'Maktab jamoasi <b>"Umid nihollari"</b> musobaqasida 2-o‘rin egasi bo‘ldi. Shuningdek, san’at yo‘nalishida o‘quvchilar tuman tanlovida g‘olib chiqishdi.'
	},
	{
		text: 2024,
		title: 'Innovatsion ta’lim loyihasi',
		description: 'STEM ta’lim yo‘nalishida yangi laboratoriya ishga tushirildi. O‘quvchilar <b>robototexnika</b> va <b>startap</b> yo‘nalishlarida muvaffaqiyat qozonmoqda.'
	}
]
</script>
