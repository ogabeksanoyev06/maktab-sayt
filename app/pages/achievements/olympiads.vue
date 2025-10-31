<template>
	<div class="pb-8 md:pb-16">
		<UIBreadcrumb :routes="breadcrumbItems" />

		<div class="container">
			<h1 class="title-style mb-2 sm:mb-3 md:mb-6 mt-3">
				{{ t('olympiads') }}
			</h1>

			<UITable :head="tableHead" :data="olympiadResults" :limit="10" :currentPage="1">
				<template #full_name="{ row }">
					<span class="font-semibold">
						{{ row.full_name }}
					</span>
				</template>

				<template #place="{ row }">
					<span :class="row.place == 1 ? 'text-yellow-500 font-bold' : row.place == 2 ? 'text-gray-400 font-bold' : row.place == 3 ? 'text-amber-700 font-bold' : 'text-gray-700'">
						{{ row.place }}
					</span>
				</template>

				<template #score="{ row }">
					<span :class="row.score >= 90 ? 'text-green-600 font-bold' : ''">
						{{ row.score }}
					</span>
				</template>
			</UITable>
		</div>
	</div>
</template>

<script setup lang="ts">
const { t } = useI18n()

const breadcrumbItems = [
	{
		name: t('olympiads'),
		path: ''
	}
]

const tableHead = [
	{ key: '_index', title: '#' },
	{ key: 'full_name', title: 'F.I.O' },
	{ key: 'school', title: t('school') },
	{ key: 'class', title: t('class') },
	{ key: 'subject', title: t('subject') },
	{ key: 'year', title: t('year') },
	{ key: 'stage', title: t('stage') },
	{ key: 'place', title: t('place') },
	{ key: 'score', title: t('score') }
]

const olympiadResults = [
	{
		id: 1,
		full_name: 'Karimov Azamat',
		school: '3-maktab, Qorovulbozor tuman',
		class: '9-A',
		subject: 'Matematika',
		year: 2024,
		stage: 'Viloyat',
		place: 1,
		score: 94
	},
	{
		id: 2,
		full_name: 'Olimova Madina',
		school: '3-maktab, Qorovulbozor tuman',
		class: '8-B',
		subject: 'Ingliz tili',
		year: 2024,
		stage: 'Tuman',
		place: 2,
		validation: true,
		score: 89
	},
	{
		id: 3,
		full_name: 'Saidov Abdulla',
		school: '3-maktab, Qorovulbozor tuman',
		class: '11-A',
		subject: 'Fizika',
		year: 2023,
		stage: 'Respublika',
		place: 'Finalchi',
		score: 87
	},
	{
		id: 3,
		full_name: 'Saidov Abdulla',
		school: '3-maktab, Qorovulbozor tuman',
		class: '11-A',
		subject: 'Fizika',
		year: 2023,
		stage: 'Respublika',
		place: 'Finalchi',
		score: 87
	}
]
</script>
