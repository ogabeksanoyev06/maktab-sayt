<script setup>
const loading = ref(true)
const error = ref(null)
const article = ref(null)

const { t } = useI18n()

const route = useRoute()
const slug = computed(() => route.query.slug)

const breadcrumbItems = computed(() => [
	{
		name: t('news'),
		path: '/news'
	},
	{
		name: t('news_title'),
		path: ''
	}
])

useSeoMeta({
	title: () => (article.value ? `${article.value.title} - 3-sonli umumiy o‘rta ta’lim maktabi` : 'Yangilik - 3-sonli umumiy o‘rta ta’lim maktabi'),
	description: () =>
		article.value ? article.value.description.replace(/<[^>]*>/g, '').substring(0, 160) : '3-sonli umumiy o‘rta ta’lim maktabidagi yangiliklar, e’lonlar va tadbirlar.',
	ogTitle: () => (article.value ? article.value.title : 'Yangilik - 3-sonli umumiy o‘rta ta’lim maktabi'),
	ogDescription: () =>
		article.value ? article.value.description.replace(/<[^>]*>/g, '').substring(0, 160) : '3-sonli umumiy o‘rta ta’lim maktabidagi eng so‘nggi yangiliklar bilan tanishing.',
	ogImage: () => article.value?.featured_image_url || '/images/3-maktab/og-news.jpg',
	ogUrl: () => `https://3-maktab.uz/news-slug?slug=${slug.value}`,
	twitterTitle: () => (article.value ? article.value.title : 'Yangilik - 3-sonli umumiy o‘rta ta’lim maktabi'),
	twitterDescription: () => (article.value ? article.value.description.replace(/<[^>]*>/g, '').substring(0, 160) : '3-sonli umumiy o‘rta ta’lim maktabidagi yangilik va tadbirlar.'),
	twitterImage: () => article.value?.featured_image_url || '/images/3-maktab/og-news.jpg'
})
</script>

<template>
	<div class="pb-8 md:pb-16">
		<UIBreadcrumb :routes="breadcrumbItems" />
		<div class="container">
			<UIImage src="/images/image.jpg" image-class="rounded-lg mx-auto mt-1.5 md:mt-3 mb-3 md:mb-11 overflow-hidden object-cover w-full block max-w-[984px] aspect-[984/540] h-full" />
			<div class="mx-auto w-full max-w-[782px]">
				<h2 class="base-title-style md:!mb-4">Startap ekotizimini rivojlantirish bo‘yicha Muvofiqlashtiruvchi kengashning navbatdagi yig‘ilishi bo‘lib o‘tdi</h2>
				<div class="flex items-center gap-1 text-muted-foreground mb-2 md:mb-6">
					<Icon name="lucide:calendar" />
					<span class="font-medium text-sm">27.02.2026</span>
				</div>
				<div class="mb-3 md:mb-6">
					<p class="md:text-xl">
						Joriy yilning 7-mart kuni Toshkent shahridagi Yoshlar ijod saroyida startap ekotizimini rivojlantirish bo‘yicha Muvofiqlashtiruvchi kengashning navbatdagi yig‘ilishi bo‘lib
						o‘tdi. Tadbir O‘zbekiston Respublikasi Prezidenti Administratsiyasi bilan hamkorlikda O‘zbekiston Respublikasi Iqtisodiyot va moliya vazirligi, Raqamli texnologiyalar
						vazirligi hamda Yoshlar ishlari agentligi tomonidan tashkil etildi.
						<br />
						<br />
						Mazkur yig‘ilish 2026-yil 11-fevralda qabul qilingan O‘zbekiston Respublikasi Prezidentining PQ-59-sonli Qarorida belgilangan vazifalar ijrosini samarali tashkil etish hamda
						startap ekotizimini rivojlantirish bo‘yicha dolzarb masalalarni muhokama qilish maqsadida o‘tkazildi. Ushbu qarorga muvofiq respublikada g‘oya shakllantirish, loyiha ishlab
						chiqish, uni ishga tushirish va masshtablashtirish jarayonlarini qamrab oluvchi to‘rt bosqichli startap ekotizimi joriy etilgan.
						<br />
						<br />

						Kengash yig‘ilishini O‘zbekiston Respublikasi Prezidenti Administratsiyasining Moliyaviy texnologiyalar, raqamlashtirish va sun’iy intellekt bo‘yicha departamenti rahbari,
						Kengash raisi o‘rinbosari Bobur Xodjayev hamda O‘zbekiston Respublikasi Iqtisodiyot va moliya vazirining birinchi o‘rinbosari Ilhom Norqulov ochib berdi. Tadbirda Kengash
						a’zolari, vazirlik va idoralar vakillari, oliy ta’lim muassasalari, tijorat banklari, venchur fondlar, biznes angellar hamda yosh startapchilar ishtirok etdi.
						<br />
						<br />

						Yig‘ilish davomida startap ekotizimining 9 ta ustuvor yo‘nalishi bo‘yicha mas’ul tashkilotlar, oliy ta’lim muassasalari va tijorat banklari tomonidan qisqa hisobotlar taqdim
						etildi. Har bir yo‘nalish bo‘yicha joriy holat, amalga oshirilayotgan chora-tadbirlar hamda istiqboldagi maqsadli ko‘rsatkichlar muhokama qilindi. Jumladan, raqamli
						texnologiyalar va sun’iy intellekt (IT, AI), qishloq xo‘jaligi texnologiyalari (AgriTech) hamda boshqa strategik yo‘nalishlar bo‘yicha amalga oshirilayotgan ishlar yuzasidan
						ma’lumotlar berildi.
						<br />
						<br />

						Tadbir doirasida “Oliygohlar – startaplar generatori” dasturini joriy etish masalasi alohida muhokama qilindi. Mazkur dastur 2026-yil 1-sentabrdan boshlab ishga tushirilishi,
						uni amalga oshirish bo‘yicha tartiblar esa 2026-yil 1-mayga qadar tasdiqlanishi rejalashtirilgan. Xususan, Oliy ta’lim, fan va innovatsiyalar vaziri Qo‘ng‘ratbay Sharipov
						hamda Toshkent shahridagi INHA universiteti rektori Bobur Abdullayev tomonidan oliy ta’lim muassasalarida inkubatsiya va akseleratsiya dasturlarini rivojlantirish, startap
						trekerlari hamda startap menejerlarini tayyorlash bo‘yicha amalga oshirilayotgan ishlar haqida ma’lumot berildi.
						<br />
						<br />

						Shuningdek, hududlarda startap faoliyatini rivojlantirish masalalari ham muhokama qilindi. Yoshlar ishlari agentligi direktori birinchi o‘rinbosari Dilnozaxon Kattaxonova
						hududlarda “Startaplar klubi” ni tashkil etish bo‘yicha olib borilayotgan ishlar yuzasidan ma’lumot berdi. Farg‘ona viloyati hokimining maslahatchisi Baxromjon Djalilov esa
						hududiy tajriba va amaliy natijalar bilan o‘rtoqlashdi.
						<br />
						<br />

						Yig‘ilish davomida “Startaplar to‘g‘risida”gi qonun loyihasini ishlab chiqish bo‘yicha olib borilayotgan ishlar, jumladan qonun loyihasi konsepsiyasi hamda uni yanada
						takomillashtirish masalalari ham muhokama qilindi.
						<br />
						<br />

						Tadbir yakunida xalqaro tashkilotlar vakillari, jumladan, Xalqaro moliya korporatsiyasi (IFC) vakili Madina Nurmatova, Jahon banki va BMT Taraqqiyot dasturi (UNDP)
						ekspertlari startap ekotizimini rivojlantirish bo‘yicha o‘z taklif va tavsiyalarini bildirdi.
						<br />
						<br />

						Kengash doirasida startap ekotizimi vakillari bilan ochiq va konstruktiv muloqot tashkil etildi. Unda startapchilar o‘zlarining innovatsion g‘oyalari, takliflari hamda amaliy
						tashabbuslarini tegishli yo‘nalishlar bo‘yicha mas’ul rahbarlarga bevosita yetkazish imkoniyatiga ega bo‘ldi. Muloqot davomida startap loyihalarini qo‘llab-quvvatlash,
						moliyalashtirish mexanizmlarini kengaytirish, infratuzilma va institutsional sharoitlarni yaxshilash hamda innovatsion tashabbuslarni amaliyotga joriy etish masalalari
						yuzasidan fikr almashildi.
						<br />
						<br />

						Shuningdek, startapchilar uchun mavjud imkoniyatlar, davlat tomonidan yaratilayotgan qo‘llab-quvvatlash mexanizmlari hamda istiqboldagi hamkorlik yo‘nalishlari bo‘yicha
						batafsil tushuntirishlar berilib, ularning loyihalarini rivojlantirishga qaratilgan amaliy tavsiyalar bildirildi. Shu bilan birga, startapchilar o‘zlarining innovatsion
						g‘oyalari, takliflari hamda amaliy tashabbuslarini Startap ekotizimining yagona elektron platformasi orqali yetkazishi mumkinligi ma’lum qilindi:
					</p>
				</div>
				<div class="space-y-2 md:space-y-5 hidden-print">
					<div class="w-full h-[1px] bg-gray-200"></div>
					<div class="flex flex-col-reverse gap-3 md:flex-row items-center justify-between">
						<div class="flex justify-between max-sm:flex-col md:justify-auto gap-3 md:gap-5 w-full">
							<CommonButtonShare :title="''" />
							<CommonButtonCopy />
						</div>
						<div class="flex justify-between md:justify-auto gap-2.5 md:gap-4 items-center w-full md:w-max">
							<div class="flex gap-2 items-center">
								<Icon name="lucide-eye" class="text-muted-foreground !w-[18px]"></Icon>
								<p class="!font-semibold md:text-base text-sm truncate">34</p>
							</div>
							<CommonButtonPrint />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
