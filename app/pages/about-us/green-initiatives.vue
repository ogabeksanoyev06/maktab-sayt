<script setup>
const { t } = useI18n()

const contents = [
	{
		title: 'Quyosh energiyasi — kelajak manbai',
		content:
			'3-maktabda tabiatni asrash, tejamkorlik va ekologik tafakkurni shakllantirish — har bir o‘quvchi hayotining ajralmas qismiga aylangan. Shu maqsadda 2023-yil 22-oktabrda maktab tomiga o‘rnatilgan 150 kVt quvvatga ega quyosh panellari hozirda butun maktabni to‘liq elektr energiyasi bilan ta’minlamoqda. Endilikda barcha sinflar, laboratoriyalar va sport zallari quyosh nurlari yordamida yoritiladi. Bu tashabbus orqali 3-maktab har yili yuzlab kilovatt-soat elektrni tejaydi, havoga chiqadigan zararli CO₂ gazini kamaytiradi va atrof-muhitni himoya qiladi. Eng muhimi, o‘quvchilar amaliy tarzda “toza energiya” nima ekanini o‘rganib, o‘z ko‘zi bilan natijani ko‘rishadi. Har bir quyosh nuri endi biz uchun faqat yorug‘lik emas — u bilim, mas’uliyat va kelajakka bo‘lgan e’tibor ramziga aylandi.',
		image: 'https://tmci.uz/files/green_campus_images/%D0%A4%D0%BE%D1%82%D0%BE-51.jpg',
		file: null,
		is_card: false
	},
	{
		title: 'Chiqindilarni ajratish madaniyati',
		content:
			'3-maktabda ekologik madaniyatni oshirish yo‘lida chiqindilarni ajratish loyihasi yo‘lga qo‘yilgan. Sinf xonalarida, yo‘laklarda va maktab hovlisida uch xil chiqindi qutisi o‘rnatilgan: qog‘ozlar uchun ko‘k, plastmassa uchun sariq, umumiy chiqindilar uchun yashil. Har bir sinf o‘quvchilari o‘qituvchi rahbarligida haftalik ekologik navbatchilikni olib borishadi — chiqindilarni to‘g‘ri joylashtirish, qutilarni tozalash va tartibni saqlashadi. Bu tashabbus bolalarda tartiblilik, javobgarlik va tabiatga mehr tuyg‘usini kuchaytiradi. Har oyda “Eng toza sinf” tanlovi o‘tkazilib, g‘oliblar faxriy yorliq va sovg‘alar bilan taqdirlanadi. Shu orqali o‘quvchilar chiqindilarga befarq qarash emas, balki ularga ongli munosabatda bo‘lish zarurligini o‘rganishmoqda. Tozalik bizdan boshlanadi — degan shior 3-maktabda har kuni yangraydi!',
		image: 'https://tmci.uz/files/green_campus_images/Image-1.png',
		file: null,
		is_card: true
	},
	{
		title: 'Daraxt ekish — tabiatga tuhfa',
		content:
			'Tabiatni sevish — uni asrashdan boshlanadi. Shu bois 3-maktabda har bahor va kuz mavsumlarida “Yashil maktab” aksiyasi o‘tkaziladi. O‘quvchilar, o‘qituvchilar va ota-onalar birgalikda maktab hovlisida va atrofidagi bo‘sh joylarda daraxt ekish tadbirlarini tashkil etishadi. Har bir sinf o‘zining daraxtini ekadi, unga nom beradi va parvarish qilishni o‘z zimmasiga oladi. Shu yo‘l bilan bolalar o‘z mehnatining natijasini yildan-yilga ko‘rib, sabr, mas’uliyat va tabiatga mehrni chuqur his qilishadi. Hozirda maktab hovlisida 200 dan ortiq daraxt va gulzor mavjud. Har bir yashil yaproq bizning o‘quvchilarimizning qo‘l mehnati, ularning tabiatga bo‘lgan hurmatining timsolidir. Daraxt ekish – bu nafaqat ko‘kalamzorlashtirish, balki har bir o‘quvchining yuragida yashil tafakkurni uyg‘otishdir.',
		image: 'https://tmci.uz/files/green_campus_images/IMAGE_2025-03-14_113215.jpg',
		file: null,
		is_card: false
	},
	{
		title: 'Energiya tejamkorligi — barchamizning burchimiz',
		content:
			'3-maktabda har bir o‘quvchi energiyani tejash madaniyatini amalda o‘rganadi. Barcha binolarda energiya samarador LED chiroqlar va harakatga sezgir yoritish tizimlari o‘rnatilgan. Endi chiroqlar faqat odam kirganda yoqiladi, bu esa elektr sarfini sezilarli kamaytiradi. Shu bilan birga, maktabda “Energiya posboni” nomli o‘quvchi jamoasi tashkil etilgan — ular har kuni sinflarni aylanib chiqib, ortiqcha yongan chiroqlarni o‘chiradi, elektr jihozlarining to‘g‘ri ishlashini nazorat qiladi. O‘quvchilar energiyani tejash orqali maktab budjetiga ham hissa qo‘shayotganlarini bilib, bundan faxrlanishadi. Har yili energiya tejamkorligi bo‘yicha statistik hisobot tuziladi va eng faol sinf mukofotlanadi. Shu tariqa, 3-maktabda nafaqat bilim, balki ekologik ong ham o‘sib bormoqda — biz kelajak uchun javobgarmiz!',
		image: 'https://tmci.uz/files/green_campus_images/Image-1_TtfIfaN.png',
		file: null,
		is_card: true
	}
]
const iniatives = [
	{
		title: '"Yashil Makon"',
		slug: 'green-campus-initiatives-3',
		subtitle:
			'“Yashil makon” ekotadbiri — bu tabiatga mehr va kelajakka sadoqatni ifodalovchi muhim tashabbusdir. Ushbu loyihada o‘quvchilar va o‘qituvchilar daraxt ekish, gulzorlarni parvarish qilish hamda maktab atrofini ko‘kalamzorlashtirish orqali ekologik madaniyatni amalda namoyon etadilar.',
		image: 'https://tmci.uz/files/green_campus_initiative_main_images/photo_2025-05-23_15-22-04.jpg'
	},
	{
		title: 'Yashil Ta’lim',
		slug: 'green-campus-initiatives-2',
		subtitle:
			'Barqarorlik bo‘yicha xabardorlikni oshirish — ekologik mas’uliyatli jamiyat shakllantirishning asosi. “Yashil ta’lim” tashabbusi doirasida seminarlar, mahorat darslari, mehmon ma’ruzalar va o‘quv tadbirlari orqali o‘quvchilar va o‘qituvchilar iqlim o‘zgarishi, energiyani tejash hamda ekologik toza turmush tarzini o‘rganishadi.',
		image: ''
	},
	{
		title: 'Chiqindilarni qayta ishlash',
		slug: 'green-campus-initiatives-1',
		subtitle:
			'Chiqindilarni kamaytirish va qayta ishlash 3-maktabda barqaror rivojlanishning muhim yo‘nalishlaridan biridir. O‘quvchilar chiqindilarni alohida qutilarga joylashtirishni o‘rganishadi, bu orqali maktab hududi toza saqlanadi va resurslardan oqilona foydalanish odati shakllanadi.',
		image: ''
	},
	{
		title: 'Barqaror oziq-ovqat amaliyotlari',
		slug: 'green-campus-initiatives',
		subtitle:
			'Oziq-ovqat iste’moli ekologik barqarorlikda katta ahamiyatga ega. 3-maktab “Yashil Kampus” tashabbuslari doirasida chiqindilarni kamaytirish, sog‘lom ovqatlanish va ekologik toza mahsulotlardan foydalanish g‘oyalarini ilgari surmoqda.',
		image: ''
	}
]

const items = [
	{
		media_type: 'image',
		url: '/images/image.jpg'
	},
	{
		media_type: 'image',
		url: '/images/image.jpg'
	},
	{
		media_type: 'image',
		url: '/images/image.jpg'
	},
	{
		media_type: 'image',
		url: '/images/image.jpg'
	},
	{
		media_type: 'image',
		url: '/images/image.jpg'
	},
	{
		media_type: 'image',
		url: '/images/image.jpg'
	},
	{
		media_type: 'image',
		url: '/images/image.jpg'
	}
]

const aboutSectionRef = ref(null)

const scrollToAbout = () => {
	if (aboutSectionRef.value) {
		aboutSectionRef.value.scrollIntoView({ behavior: 'smooth' })
	}
}

const breadcrumbItems = [
	{
		name: t('about_us.page_title'),
		path: '/about-us'
	},
	{
		name: t('about_us.green_initiatives'),
		path: ''
	}
]
</script>

<template>
	<section class="min-h-[600px] h-full relative bg-bottom bg-no-repeat bg-contain w-full bg-[url(/images/main-bg.svg)]">
		<UIBreadcrumb :routes="breadcrumbItems" class="!bg-transparent" />
		<div class="container relative z-10 flex flex-col justify-center">
			<div class="flex flex-col lg:max-w-screen-sm mt-16 items-center lg:items-start text-dark justify-center h-full">
				<h1 class="text-2xl font-bold lg:text-left text-center">Yashil maktab tashabbuslari</h1>
				<p class="text-base mt-4 font-normal text-dark lg:text-left text-center">
					3-maktabda “Yashil maktab” tashabbusi o‘quvchilarda ekologik madaniyat va tabiatga mehr tuyg‘usini shakllantirishga qaratilgan. Maktab jamoasi energiyani tejash, chiqindilarni
					to‘g‘ri ajratish, daraxt ekish va yashil hududlarni parvarish qilish orqali atrof-muhitni asrashda faol ishtirok etmoqda. Ushbu tashabbus orqali o‘quvchilar tabiatni
					asrashning ahamiyatini amaliy tarzda o‘rganishadi, mas’uliyat va g‘amxo‘rlikni hayotlarining bir qismiga aylantirishadi. 3-maktab jamoasi ekologik toza, sog‘lom va barqaror
					kelajak sari intilmoqda.
				</p>

				<UIButton @click="scrollToAbout" :text="$t('more_btn')" class="mt-4 md:mt-8" />
			</div>
		</div>
	</section>
	<section ref="aboutSectionRef" class="py-8 md:py-16 bg-white">
		<div class="container flex flex-col gap-8">
			<div class="grid gap-8">
				<AboutCardСontents v-for="(item, index) in contents" :key="index" :item="item" />
			</div>
		</div>
	</section>
	<section class="py-8 md:py-16 container">
		<h2 class="text-xl md:text-3xl font-medium mb-6">Boshqa yashil kampus tashabbuslari</h2>
		<div class="grid gap-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
			<AboutCardIniatives v-for="(item, i) in iniatives" :key="i" :item="item" />
		</div>
	</section>
	<section class="bg-white py-8 md:py-16">
		<h2 class="text-xl md:text-3xl font-medium mb-4 container">Yashil lahzalar</h2>
		<article class="article container mb-4">
			Maktabimizning Yashil Kampus tashabbuslari orqali barqarorlikka qanday e’tibor qaratayotganini kashf eting. Quyosh energiyasi va ekologik binolardan tortib, daraxt ekish
			tadbirlari hamda chiqindilarni kamaytirish tashabbuslarigacha bo‘lgan sa’y-harakatlarimiz ushbu suratlarda aks etgan. Har bir qadamimiz sayyoramizning sog‘lom bo‘lishiga va
			yanada barqaror jamiyat qurishga hissa qo‘shadi.
		</article>
		<div>
			<SectionGalleryCarousel :items="items" />
		</div>
	</section>
	<SectionNewsCarousel title="Maktabdagi barqarorlik yangiliklari">
		<CardNews />
	</SectionNewsCarousel>
</template>
