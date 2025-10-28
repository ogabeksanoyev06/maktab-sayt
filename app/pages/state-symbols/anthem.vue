<template>
	<div>
		<UIBreadcrumb :routes="breadcrumbItems" />
		<div class="py-8 md:py-16">
			<div class="container">
				<common-section-wrapper :title="$t('state_symbols_anthem')" highlighted-title :actions="false" class="mb-10" />
				<div class="flex flex-col items-start bg-white md:rounded-2xl py-5">
					<div class="flex justify-center w-full mb-6">
						<img src="/images/anthem.png" alt="" />
					</div>
					<div class="flex flex-col mx-auto gap-4 max-w-4xl leading-8 text-lg text-gray-800">
						<p class="text-center font-semibold">
							«O‘zbekiston Respublikasining Davlat madhiyasi to‘g‘risida»gi Qonun 1992-yil 10-dekabrda O‘zbekiston Respublikasi Oliy Kengashining o‘n birinchi sessiyasida qabul qilingan.
							<br />
							<span class="italic">Musiqasi — Mutal Burhonov, so‘zi — Abdulla Oripov.</span>
						</p>

						<hr class="my-4 border-gray-300" />

						<div class="text-center font-medium">
							<p>
								Serquyosh hur o‘lkam, elga baxt, najot, <br />
								Sen o‘zing do‘stlarga yo‘ldosh, mehribon! <br />
								Yashnagay to abad ilmu fan, ijod, <br />
								Shuhrating porlasin toki bor jahon!
							</p>

							<p class="mt-4 font-semibold text-blue-600">Naqarot:</p>
							<p>
								Oltin bu vodiylar — jon O‘zbekiston, <br />
								Ajdodlar mardona ruhi senga yor! <br />
								Ulug‘ xalq qudrati jo‘sh urgan zamon, <br />
								Olamni mahliyo aylagan diyor!
							</p>

							<p class="mt-6">
								Bag‘ri keng o‘zbekning o‘chmas iymoni, <br />
								Erkin, yosh avlodlar senga zo‘r qanot! <br />
								Istiqlol mash’ali — tinchlik posboni, <br />
								Xaqsevar, ona yurt, mangu bo‘l obod!
							</p>

							<p class="mt-4 font-semibold text-blue-600">Naqarot:</p>
							<p>
								Oltin bu vodiylar — jon O‘zbekiston, <br />
								Ajdodlar mardona ruhi senga yor! <br />
								Ulug‘ xalq qudrati jo‘sh urgan zamon, <br />
								Olamni mahliyo aylagan diyor!
							</p>
						</div>
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
		name: t('state_anthem'),
		path: ''
	}
]
</script>
