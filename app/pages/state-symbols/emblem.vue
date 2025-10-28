<template>
	<div>
		<UIBreadcrumb :routes="breadcrumbItems" />
		<div class="py-8 md:py-16">
			<div class="container">
				<common-section-wrapper :title="$t('state_symbols_emblem')" highlighted-title :actions="false" class="mb-10" />
				<div class="flex flex-col items-start bg-white md:rounded-2xl py-5">
					<div class="flex justify-center w-full mb-6">
						<img src="/images/emblem.jpg" alt="" />
					</div>
					<div class="flex flex-col mx-auto gap-4 leading-8 text-lg text-gray-800 max-w-4xl">
						<p>Davlat gerbi O‘zbekiston Respublikasining 1992 yil 2 iyuldagi 616-XII-sonli «O‘zbekiston Respublikasi Davlat gerbi to‘g‘risida»gi Qonuni bilan tasdiqlangan.</p>
						<p>
							O‘zbekiston Respublikasi Davlat gerbi quyidagi ko‘rinishga ega: tog‘lar, daryolar va so‘l tomoni bug‘doy boshoqlaridan, o‘ng tomoni esa chanoqlari ochilgan g‘o‘za
							shoxlaridan iborat chambarga o‘ralgan gullagan vodiy uzra quyosh zarrin nurlarini sochib turadi. Gerbning yuqori qismida Respublika hurligining ramzi sifatida sakkizburchak
							tasvirlangan bo‘lib, uning ichki qismida yarim oy va yulduz tasvirlangan. Gerbning markazida baxt va erksevarlik ramzi — qanotlarini yozgan Humo qushi tasvirlangan. Gerbning
							pastki qismida O‘zbekiston Respublikasi Davlat bayrog‘ini ifoda etuvchi chambar lentasining bantida «O‘zbekiston» deb yozib qo‘yilgan.
						</p>
						<p>
							O‘zbekiston Respublikasi Davlat gerbining rangli ko‘rinishida: Humo qushi va daryolar — kumush rangida; quyosh, boshoqlar, paxta chanoqlari va «O‘zbekiston» yozuvi — oltin
							rangida; g‘o‘za shoxlari va barglari, tog‘lar va vodiy — yashil rangda; chanoqlardagi paxta — oq rangda; lenta — O‘zbekiston Respublikasi Davlat bayrog‘ining ranglarini aks
							ettiruvchi uch xil rangda; sakkizburchak — oltin zarhal bilan hoshiyalangan holda havo rangda; yarim oy va yulduzlar — oq rangida tasvirlangan.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
const { t } = useI18n()

const breadcrumbItems = [
	{
		name: t('state_emblem'),
		path: ''
	}
]
</script>
