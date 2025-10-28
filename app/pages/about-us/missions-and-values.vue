<template>
	<div>
		<UIBreadcrumb :routes="breadcrumbItems" class="!bg-transparent" />

		<div class="bg-white">
			<div class="bg-gray-100">
				<div class="container">
					<div class="max-w-[782px] w-full mx-auto mt-3 pb-16 sm:pb-[189px]">
						<h1 class="title-style text-center mt-3 mb-3 md:mb-6">Missiya va Qadriyatlar</h1>

						<div class="space-y-4 leading-relaxed">
							<p>
								Bizning maktabimizning asosiy maqsadi — har bir o‘quvchini zamonaviy bilim, chuqur tafakkur va insoniy qadriyatlar bilan qurollantirishdir. Har bir bola o‘z salohiyatini
								to‘liq namoyon eta olishi uchun biz qulay muhit yaratamiz, u yerda o‘qish zavq, o‘sish esa faxr manbaiga aylanadi.
							</p>
							<p>
								Maktabimizning qadriyatlari — <b>halollik</b>, <b>mehnatsevarlik</b>, <b>mas’uliyat</b> va <b>mehr-oqibat</b>. Bu fazilatlar o‘quvchilarimizga nafaqat darsda, balki hayotda
								ham yo‘l ko‘rsatadi. Biz ularni mustaqil fikrlovchi, adolatni qadrlovchi va jamiyat uchun foydali shaxslar qilib tarbiyalaymiz.
							</p>
							<p>
								Maktab jamoasi o‘quvchilarga bilim berish bilan birga, ularda <i>ijodkorlik, yetakchilik, o‘zaro hurmat va milliy g‘urur</i> tuyg‘ularini shakllantiradi. Bizning
								o‘quvchilarning har biri kelajakda o‘z orzulariga erisha oladigan, mustaqil, fikrli va vatanparvar yoshlar bo‘lib voyaga yetishadi.
							</p>
							<p>
								Shuningdek, biz ota-onalar, o‘qituvchilar va o‘quvchilar o‘rtasidagi <b>hamkorlik</b>ni maktab hayotining asosi deb bilamiz. Har bir kichik muvaffaqiyat – bu katta mehnat
								va jamoaviy fidoyilikning natijasidir.
							</p>
						</div>
					</div>
				</div>
			</div>

			<div class="container -mt-8 sm:-mt-[125px]">
				<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
					<div v-for="(item, i) in cards" :key="i" class="border border-gray-100 sm:p-7 w-full pointer-events-none p-4 bg-white shadow-main rounded-xl sm:rounded-lg sm:space-y-4">
						<p class="font-bold mb-1 sm:mb-2">{{ item.title }}</p>
						<p class="text-muted-foreground sm:text-base text-sm">{{ item.text }}</p>
					</div>
				</div>
			</div>
			<div class="pt-32"></div>
		</div>
	</div>
</template>

<script setup>
const { t } = useI18n()

const breadcrumbItems = [
	{
		name: t('about_us.page_title'),
		path: '/about-us'
	},
	{
		name: t('about_us.missions_and_values'),
		path: ''
	}
]

// Kartalar uchun massiv (v-for)
const cards = [
	{
		title: 'Qadriyatlar',
		text: 'Halollik, mehr-oqibat, mas’uliyat, birdamlik, hurmat va vatanparvarlik.'
	},
	{
		title: 'Madaniyat',
		text: 'Maktabimizda o‘zaro hurmat, madaniyat va axloqiy qadriyatlar ustuvor. Har bir bola o‘zini erkin va qadrlangan his qiladi.'
	},
	{
		title: 'Missiya',
		text: 'Har bir o‘quvchini hayotga tayyorlash, ularga bilim bilan birga mehr, sabr va insoniylikni o‘rgatish.'
	},
	{
		title: 'Maqsad',
		text: 'Yangi avlodni ma’naviy barkamol, bilimli va Vatan ravnaqiga hissa qo‘shuvchi yetuk insonlar qilib tarbiyalash.'
	}
]
</script>
