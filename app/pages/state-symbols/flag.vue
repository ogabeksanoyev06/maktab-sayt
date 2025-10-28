<template>
	<div>
		<UIBreadcrumb :routes="breadcrumbItems" />
		<div class="py-8 md:py-16">
			<div class="container">
				<common-section-wrapper :title="$t('state_symbols_flag')" class="mb-10" highlighted-title :actions="false" />
				<div class="flex flex-col items-start bg-white md:rounded-2xl py-5">
					<div class="flex justify-center w-full mb-6">
						<img src="/images/flag.jpg" alt="" class="max-w-[600px]" />
					</div>
					<div class="flex flex-col mx-auto gap-4 leading-8 text-lg text-gray-800 max-w-4xl">
						<p>
							O‘zbekiston Respublikasining 1991 yil 18 noyabrdagi 407-XII-sonli «O‘zbekiston Respublikasining Davlat bayrog‘i to‘g‘risida»gi Qonuni bilan tasdiqlangan. O‘zbekiston
							Respublikasining Davlat bayrog‘i — bayroqning butun uzunligi bo‘ylab o‘tgan to‘q moviy rang, oq rang va to‘q yashil rangli uchta endan tarkib topgan to‘g‘ri to‘rtburchak
							shaklidagi matodir. O‘zbekiston Respublikasi Davlat bayrog‘ining uzunligi 250 santimetrga, kengligi 125 santimetrga teng. Moviy rang, oq rang va yashil rangli enlarning
							kengligi bir xil. Har bir en 40 santimetrga tengdir. O‘zbekiston Respublikasi Davlat bayrog‘ining o‘rtasidagi oq rangli enning chetlaridan kengligi 2,5 santimetrga teng
							qizil hoshiyalar o‘tkazilgan.
							<br />
							<br />
							O‘zbekiston Respublikasi Davlat bayrog‘ining yuqori qismidagi moviy rangli enning yuz tomoni va orqa tomonida dastaga yaqin joyida oq rangli yangi oy va uning yonida o‘n
							ikkita oq rangdagi besh qirrali yulduz tasvirlangan.
							<br />
							<br />
							Oq rangli yangi oy va o‘n ikkita oq rangli besh qirrali yulduzning tasviri moviy rangli yuqori enning o‘rtasidan 70x30 santimetrga teng to‘g‘ri to‘rtburchakka sig‘adigan
							qilib joylashtirilgan.
							<br />
							<br />
							Oq rangli yangi oy vertikal holatda do‘ng tomoni dastaga qaratilgan, dastadan 20 santimetr masofada joylashtirilgan bo‘lib, diametri 30 santimetrli doiraga sig‘adi.
							<br />
							<br />
							O‘n ikkita oq rangli besh qirrali yulduz diametri 6 santimetrli doiraga sig‘adi. Doiralar orasidagi masofa 6 santimetr. Yulduzlar uzunasiga va tikkasiga quyidagi tartibda
							joylashadi: yuqori qatorda uchta, o‘rta qatorda to‘rtta va quyi qatorda beshta yulduz. Quyi qatordagi yulduzlar yangi oyning pastki uchidan 3,5 santimetr masofada
							joylashadi.
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
		name: t('state_flag'),
		path: ''
	}
]
</script>
