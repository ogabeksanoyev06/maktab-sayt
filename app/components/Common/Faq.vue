<template>
	<section class="container py-8 md:py-16">
		<div>
			<h2 class="title-style text-center max-w-screen-lg mx-auto">Tez-tez so'raladigan savollar</h2>

			<p class="text-center max-w-screen-lg mx-auto mb-5 md:mb-8 text-base">
				Izlayotgan narsangizni topa olmadingizmi? Savollaringiz bo'lsa, eng ko'p beriladigan savollardan javoblarni toping.
			</p>

			<div class="w-full mx-auto max-w-screen-lg space-y-4">
				<template v-for="(item, index) in items" :key="index">
					<UIAccordion
						:show="active === index"
						@toggle="toggleAccordion(index)"
						:wrapper-class="['rounded-lg bg-white border transition-300', active === index ? 'border-border' : 'border-transparent']"
					>
						<template #header>
							<div class="flex justify-between items-center rounded-xl">
								<span class="text-md sm:text-xl lg:text-[28px] font-bold text-black leading-[140%] pr-4 transition-colors duration-200">
									{{ item.title }}
								</span>
								<Icon :name="active === index ? 'lucide:minus' : 'lucide:plus'" class="transition-300 sm:!size-6" :class="active === index ? 'rotate-180' : ''" />
							</div>
						</template>

						<template #body>
							<div class="px-4 py-2">
								<p class="text-sm sm:text-base lg:text-2xl leading-[140%] opacity-90">
									{{ item.content }}
								</p>
							</div>
						</template>
					</UIAccordion>
				</template>
			</div>
		</div>
	</section>
</template>

<script setup>
const active = ref(0)

const toggleAccordion = (index) => {
	active.value = active.value === index ? null : index
}

const items = [
	{
		title: '3-maktab haqida umumiy ma’lumot',
		content: 'Qorovulbozor tumanidagi 3-maktab zamonaviy ta’lim muassasasi bo‘lib, o‘quvchilarga sifatli bilim va tarbiya berishga yo‘naltirilgan.'
	},
	{
		title: 'O‘quvchilarga qanday sharoitlar yaratilgan?',
		content: 'Maktabda barcha sinfxonalar kompyuterlar, interaktiv doskalar va yuqori tezlikdagi internet bilan ta’minlangan. Sport va madaniy to‘garaklar ham faol ishlaydi.'
	},
	{
		title: 'Maktabda nechta o‘qituvchi ishlaydi?',
		content: '3-maktabda 50 dan ortiq tajribali o‘qituvchi faoliyat yuritadi. Ular o‘z fanlari bo‘yicha ilg‘or usullardan foydalanadilar.'
	},
	{
		title: 'Maktabda to‘garaklar mavjudmi?',
		content: 'Ha, o‘quvchilar uchun ingliz tili, matematika, sport, robototexnika, raqs va san’at yo‘nalishlarida turli to‘garaklar mavjud.'
	},
	{
		title: 'Ota-onalar farzandining o‘qishini kuzatib bora oladimi?',
		content: 'Ha, ota-onalar elektron kundalik orqali farzandlarining dars natijalari va davomati bilan tanishib borishlari mumkin.'
	},
	{
		title: 'Maktabda xavfsizlik qanday ta’minlangan?',
		content: 'Maktab hududi videokuzatuv tizimi bilan jihozlangan. Kirish-chiqish tartibi qat’iy nazorat ostida bo‘ladi.'
	},
	{
		title: 'O‘quvchilarning sog‘lig‘i uchun qanday choralar ko‘riladi?',
		content: 'Maktabda tibbiy xodim faoliyat yuritadi. O‘quvchilarning sog‘lig‘ini doimiy nazoratda saqlash va gigiyena qoidalariga rioya etish muhim e’tiborda.'
	},
	{
		title: 'Maktab bilan qanday bog‘lanish mumkin?',
		content: 'Manzil: Qorovulbozor tumani, Buxoro viloyati. Telefon: +998 (90) 123-45-67. Elektron pochta: info@3maktab.uz'
	}
]
</script>
