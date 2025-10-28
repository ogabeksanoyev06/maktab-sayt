<script setup>
import { useQuery } from '@tanstack/vue-query'
const { $axios } = useNuxtApp()

const items = [
	{
		img: '/svg/computers.svg',
		title: 'Real exam computers',
		subtitle:
			'Sit in real exam-style computer rooms (CDI), just like on the official IELTS test. From the layout to the timing, everything is designed to recreate the actual exam atmosphere.'
	},
	{
		img: ['/svg/listining.svg', '/svg/reading.svg', '/svg/writing.svg'],
		title: 'Listening, Reading, Writing',
		subtitle:
			'Practice daily under strict exam conditions. Your performance is recorded and feedback is provided weekly, ensuring steady progress and familiarity with the test format.'
	},
	{
		img: '/svg/speaking.svg',
		title: 'Speaking',
		subtitle: 'Choose between offline or online sessions with an examiner. Receive structured feedback on your performance and know exactly where to improve before test day.'
	}
]

const { isPending, data } = useQuery({
	queryKey: ['MockSessions-section'],
	queryFn: () => {
		return $axios
			.get('ielts/MockSessions/', {
				params: {
					limit: 8
				}
			})
			.then((res) => res.data)
	}
})
</script>

<template>
	<section class="relative md:py-16 py-8">
		<div class="container grid gap-6 md:gap-9">
			<common-section-wrapper class="items-center text-center md:!gap-8" :title="$t('exam_conditions_title')" highlighted-title :subtitle="$t('exam_conditions_subtitle')" />
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				<ServicesCardSecondaryExamCondition v-for="(item, index) in items" :key="index" :icons="item.img" :title="item.title" :subtitle="item.subtitle" />
			</div>
		</div>
	</section>
</template>
