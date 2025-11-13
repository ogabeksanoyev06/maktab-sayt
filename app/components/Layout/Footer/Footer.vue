<script setup>
const { t } = useI18n()

const active = ref(null)

const toggleAccordion = (index) => {
	active.value = active.value === index ? null : index
}

const items = [
	{
		label: 'Maktab haqida',
		children: [
			{ label: 'Maktab direktori', to: '/about-us/director' },
			{ label: 'Rahbariyat va xodimlar', to: '/about-us/management' },
			{ label: 'Tarkibiy tuzilma', to: '/about-us/structure' },
			{ label: 'Maktab nizomi', to: '/about-us/statute' },
			{ label: 'Maktab haqida', to: '/about-us' }
		]
	},
	{
		label: 'O‘quvchilarga',
		children: [
			{ label: 'To‘garaklar va klublar', to: '/opportunities/clubs' },
			{ label: 'Olimpiada tayyorlov', to: '/opportunities/olympiad-prep' },
			{ label: 'Qo‘shimcha darslar', to: '/opportunities/extra-classes' },
			{ label: 'Tadbirlar va ekskursiyalar', to: '/opportunities/events' }
		]
	},
	{
		label: 'Natijalar va yutuqlar',
		children: [
			{ label: 'Olimpiada natijalari', to: '/achievements/olympiads' },
			{ label: 'Bitiruvchilar muvaffaqiyatlari', to: '/achievements/alumni' }
		]
	},
	{
		label: 'Axborot xizmati',
		children: [
			{ label: 'Yangiliklar', to: '/news' },
			{ label: 'Kutilayotgan tadbirlar', to: '/events' },
			{ label: 'Fotogalereya', to: '/photo-gallery' },
			{ label: 'Videogalereya', to: '/video-gallery' }
			// { label: 'Yashil maktab tashabbusi', to: '/green-school' },
			// { label: 'Davlat dasturlari', to: '/state-programs' }
		]
	},
	{
		label: 'Tezkor havolalar',
		children: [
			{ label: 'E-Maktab', link: 'https://emaktab.uz/' },
			{ label: "Ta'limPro test tizimi", link: 'https://talimpro-uz.vercel.app/' },
			{ label: 'Yagona Milliy Test Markazi', link: 'https://uzbmb.uz/' }
		]
	},
	{
		label: 'Aloqa',
		children: [{ label: 'Fikr bildirish', to: '/contacts/send-feedback' }]
	}
]
</script>

<template>
	<footer>
		<section class="bg-[linear-gradient(110deg,_#005EFE_0.88%,_#003898_100.96%)] md:pt-10 relative overflow-hidden z-10">
			<div class="container max-md:px-0 pb-6">
				<nav class="grid grid-cols-1 lg:grid-cols-4 lg:gap-5">
					<div class="py-4 border-b border-border/20" v-for="(item, index) in items" :key="index">
						<div class="flex items-center justify-between lg:mb-5" @click="toggleAccordion(index)">
							<h3 class="text-base lg:text-2xl !leading-140 font-extrabold text-white">{{ item.label }}</h3>
							<span class="flex lg:hidden">
								<Icon name="lucide:chevron-right" class="text-white !leading-140 transition-300" :class="active === index ? '-rotate-90' : ''" />
							</span>
						</div>
						<UIAccordion :show="active === index" class="lg:hidden" :headerClass="['!p-0 hidden']">
							<template #body>
								<ul class="space-y-3 px-2 py-2 lg:px-0 lg:py-0">
									<li v-for="(link, i) in item.children" :key="i" class="group">
										<a v-if="link.link" :href="link.link" target="_blank" rel="noopener noreferrer" class="text-sm md:text-base lg:text-lg text-white/80 transition-300 hover:text-white">
											{{ link.label }}
										</a>
										<nuxt-link-locale v-else :to="link.to" class="text-sm md:text-base lg:text-lg text-white/80 transition-300 hover:text-white">
											{{ link.label }}
										</nuxt-link-locale>
									</li>
								</ul>
							</template>
						</UIAccordion>
						<ul class="hidden lg:block space-y-3">
							<li v-for="(link, i) in item.children" :key="i" class="group">
								<a v-if="link.link" :href="link.link" target="_blank" rel="noopener noreferrer" class="text-sm md:text-base lg:text-lg text-white/80 transition-300 hover:text-white">
									{{ link.label }}
								</a>
								<nuxt-link-locale v-else :to="link.to" class="text-sm md:text-base lg:text-lg text-white/80 transition-300 hover:text-white">
									{{ link.label }}
								</nuxt-link-locale>
							</li>
						</ul>
					</div>
				</nav>
			</div>
			<section class="py-4 backdrop-blur bg-white/10">
				<div class="container sm:flex justify-between items-center">
					<div class="flex lg:items-center flex-col space-y-3 md:space-y-0 gap-0 md:flex-row lg:gap-5">
						<div class="flex-y-center gap-3 md:gap-4">
							<ul class="flex gap-4">
								<li class="relative bg-blue-700 cursor-pointer rounded w-9 h-9 flex items-center justify-center lg:hover:!bg-red group transition-300">
									<span>
										<a target="_blank" class="shrink-0 text-base text-gray-300 leading-6 transition-300 w-9 h-9 rounded flex-center lg:group-hover:!text-white transition-300">
											<Icon name="lucide-instagram" class="text-white" />
										</a>
										<UITooltip class-style="!bg-black">Instagram </UITooltip>
									</span>
								</li>
								<li class="relative bg-blue-700 cursor-pointer rounded w-9 h-9 flex items-center justify-center lg:hover:!bg-red group transition-300">
									<span>
										<a target="_blank" class="shrink-0 text-base text-gray-300 leading-6 transition-300 w-9 h-9 rounded flex-center lg:group-hover:!text-white transition-300">
											<Icon name="lucide-send" class="text-white" />
										</a>
										<UITooltip class-style="!bg-black">Telegram </UITooltip>
									</span>
								</li>

								<li class="relative bg-blue-700 cursor-pointer rounded w-9 h-9 flex items-center justify-center lg:hover:!bg-red group transition-300">
									<span>
										<a target="_blank" class="shrink-0 text-base text-gray-300 leading-6 transition-300 w-9 h-9 rounded flex-center lg:group-hover:!text-white transition-300">
											<Icon name="lucide-facebook" class="text-white" />
										</a>
										<UITooltip class-style="!bg-black">Facebook </UITooltip>
									</span>
								</li>
								<li class="relative bg-blue-700 cursor-pointer rounded w-9 h-9 flex items-center justify-center lg:hover:!bg-red group transition-300">
									<span>
										<a target="_blank" class="shrink-0 text-base text-gray-300 leading-6 transition-300 w-9 h-9 rounded flex-center lg:group-hover:!text-white transition-300">
											<Icon name="lucide-youtube" class="text-white" />
										</a>
										<UITooltip class-style="!bg-black">Youtube </UITooltip>
									</span>
								</li>
							</ul>
						</div>
						<nuxt-link-locale to="/" class="inline-block md:ml-2.5 text-base text-white font-medium leading-140 transition-300 hover:text-red"> Foydalanish qoidalari </nuxt-link-locale>
						<nuxt-link-locale to="/" class="inline-block md:ml-2.5 text-base text-white font-medium leading-140 transition-300 hover:text-red">Maxfiylik siyosati</nuxt-link-locale>
					</div>
					<div class="flex-row md:flex gap-2 md:gap-8 items-center mt-2 sm:mt-0">
						<a href="tel:+998712070032" class="flex gap-2 items-center group">
							<Icon name="lucide-phone" class="text-white" />
							<p class="text-white font-medium group-hover:!text-red duration-300">+998712070032</p>
						</a>
						<a href="mailto:info@tmci.uz" class="flex gap-2 items-center group">
							<Icon name="lucide-mail" class="text-white" />
							<p class="text-white font-medium group-hover:!text-red duration-300">info@Bux3-maktab.uz</p>
						</a>
					</div>
				</div>
			</section>
			<section class="backdrop-blur bg-white/10 border-t border-white/10 py-3 text-xs font-medium leading-130 text-white relative z-1">
				<div class="container flex md:items-center justify-between gap-y-2 max-md:flex-col">
					<p>{{ $t('copyright_text', { year: new Date().getFullYear() }) }}</p>
					<div class="flex items-center gap-3">
						<a class="hover:underline" href="mailto:info@everest.education" target="_blank">info@3-maktab.education</a>
						<div class="bg-white/10 h-4 w-px" />
						<a class="hover:underline" href="tel:+998935564935" target="_blank">+998 93 081 91 40</a>
					</div>
				</div>
			</section>
			<img class="absolute bottom-0 right-0 w-full h-auto z-[-1]" src="/images/footer/pattern.svg" alt="" />
		</section>
	</footer>
</template>
