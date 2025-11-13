<script setup>
const { t } = useI18n()

const breadcrumbItems = computed(() => [
	{
		name: t('about_us.page_title'),
		path: '/about-us'
	},
	{
		name: t('management'),
		path: '/management'
	},
	{
		name: 'Usmonov Otabek Sanoyevich',
		path: ''
	}
])
</script>

<template>
	<div>
		<UIBreadcrumb :routes="breadcrumbItems" />

		<div class="container">
			<h1 class="title-style mt-3 mb-3 md:mb-6">Usmonov Otabek</h1>
			<div class="flex md:flex-row flex-col gap-2 md:gap-5 w-full">
				<UIImage src="/images/director.jpg" class="overflow-hidden object-cover max-h-72 mx-auto aspect-square rounded-lg" image-class="object-top" />
				<div class="py-4 md:py-8 px-4 md:px-7 bg-gray-200 rounded-lg w-full flex flex-col justify-between gap-4">
					<div>
						<h3 class="text-xl md:text-[28px] font-bold mb-3">Usmonov Otabek</h3>
						<p class="line-clamp-8">Maktab direktori</p>
						<p class="line-clamp-8">Qorovulbozor tumani 3-son umumiy o‘rta ta’lim maktabi direktori</p>
					</div>

					<div class="space-y-3 md:space-y-5">
						<div class="flex-y-center gap-3 md:gap-4">
							<nav class="flex gap-4">
								<a href="http://" target="_blank" class="relative rounded w-9 h-9 flex items-center justify-center bg-white transition-300 group lg:hover:!bg-primary">
									<Icon name="lucide-instagram" class="transition-300 text-muted-foreground lg:group-hover:!text-white" />
									<UITooltip>Instagram</UITooltip>
								</a>
								<a href="http://" target="_blank" class="relative rounded w-9 h-9 flex items-center justify-center bg-white transition-300 group lg:hover:!bg-primary">
									<Icon name="lucide-send" class="transition-300 text-muted-foreground lg:group-hover:!text-white" />
									<UITooltip>Telegram</UITooltip>
								</a>
								<a href="http://" target="_blank" class="relative rounded w-9 h-9 flex items-center justify-center bg-white transition-300 group lg:hover:!bg-primary">
									<Icon name="lucide-linkedin" class="transition-300 text-muted-foreground lg:group-hover:!text-white" />
									<UITooltip>Linkedin</UITooltip>
								</a>
							</nav>
						</div>

						<div class="flex flex-wrap gap-3 gap-y-1.5 md:gap-4">
							<div>
								<a href="tel:+998712070032" class="flex items-center gap-1 group">
									<Icon name="lucide-phone" class="text-primary"></Icon>
									<p class="text-sm font-medium duration-200 group-hover:text-primary">+998 71 207 00 32</p>
								</a>
							</div>
							<div>
								<a href="mailto:rector@tmci.uz" class="flex items-center gap-1 group">
									<Icon name="lucide-mail" class="text-primary"></Icon>
									<p class="text-sm font-medium duration-200 group-hover:text-primary">rector@tmci.uz</p>
								</a>
							</div>
							<div class="flex items-center gap-1 group">
								<Icon name="lucide-clock" class="text-primary"></Icon>
								<div class="text-sm font-medium duration-200 group-hover:text-primary">
									<p>Juma: 15:00–16:00</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="max-w-[782px] w-full mx-auto mt-4 md:mt-11 mb-8">
				<h3 class="font-bold mb-1 md:mb-5 text-lg sm:text-2xl md:text-[28px]">Biografiya</h3>
				<div class="md:text-base break-words space-y-3">
					<p>
						<strong>Usmonov Otabek Sanoyevich</strong> — uzoq yillar davomida xalq ta’limi tizimida faoliyat yuritib kelayotgan tajribali pedagog va rahbar. O‘z faoliyati davomida u
						ta’lim sohasida fidokorona mehnat qilib, maktab va maktabgacha ta’lim muassasalarida turli lavozimlarda ishlagan.
					</p>

					<p>
						O‘z mehnat faoliyatini 2001-yilda Qorovulbozor sanoat va transport kollejida direktor o‘rinbosari sifatida boshlagan. 2010-yildan boshlab Qorovulbozor tuman xalq ta’limi
						bo‘limida bo‘lim mudiri lavozimida faoliyat olib borgan.
					</p>

					<p>
						2016–2017-yillarda Qorovulbozor tumanidagi 3-umumta’lim maktabida ish yurituvchi lavozimida ishlagan. 2017–2020-yillarda esa Qorovulbozor tuman maktabgacha ta’lim bo‘limida
						bo‘lim mudiri sifatida faoliyat yuritgan. Keyinchalik shu bo‘limda sektor mudiri va kadrlar bo‘yicha inspektor lavozimlarida ham ishlagan.
					</p>

					<p>
						2020–2021-yillarda Qorovulbozor tuman Maktabgacha ta’lim bo‘limida Davlat va nodavlat maktabgacha ta’lim tashkilotlari faoliyati hamda o‘qitishning muqobil shakllarini
						tashkil etish sho‘basi mudiri lavozimida faoliyat olib borgan.
					</p>

					<p>
						2021-yildan boshlab Qorovulbozor tuman xalq ta’limi muassasalari faoliyatini metodik ta’minlash va tashkil etish bo‘limiga qarashli 3-son umumta’lim maktabida
						<strong>rus tili fani o‘qituvchisi</strong> sifatida faoliyat yuritib kelmoqda.
					</p>

					<p>
						Hozirda Usmonov Otabek Sanoyevich Qorovulbozor tumanidagi 3-umumta’lim maktabi direktori lavozimida ishlamoqda. Uning boshqaruvidagi jamoa maktabda ta’lim sifatini oshirish,
						ilg‘or pedagogik yondashuvlarni joriy etish va o‘quvchilarni zamonaviy bilimlar bilan ta’minlash yo‘lida samarali ish olib bormoqda.
					</p>
				</div>
			</div>
		</div>
	</div>
</template>
