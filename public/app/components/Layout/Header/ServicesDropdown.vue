<template>
	<UIDropdown
		:show="showDropdown"
		@toggle="handleDropdownToggle"
		:full-width="true"
		:head-class="`py-1 px-2.5 rounded-full transition-all duration-300 font-medium leading-130 text-sm hover:text-blue border border-transparent flex items-center gap-0.5 cursor-pointer ${showDropdown ? '!bg-[#0154F8]/10 !text-blue !border-[#0154F8]/20' : ''} ${theme !== 'white' ? 'text-white' : 'text-gray-6'}`"
		body-class=""
	>
		<template #head>
			<span :class="showDropdown ? 'text-blue' : theme !== 'white' ? 'text-white' : 'text-gray-6'">{{ $t('services') }}</span>
			<i
				class="icon-chevron text-base leading-4 transition-transform duration-300"
				:class="[{ 'rotate-180': showDropdown }, showDropdown ? 'text-blue' : theme !== 'white' ? 'text-[#606569]' : 'text-gray-4']"
			/>
		</template>

		<template #body>
			<div class="w-full">
				<div class="container mx-auto px-4">
					<div class="bg-white rounded-[30px] border border-[#F5F7FA] shadow-[0_30px_70px_-10px_rgba(39,48,56,0.20)] -mt-2">
						<div class="px-6 pt-3 pb-6">
							<div class="flex flex-col lg:flex-row gap-4 lg:gap-6 items-stretch">
								<!-- PRIMARY SERVICES -->
								<div class="lg:basis-[70%] flex flex-col gap-3 lg:max-w-[70%] min-w-0">
									<h3 class="uppercase text-[#97989A] text-[12px] font-medium">Primary Services</h3>

									<div class="grid grid-cols-2 lg:grid-cols-3 gap-4">
										<nuxt-link-locale
											v-for="item in items"
											:to="item.link"
											class="group w-full p-3 flex justify-between bg-white border border-[#EBEDF0] rounded-[12px] hover:border-[rgba(254,1,77,0.12)]"
										>
											<div class="flex flex-col gap-3 items-start">
												<div class="relative">
													<img :src="item.img" :alt="item.title" class="size-6 aspect-square object-contain transition-300 lg:opacity-0 lg:group-hover:opacity-100" />
													<img
														:src="item.imgGray"
														:alt="item.title"
														class="size-6 aspect-square object-contain transition-300 absolute inset-0 opacity-0 lg:opacity-100 lg:group-hover:opacity-0"
													/>
												</div>
												<span class="text-[#1C2329] text-sm font-bold">{{ item.title }}</span>
											</div>
											<i
												class="icon-arrow text-gray-4 text-lg transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:!text-[#FE014D] group-hover:translate-x-1"
											></i>
										</nuxt-link-locale>
									</div>
								</div>

								<!-- ADDITIONAL SERVICES -->
								<div class="flex flex-col gap-3 lg:basis-[30%] lg:max-w-[30%] min-w-0">
									<h3 class="uppercase text-[#97989A] text-[12px] font-medium">Additional Services</h3>

									<div class="flex flex-col gap-1">
										<!-- CDI Mock exams -->
										<nuxt-link-locale
											to="/services/cdi-mock-exams"
											class="group bg-white border border-[#EBEDF0] rounded-[12px] py-[10px] px-3 flex items-center justify-between hover:border-[rgba(254,1,77,0.12)]"
										>
											<span class="text-[#1C2329] text-sm font-bold">CDI Mock exams</span>
											<i class="icon-arrow text-gray-4 text-lg transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:text-blue group-hover:translate-x-1"></i>
										</nuxt-link-locale>

										<!-- Multi-Level Mock exams -->
										<nuxt-link-locale
											to="/services/multi-level-mock-exams"
											class="group bg-white border border-[#EBEDF0] rounded-[12px] py-[10px] px-3 flex items-center justify-between hover:border-[rgba(254,1,77,0.12)]"
										>
											<span class="text-[#1C2329] text-sm font-bold">Multi-Level Mock exams</span>
											<i class="icon-arrow text-gray-4 text-lg transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:text-blue group-hover:translate-x-1"></i>
										</nuxt-link-locale>

										<!-- IELTS Exam Registration Services -->
										<nuxt-link-locale
											to="/services/exam-registration"
											class="group bg-white border border-[#EBEDF0] rounded-[12px] py-[10px] px-3 flex items-center justify-between hover:border-[rgba(254,1,77,0.12)]"
										>
											<span class="text-[#1C2329] text-sm font-bold">IELTS Exam Registration Services</span>
											<i class="icon-arrow text-gray-4 text-lg transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:text-blue group-hover:translate-x-1"></i>
										</nuxt-link-locale>

										<!-- Examinations Centre -->
										<nuxt-link-locale
											to="/services/examinations-centre"
											class="group bg-white border border-[#EBEDF0] rounded-[12px] py-[10px] px-3 flex items-center justify-between hover:border-[rgba(254,1,77,0.12)]"
										>
											<span class="text-[#1C2329] text-sm font-bold">Examinations Centre</span>
											<i class="icon-arrow text-gray-4 text-lg transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:text-blue group-hover:translate-x-1"></i>
										</nuxt-link-locale>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</template>
	</UIDropdown>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
interface Props {
	theme?: 'white' | 'dark' | 'transparent'
}

const props = withDefaults(defineProps<Props>(), {
	theme: 'white'
})

const { t } = useI18n()
const showDropdown = ref(false)

const items = computed(() => [
	{
		img: '/images/services/icons/ielts.svg',
		imgGray: '/images/services/icons/ielts-gray.svg',
		title: t('classes.ielts'),
		link: '/services/ielts'
	},
	{
		img: '/images/services/icons/multi-level.svg',
		imgGray: '/images/services/icons/multi-level-gray.svg',
		title: t('classes.multi_level'),
		link: '/services/multi-level'
	},
	{
		img: '/images/services/icons/sat.svg',
		imgGray: '/images/services/icons/sat-gray.svg',
		title: t('classes.sat'),
		link: '/services/sat'
	},
	{
		img: '/images/services/icons/english.svg',
		imgGray: '/images/services/icons/english-gray.svg',
		title: t('classes.general_english'),
		link: '/'
	},
	{
		img: '/images/services/icons/russian.svg',
		imgGray: '/images/services/icons/russian-gray.svg',
		title: t('classes.russian_language'),
		link: '/'
	},
	{
		img: '/images/services/icons/math.svg',
		imgGray: '/images/services/icons/math-gray.svg',
		title: t('classes.mathematics'),
		link: '/services/math'
	}
])

function handleDropdownToggle(val: boolean) {
	showDropdown.value = val
}
</script>
