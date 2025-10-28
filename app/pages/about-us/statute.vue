<script setup>
const { t } = useI18n()

const breadcrumbItems = [
	{
		name: t('about_us.page_title'),
		path: '/about-us'
	},
	{
		name: t('statute'),
		path: ''
	}
]
</script>

<template>
	<div>
		<UIBreadcrumb :routes="breadcrumbItems" />
		<div class="container">
			<common-section-wrapper :title="$t('responsibilities_title')" :actions="false" highlighted-title />
			<div class="mt-5">
				<p>
					<strong>1-bob. Umumiy qoidalar</strong> <br />
					1. Ushbu Nizom 3-sonli davlat umumta’lim maktabining (keyingi o‘rinlarda-ixtisoslashtirilgan umumta’lim maktabi) faoliyatini tashkil etish va amalga oshirish tartibini
					belgilaydi. <br />
					2. davlat umumta’lim maktabi o‘z faoliyatida yangi qabul qilingan O‘zbekiston Respublikasi Konstitutsiyasi, O‘zbekiston Respublikasining 2020-yil 23- sentyabrdagi O`RQ
					637-sonli «Ta’lim to‘g‘risida»gi qonuni va boshqa qonunlariga,O‘zbekiston Respublikasi Oliy Majlisi Palatalarining qarorlari, O‘zbekiston Respublikasi Prezidentining
					Farmonlari va qarorlari, O‘zbekiston Respublikasi Vazirlar Mahkamasining qarorlari, boshqa normativ-huquqiy hujjatlarga, shuningdek, O‘zbekiston Respublikasi maktabgacha va
					maktab ta’limi vazirining buyruqlari hamda tegishli tartibda ro‘yxatga olingan mazkur Nizomiga amal qiladi.
				</p>
			</div>
		</div>
	</div>
</template>
