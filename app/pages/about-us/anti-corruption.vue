<template>
	<div>
		<UIBreadcrumb :routes="breadcrumbItems" />

		<section class="container mb-10">
			<h1 class="title-style mt-3 mb-3 md:mb-6">Korrupsiyaga qarshi siyosat</h1>

			<div class="bg-white rounded-xl p-5 md:p-8 grid gap-6 leading-relaxed">
				<p>
					3-maktab halollik, shaffoflik va javobgarlikning eng yuqori standartlariga amal qiladi. Biz ishonamizki, har qanday shakldagi korrupsiya ta’lim sifatiga zarar yetkazadi,
					jamoatchilik ishonchini pasaytiradi va maktabimiz nufuziga putur yetkazadi.
				</p>

				<div>
					<h2 class="font-bold text-xl mb-2">Korrupsiyasiz muhitga sodiqlik</h2>
					<p>
						3-maktab har qanday shakldagi korrupsiyaga, jumladan poraxo‘rlik, firibgarlik va noetnik xatti-harakatlarga qat’iy qarshi chiqadi. Bu siyosat o‘qituvchilar, o‘quvchilar va
						xodimlarning barcha faoliyat yo‘nalishlariga taalluqlidir.
					</p>
				</div>

				<div>
					<h2 class="font-bold text-xl mb-2">Etik tamoyillarga rioya qilish</h2>
					<p>
						Biz barcha o‘qituvchilar, o‘quvchilar va ota-onalardan halol, mas’uliyatli bo‘lishlarini hamda har qanday shubhali yoki korrupsion harakatlar haqida xabar berishlarini
						kutamiz.
					</p>
				</div>

				<div>
					<h2 class="font-bold text-xl mb-2">Shaffof faoliyat yuritish</h2>
					<p>
						Maktabimizda baholash tizimi, tanlovlar, mukofotlash jarayonlari va moliyaviy ishlarda shaffoflik tamoyillari qat’iy qo‘llaniladi. Har bir qaror ochiq va tushunarli tarzda
						amalga oshiriladi.
					</p>
				</div>

				<div>
					<h2 class="font-bold text-xl mb-2">Xabar berish mexanizmlari</h2>
					<p>
						3-maktab jamoasi a’zolari har qanday korrupsiya yoki noqonuniy xatti-harakatlar haqida xabar berishlari mumkin. Barcha murojaatlar maxfiy tarzda ko‘rib chiqiladi va zarur
						choralar ko‘riladi.
					</p>
				</div>

				<div>
					<h2 class="font-bold text-xl mb-2">Trening va xabardorlik</h2>
					<p>
						Biz halollik va odob me’yorlariga rioya etish madaniyatini shakllantirishga alohida e’tibor qaratamiz. Shu maqsadda muntazam seminar va tushuntirish ishlari olib boriladi.
					</p>
				</div>

				<div>
					<h2 class="font-bold text-xl mb-2">Korrupsiya oqibatlari</h2>
					<p>Korrupsion harakat sodir etgan shaxs intizomiy javobgarlikka tortiladi. Bu jazolarga quyidagilar kiradi:</p>
					<ul class="list-disc ml-6 mt-2 text-gray-700">
						<li>Ishdan bo‘shatish</li>
						<li>Maktabdan chetlashtirish</li>
						<li>Huquqiy javobgarlik va jinoiy ish qo‘zg‘atish</li>
					</ul>
				</div>

				<div>
					<p>
						3-maktab halollik va javobgarlik muhitini yaratish orqali barcha o‘qituvchi, o‘quvchi va ota-onalarning o‘zlarini xavfsiz, hurmatli va ishonchli jamoa a’zosi sifatida his
						qilishlarini ta’minlaydi.
					</p>
					<p class="font-medium mt-3">Keling, birgalikda 3-maktab sha’ni va akademik muhitining shaffofligini saqlaylik!</p>
				</div>
			</div>
		</section>
	</div>
</template>

<script setup>
const breadcrumbItems = [
	{
		name: 'Biz haqimizda',
		path: '/about-us'
	},
	{
		name: 'Korrupsiyaga qarshi siyosat',
		path: ''
	}
]
</script>
