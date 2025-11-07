<template>
	<div class="pb-8 md:pb-16">
		<UIBreadcrumb :routes="breadcrumbItems" />
		<div class="container">
			<h1 class="title-style mb-2 sm:mb-3 md:mb-6 mt-3">{{ $t('alumni') }}</h1>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
				<AchievementsCardAlumni v-for="(item, index) in alumni" :key="index" :photo="item.photo" :name="item.name" :birth="item.birth" :place="item.place" :bio="item.bio" />
			</div>

			<div class="flex items-center justify-center mt-9">
				<UIButton variant="outline" :text="$t('btn_more')" icon="lucide-arrow-down" />
			</div>
		</div>
	</div>
</template>

<script setup>
const { t } = useI18n()

const alumni = [
	{
		photo: '/images/user-student.webp',
		name: 'Sanoyev Odiljon Otabekovich',
		bio: 'Odiljon Sanoyev — raqamli mahsulotlar dizaynida tajribali mutaxassis. Mobil va web platformalar uchun intuitiv va vizual jozibador interfeyslar yaratishda mahoratli. Hozirda Lead Designer/ UI/UX Designer rolida faoliyat yuritib, mahsulot dizayn jarayonining boshlang‘ich kontseptsiyasidan tortib foydalanuvchi tajribasining oxirgi bosqichigacha bo‘lgan barcha bosqichlari bilan ishlaydi. “Dizayn — bu chalkashlikni bartaraf etish va mazmunli tajriba yaratish” deb hisoblaydi. Innovatsion uslublar, 3D dizayn elementlari va fintech jihatdan qiziqarli loyihalar bilan shug‘ullanadi. Katta jamoalarda va mahsulot guruhlarida ham samarali ishlay oladi, foydalanuvchi ehtiyojlarini chuqur tushunadi va biznes maqsadlari bilan uyg‘un dizayn echimlarini taklif qiladi.'
	},
	{
		photo: '/images/user-student.webp',
		name: 'Madina Xolmurodova',
		bio: 'IT sohasi bo‘yicha xalqaro kompaniyada dasturchi bo‘lib ishlaydi.'
	},
	{
		photo: '/images/user-student.webp',
		name: 'Azamat Qurbonov',
		bio: 'Tibbiyot fakulteti bitiruvchisi, shifokor bo‘lib faoliyat yuritmoqda.'
	},
	{
		photo: '/images/user-student.webp',
		name: 'Dilnoza Abdurahmonova',
		bio: 'Pedagogika universitetidan tashqari, chet elda ham malaka oshirgan.'
	},
	{
		photo: '/images/user-student.webp',
		name: 'Akbarxon Karimov',
		bio: 'Harbiy xizmatni o‘tagan, hozirda davlat xavfsizlik tizimida ishlaydi.'
	},
	{
		photo: '/images/user-student.webp',
		name: 'Ziyoda Abdullayeva',
		bio: 'Marketing bo‘yicha mutaxassis, yirik kompaniyada ishlaydi va blogerlik ham qiladi.'
	},
	{
		photo: '/images/user-student.webp',
		name: 'Shahboz Jo‘rayev',
		bio: 'Sport yo‘nalishida xalqaro musobaqalar sovrindori, murabbiy sifatida faoliyat yuritmoqda.'
	},
	{
		photo: '/images/user-student.webp',
		name: 'Laylo Shodmonova',
		bio: 'Moliya sohasida ekspert, xalqaro kompaniyada ishlaydi.'
	}
]

const breadcrumbItems = [
	{
		name: t('alumni'),
		path: ''
	}
]
</script>
