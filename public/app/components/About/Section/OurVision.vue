<template>
	<section class="relative z-10 overflow-hidden py-8 md:py-16">
		<div class="container">
			<common-section-wrapper :title="$t('our_vision')" highlighted-title content-class="max-w-[665px]" class="mb-10" />
			<ul class="flex flex-col gap-4 max-w-[600px]">
				<li v-for="(item, i) in items" :key="i" class="bg-white rounded-3xl flex items-center p-7 gap-4 shadow-[0_30px_50px_5px_rgba(39,48,56,0.06)]">
					<div class="w-1 h-11 bg-red rounded-full flex-shrink-0"></div>
					<p class="text-base font-medium leading-140 flex-1">
						{{ item.title }}
					</p>
				</li>
			</ul>
		</div>

		<img src="/images/about/our-vision-bg.png" alt="" class="absolute top-0 right-0 aspect-[1440/847] h-[847px] z-[-1]" />
	</section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const items = computed(() => [
	{ title: t('vision_section.text1') },
	{ title: t('vision_section.text2') },
	{ title: t('vision_section.text3') },
	{ title: t('vision_section.text4') },
	{ title: t('vision_section.text5') },
	{ title: t('vision_section.text6') }
])
</script>
